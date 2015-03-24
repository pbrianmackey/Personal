#Introduction to C++ for C# Developers

Fast because allows direct access to RAM.  
SIMD: Single input multiple data
ASM: inline assembly
Current Version C++11: http://en.wikipedia.org/wiki/C%2B%2B14


###Helo World
- Folders are not folders rather they are filters (in VS 2013).

###Problems
Verbose
Manual memory management
No MetaData (reflection, annotation).  
RTTI: Runtime type information.  poor substitute for metadata.
Preprocessor:  Source of bugs and ambiguities.
Unreadable compiler messages and pointing to wrong file.
Compilation is slow (some people use cluster build systems).
Poor unicode support.
Backward compatability with C.
Allows "write only magic".  Write code once and never be able to read it again.  (template metaprogramming)
Testing is difficult (no metadata). (no [Test] attribute).
Third party libraries often come as source code that has to be compiled.

###Compilers
- Lots of compilers exist.  MSVC, MS Visual C++ compiler.  
- Intel C++ compiler (not free I dont think https://software.intel.com/en-us/c-compilers)
- GCC : GNU Compiler Collection
- LLVM : Clang front end. modern, diagnostic messages. (default on OSX)

###Build systems

 ####Local Build systems
 - Make
 - CMake
 - MSBuild

 ####Distributed Build systems
  - distcc
  - ElectricAccelorator
  - Incredibuild (recommended.  Make and MSBuild support)

  ###IDE's
  - Visual Studio (duh)
  - Qt Creator (good for linux/osx)
  - Netbeans, Eclipse, JetBrains C++ IDE

  ###Libraries
  - C++ Std Library
  - Std Template Library (SPL) http://en.wikipedia.org/wiki/C%2B%2B_Standard_Library
  - Boost (very popular)
  - Qt Framework (xplatform UI developement)
  - Intel Libs (part of parallel studio)
    - Math Kernal
    - Threading BUilding Blocks
    - Integrated Performance Primitives
  - Libraries can be included Static (the whole project imported into yours)
  - Or Dynamic: lib as a seperate file (DLL, .SO (shared library))
  - Header only includes whole library in header file.  No Static or Dynamic in this case.
  - .LIB files are library files. A dynamic file still needs a LIB file for linking.

  ####Adding libraries
  - Visual Studio > Add Project > Visual C++ > Win32 Project

  ####Adding a dynamic library
  - Similar to process of static library.  Boilerplate code comes with it to help setup the DLL process.  Just leave it be and add a new method.

  ####Adding a reference to a static library (don't have to ship the lib file)
  - Project Properties > Configuration Properties > Linker > Input > Additional Dependencies > Type in file name
  - Project Properties > Configuration Properties > Linker > General > Additional Library Directories > $(OutDir) (or wherever the directory is located)
  - DLL is similar process.


    #small libraries (includes)
    -include <cassert> (test assertions with assert())
    - (pragma once) is an include guard to prevent the same file from being imported 2x

    #header files
    - .h file required for anything you want to expose to the outside world
    - Some libraries are header only.  Meaning the .h contains the implementation too (no cpp file)

###Compilation and Linking
- Preprocessor : Initial compilation stage
- # : Symbol says its a preprocessor symbol (E.G. #if _DEBUG / #endif)
- C++ is much more powerful preprocessor.  Macros allowed.  More dangerous.

####Linking
- After preprocessing all #include statements are implemented.  Meaning each .cpp file is physically imoprted into the current file recursively.  Each .cpp file becomes one very big file called a "translation unit".
- Each "translation unit" can be compiled individually as an object file (main.obj, foo.obj).  This is how distributed build systems build files in parallel.
- Linkers do the job of connecting the object files (main.obj & foo.obj) to create a library or executeable.
- #include "foo.h".  If foo.h contains Method() then any file with #include will be linked to Method().

###Symbol Exports
- We have no metadata in C++ (unlike C#).
- Exporting a symbol allows a library to advertise its interface
- a dynamic library has an export table.  
- DUMPBIN.EXE on windows can list exported symbols.
- Mangling scheme permits things like function overloading
- Exported funcions can be consumed by other languages (not classes)

###Getting to classes from other languages
- COM, automatic interface, dynamic keyword
- Managed C++, C++/CLI can bridge the gap from native C++ to .NET.

#Notes
- VS cannot tell if a project depends on other projects in the same solution by default.  You can go to Right click the project > Build Dependencies > Project Dependencies > check the projects.

##Integrals
- int n; > Default value is unknown.  signed int.  size is platform specific.
- Uninitialized variables in VS show up as "0xCCCCCCCC"
- use sizeof(i) to figure out the size of the int.
- Initialize all your variables
- use <cstdint> header.

##float

syntax:  float a = 2.f//0 can be omitted
typically 32 bits, but can differ by compiler and machine.

double:  typically 64 bit.
long double: 80 bit extended precision on x86.  Some compilers equate long to double.  Recommended to avoid.


##bool

numerics can be converted to bool by compiler.

##pointers

initialized with:

int *a = &b;//or...
int *a = nullptr;
//get value out
float a = *b;//dereferencing

Its ok to check pointers with If(pointer) to see if it exists

##special syntax for class/structs (person->name).

//gotcha
int* x,y;//only x is a pointer here

double **p;//pointer to pointer

Compilers perform no checking of pointers.

###References

Variables by default are pass by value.  You need to use references or pointers to get the value changed.  Similar to the C#/Java reference type concept.  However, references work on value types too.  There is no "reference type".

int &x = y;
"x is a reference to y here."  When you change x you change y too.  No operator required to access the value.

Pointer to reference is illegal.  Use references over pointers when possible.  This avoids the need to put & in front of parameters.


##Arrays
C arrays not too friendly as they are pointers with unknown length.  std::array (known size), std::vector (unknown size).  

##Character encoding

_t is used in windows to denote support for both char and wchar (wide character).  Wide is compiler specific and recommended not to be used, however windows uses it like crazy.

char/wchar, string/wstring, main/wmain, cout/wcout.

####Strings

Strings are arrays of characters terminated by zero.

char *text = "hello string";

wide characters:

wchar_t *text = L"hello";

Better to use std::string (std::wstring available). Provides extensions too.  Avoid C-style strings.  If unicode is turned off everything uses char.  If unicode is turned on everything uses wchar_t.

##stdafx.h

Has to be included as first line in all cpp files.  This generates the ".pch or precompiled header" file in debug folder.

Contains all the references to all the .h files you need in your program.  This is used in combination with precompiled headers.  So is targetversion.h.  targetversion.h is not a necessary file.  stdafx.h is a necessary file.  

##The first time a file is compiled all the references have to be brought into the file.  After that the file can stand alone.  This is why we have precompiled headers.

##Type inferencing

C++ supports "auto" variables similar to C#'s "var".

##Stack and the heap

Stack variables are cleaned up automatically when you exit the scope.  Stack size is limited.  Heap stores large items.  Use new keyboard to put things on the heap.  These have to be cleaned up by you!  new'd items are always pointers.  

std::string s("hello");//heap
std::string* t = new std::string("world");//stack

delete t;//deallocate

int* values = new int[12];

delete[] values;//note the different syntax

##Functions

funky new syntax:

auto add2(int a, int b) -> int {return a + b; }

treat a function as a template (don't know what templates are yet)

inline int add(int a, int b) {return a + b; }

you can use the const modifier on parameters.

##Lambda Functions

```C++
auto doubleValue = [](int z) {return z * 2;};
```

####Lambda Capture

[] - does not access enclosing scope
[=]- capture everything by value
[&]- capture everything by reference
[x, &y]- capture x by value, y by ref
[&, z]- capture everything by reference, but z by value

##Enums

enum Color {Red, Green, Blue};

In C++ enum declarations have global scope.  So its similar to declaring

int Red = 0;

So its better to encapsulate the state:

enum class ColorEncapsulated {Red, Green, Blue};

You can declare data type and assign values too.

enum class ColorEncapsulated: short {Red, Green, Blue = 4};

##Union

```C++
union Data {int integer; float fpnumber; char* text;};
Data d;
d.fpnumber = 0.5f;
```
All these fields occupy the same memory space.  So you can only assign 1 of the three types.


[__m128](https://msdn.microsoft.com/en-us/library/ayeb3ayc.aspx) is a SIMD (single instruction multiple data) cpu register.  m128_f32 (128 bit register in the cpu) allows you to perform an operation on several numbers at the same time.  You can add multiple numbers at the same time.  You are re-using the same memory space.

##Structures

```c++
struct Size
{
  int width, height;
};

Size s{15, 10};
s.height;
```

A struct is a container for a certain amount of data.  There is no inheritance.

##Iteration

```C++
int a[]{1,2,3,4};
for(int *p = a, *e = a + 4; p != e; ++p)//pointer arithmetic on *e
//*e points to the element in a just beyond the last element (end)
cout << *p << "\t";
cout << endl;

//use helpers (method 2)
auto beginArray = begin(a);
auto endArray = end(a);

for(; ba != ea; ba++)//while ba != ea keep going

//method 3.  foreach

for(auto value : a)
  cout << value << "\t";
```

##OO programming

```c++
//person.h
class Person
{
  public:
    int age;
    string name;

    void greet();
}

//main.cpp
int main()
{
  Person p;
  p.name = "Jane Doe";
  p.age = 30;

  Person *p2 = new Person;
  p2->age = 25;
  p2->name = "John Doe";

  delete p2;
  getchar();
  return 0;
}
```

definining implementation of a func() "inline" means in the header file.
Alternatively, func() can be defined as a member function in Person.cpp:

```c++
//person.cpp
void Person::greet()
{
  cout <<"My name is " << name <<
  this->name << " and I am " <<
  age << " years old " << endl;
}
```
`this` is a pointer to self in a class.  Constants are not static by default.

```c++
const static int male = 1;
```

Members default to private accessibility.  

####Static methods

```c++
//Person.h
class Person
{
  static int lifeExpectancy;
  static int getLifeExpectancy();
}

//Person.cpp

int Person::lifeExpectancy = 80;//Have to initialize static member here!
int Person::getLifeExpectancy()//notice no static
{
  return lifeExpectancy;
}
```

####Constructors

```c++
//.h
class Person
{
  static int lifeExpectancy;
public:
  const static int female = 0;
  const static int male = 1;
  int age;
  string name;
  int sex;
  Address *address;

  Person(int age, string name, int sex);

  //overload
  Person(int age, string name, int sex, int house_number,
    string street_name, string city);

  //dstor
  ~Person();

  void greet();
  static int getLifeExpectancy();
}

//.cpp
#include "stdafx.h"
#include "Address.h"
#include "Person.h"

Person::Person(int age, string name, int sex)
: age(age), name(name), sex(sex)//initialize fields
{

}
//overload
Person::Person(int age, string name, int sex, int house_number,
  string street_name, string city)
  :Person(age, name, sex)
:
{
  if(address != nullptr)
    delete address;

  address = new Address(house_number, street_name, city);
}  
Person::~Person()
{
  if(address != nullptr)
  {
    delete address;
    address = nullptr;
  }
}


void Person::greet();
{
  cout << "My name is " <<
  name << " and I am " <<
  endl;
}

int Person::getLifeExpectancy()
{
  return lifeExpectancy;
}

int Person::lifeExpectancy = 80;

//program.cpp
int main()
{
  Person p;//same as writing Person p();//uses default cstor.
}
```
##Includes

If an include relies on another include then it must be listed first.

##Copy cstor

C++ automatically includes a copy cstor.  The default is a memberwise copy.
This means the original and the copy are both modified if you change a pointer or reference.

```c++
//Once you have a copy cstor it will be invoked if you use:
Person p5 = *p3;
```
##Inheritance

```c++
//employee.h
#pragma once
#include "Person.h"
class Employee : public Person//note the strange public modifier
  {
    public:
      Employee(int age, string const& name, string sex)
        : Person(age, name, sex)
        {}
  };
```
##casting
```c++
Person& person = employee;//thats fine as is
Employee& employee = static_cast<Employee>(person);//type cast
```

##Access Restrictions
By default everything is private.  There is only private, protected and public.
You can make a friend class to access private members.  protected is accessible within the class and within inheritors. 
