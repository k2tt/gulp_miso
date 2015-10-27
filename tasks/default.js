var gulp = require('gulp');
var config = require('../config');

gulp.task('default', ['browser-sync'], function() {
  gulp.watch(config.copy.dev, ['copy']); //htmlの変更
});