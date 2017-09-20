const gulp       = require('gulp');
const nodemon    = require('gulp-nodemon');
const plumber    = require('gulp-plumber');
const livereload = require('gulp-livereload');


gulp.task('develop', () => {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js coffee handlebars',
    stdout: false
  }).on('readable', () => {
    this.stdout.on('data',  (chunk) => {
      if (/^Express server listening on port/.test(chunk)) {
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('default', [
  'develop'
]);
