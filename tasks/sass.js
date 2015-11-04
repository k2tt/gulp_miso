var gulp = require('gulp');
var browserSync = require('browser-sync');
var $ = require("gulp-load-plugins")();
var config = require('../config');

gulp.task('sass', function() {
  return $.rubySass(config.sass.dev, config.sass.options)
    .on('error', $.notify.onError(function (error) {
      return "Error: " + error.message;
    }))
    .pipe($.pleeease({
      autoprefixer: {"browsers": ["last 4 versions"]},
      minifier: false
    }))
    .pipe(gulp.dest(config.sass.pub))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));
});