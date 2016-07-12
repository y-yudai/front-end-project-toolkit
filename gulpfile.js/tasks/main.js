// ==== MAIN ==== //

var gulp = require('gulp');

gulp.task('default', ['watch']);

gulp.task('build', ['styles','theme','scripts','images']);
