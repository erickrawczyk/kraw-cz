var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var concat = require('gulp-concat');

gulp.task('watch', ['build'], () => {
  gulp.watch(['*.html'], { interval: 1000}, ['html']);
  gulp.watch(['styles/*.scss'], { interval: 1000 }, ['css']);
  gulp.watch(['js/*.js'], { interval: 1000 }, ['js']);
  gulp.watch(['img/*'], { interval: 1000 }, ['img']);
});

gulp.task('build', ['html', 'css', 'js', 'img']);

gulp.task('html', () => {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('dist'))
});

gulp.task('css', () => {
  return gulp.src([
    'styles/*.scss'
  ]).pipe(concat('styles.css'))
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('js', () => {
  gulp.src([
    'js/jquery.js'
  , 'js/bootstrap.js'
  , 'js/jquery.easing.js'
  , 'js/scrolling-nav.js'
  , 'node_modules/clipboard/dist/clipboard.js'
  , 'js/copy.js'
  , 'js/puzzle.js'
  ]).pipe(concat('main.js'))
    .pipe(uglify({mangle:true}))
    .pipe(gulp.dest('dist/js'));

  return gulp.src('node_modules/node-pace-progress/pace.min.js')
    .pipe(gulp.dest('dist/js'))
});

gulp.task('img', () => {
  return gulp.src('img/*').pipe(gulp.dest('dist/img'))
});

gulp.task('default', ['build']);
