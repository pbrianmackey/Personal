#Compilers

##Interpreter

An interpreter is another common kind of language processor. Instead of producing a target program as a translation, an interpreter appears to directly execute the operations specified in the source program on inputs supplied by the user, as shown in Fig. 1.3.

##Linker

Resolves external memory addresses where code in one file may refer to a lcoation in another file.

##Comparison

The machine-language target program produced by a compiler is usually much faster than an interpreter at mapping inputs to outputs . An interpreter, however, can usually give better error diagnostics than a compiler, because it executes the source program statement by statement.

##Source to Source translator

The machine-language target program produced by a compiler is usually much faster than an interpreter at mapping inputs to outputs . An interpreter, however, can usually give better error diagnostics than a compiler, because it executes the source program statement by statement.


##Analysis and Synthesis

Analysis runs then synthesis.

The analysis part breaks up the source program into constituent pieces and imposes a grammatical structure on them.  The analysis part also collects information about the source program and stores it in a data structure called a symbol table, which is passed along with the intermediate representation to the synthesis part.


The synthesis part constructs the desired target program from the interme- diate representation and the information in the symbol table.  The analysis part is often called the front end of the compiler; the synthesis part is the back end.


##Lexical Analysis

The first phase of a compiler is called lexical analysis or scanning.  The first phase reads the stream of characters making up the source and turns them into sequences called lexemes.  For each lexeme the lexical analyzer produces a token of the form:

(token-name, attribute-value)

attribute-value points to an entry in the symbol table for this token.  token-name is an abstract symbol used during syntax analysis.


##Typical phases of a compiler

character stream > Lexical analyzer > token stream > syntax analyzer > syntax tree
> Semantic Analyzer > syntax tree > Intermediate Code Generator > intermediate representation
> machine independent code optimizer > intermediate representation > code generator
> target machine code > machine dependent code optimizer > target machine code

##Lexeme sample

source code:  position = initial + rate * 60


1. position: token (id,1).  id is an abstract symbol and 1 points to the symbol table entry.  Symbol table holds name and type for identifier.

2. =: token (=).  No attribute value needed.  

3.  initial: (id, 2).
4. +: (+).
5. rate: (id,3)
6. *: (*).
7. 60: (60).

whitespace is discarded.

##Syntax analysis/parsing

Uses the first component of the tokens (firstComponent,secondComponenent) to create a syntax tree in which interior nodes are operations and children are arguments.  

##Semantic Analysis
Uses the syntax tree and symbol table to check the source for semantic consistency with the language definition.  Gathers type information.  

##Phases into passes

In an implementation, several phases may be grouped together into a pass that procceses 1 file.
