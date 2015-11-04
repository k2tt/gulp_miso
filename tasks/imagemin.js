var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config');

gulp.task('imagemin', function() {
  return gulp.src(config.imagemin.dev)
    .pipe($.changed(config.imagemin.pub))
    .pipe($.imagemin(config.imagemin.options))
    .pipe(gulp.dest(config.imagemin.pub));
});
