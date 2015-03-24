#Gulp intro

Gulp Makes you more efficient:

CI, Testing, Development.  Gulp uses streams to provide files which you can alter and send to a destination.

###Automatic Tasks

- Code Quality
- Tests
- Build Pipeline: Develop, Analyze, Test, Build and Deploy
- Easier to debug and more readable

Work smarter not harder :).

Gulp is stream based.  Code over configuration.  Stream Based. 1100+ plugins.

##Gulp has 4 API calls

Task, Source, Destination and Watch

###gulp.task(name [,dep],fn)

```javascript
gulp.task('js', ['jscs', 'jshint'], function() {
  return gulp
      .src('./src/**/*.js')
      .pipe(concat('all.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./build/'));//outputs to ./build/app/admin/admin.js
});
//Tasks jshint and jscs both run in parallel first before task js runs.
//Dependency tasks run in parallel, not in sequence.  THEN, the task kicks off.
```

###gulp.src(glob [,options])

See previous example.  

- Takes a file system glob (set of files.  )
- Emits files that match
- Optionally specify options to apply to the glob.
  - E.G. `.src('/**/*.js', { base: './src/'})`
  - base of ./src/ impacts how build outputs files.  (See previous example)

Use gulp.src to stream files when you need:

- linting (jshint)
- testing (karma/jasmine)
- Optimization (minify, less to css, concatenate code)
- Modify files

###gulp.dest(folder [,options])

Piped files are writteo to the file system.  Optionally specify options to apply
to the to the output folder.

Use it to

- Write files
- Write to destination different from source
- write to same file or new file.

###gulp.watch(glob [,options], tasks)

```javascript
gulp.task('lint-watcher', function() {
  gulp.watch('./src/**/*.js', ['jshint', 'jscs']);
});
```
Run one or more tasks when a file matched by glob changes.

There is another overload: `gulp.watch(glob, [,options], cb)`
```javascript
gulp.task('lint-watcher', function() {
  gulp.watch('./src/**/*.less', function(event){
    console.log('watched event ' + event.type } ' for ' + event.path);
  });
});
```
Run a callback function when a file matched by the glob changes.
Callback is passed event object with type and path.

Use gulp watch to

- Make Tests run
- Code lints
- Compile out to css

##No sudo hack

http://jpapa.me/nomoresudo

####NPM stands for "Package manager or javascript package manager"
