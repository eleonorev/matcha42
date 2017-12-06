'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sassGlob = require('gulp-sass-glob');

gulp.task('sass', function () {
  return gulp.src('./src/resources/sass/style.scss')
    .pipe(sassGlob())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('./src/resources/compiled/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/resources/sass/**/*.scss', ['sass']);
});
