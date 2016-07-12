// ==== IMAGES ==== //

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')({ camelize: true });
var config  = require('../../gulpconfig').images;

gulp.task('images', function() {
	return gulp.src(config.build.src)
		.pipe(gulp.dest(config.build.dest));
});
