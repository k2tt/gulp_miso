var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var config = require('../config');

gulp.task('imagemin', function() {
  return gulp.src(config.img.dev)
    .pipe($.changed(config.img.pub))
    .pipe($.imagemin({
      progressive: true, //jpg
      optimizationLevel: 7 //png
    }))
    .pipe(gulp.dest(config.img.pub));
});
