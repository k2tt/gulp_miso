var gulp = require('gulp');
var browserSync = require('browser-sync');
var config = require('../config');

gulp.task('copy', function() {
  return gulp.src(config.copy.dev)
    .pipe(gulp.dest(config.copy.pub))
    .pipe(browserSync.reload({
      stream: true,
      once: true
    }));
});