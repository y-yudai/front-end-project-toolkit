// ==== SCRIPTS ==== //

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')({ camelize: true });
var config  = require('../../gulpconfig').scripts;
var webpack = require('../../gulpconfig').webpack;

gulp.task('scripts', function() {
	return gulp.src(config.src)
		.pipe(plugins.webpack(webpack))
		.pipe(gulp.dest(config.dest));
});
