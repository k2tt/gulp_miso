var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require("gulp-load-plugins")();
var config = require('../config');

gulp.task('sass', function() {
  return $.rubySass(config.sass.dev, config.sass.options)
    .pipe($.plumber({
      errorHandler: $.notify.onError("Error: <%= error.message %>") //<-
    }))
    .pipe(gulp.dest(config.sass.pub))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));
});