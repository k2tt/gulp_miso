var gulp = require('gulp');
var browserSync = require('browser-sync');
var webpack = require('gulp-webpack');
var config = require('../config');

gulp.task('webpack', function () {
  return gulp.src(config.webpack.entry)
    .pipe(webpack(config.webpack))
    .pipe(gulp.dest(config.js.pub))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));
});