var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');

gulp.task('watch', ['build'], function () {
  gulp.watch(['*.html'], { interval: 1000}, ['html']);
  gulp.watch(['styles/*.scss'], { interval: 1000 }, ['css']);
  gulp.watch(['js/*.js'], { interval: 1000 }, ['js']);
});

gulp.task('build', ['html', 'css', 'js']);

gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

gulp.task('css', function() {
  return gulp.src('styles/*.scss')
  .pipe(concat('styles.css'))
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('dist/styles'));
});

gulp.task('js', function() {
  return gulp.src([
    'js/jquery.js',
    'js/bootstrap.js',
    'js/jquery.easing.js',
    'js/scrolling-nav.js'
  ]).pipe(concat('main.js'))
    .pipe(uglify({mangle:true}))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['build']);
