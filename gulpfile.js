var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

gulp.task('watch', ['build'], function () {
  gulp.watch(['*.html'], { interval: 1000}, ['html']);
  gulp.watch(['*.scss'], { interval: 1000 }, ['css']);
  gulp.watch(['main.js'], { interval: 1000 }, ['js']);
});

gulp.task('build', ['html', 'css', 'js']);

gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments:true}))
    .pipe(gulp.dest('dist'))
});

gulp.task('css', function() {
  return gulp.src('*.scss')
  .pipe(sass())
  .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
  return gulp.src('main.js')
    .pipe(uglify({mangle:true}))
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
