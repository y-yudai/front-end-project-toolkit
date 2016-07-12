// ==== SCRIPTS ==== //

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')({ camelize: true });
var config  = require('../../gulpconfig').scripts;

gulp.task('scripts', function() {
	return gulp.src(config.src)
		.pipe(gulp.dest(config.dest));
});
