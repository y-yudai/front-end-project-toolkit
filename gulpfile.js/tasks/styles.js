// ==== STYLES ==== //

var gulp         = require('gulp');
var plugins      = require('gulp-load-plugins')({ camelize: true });
var config       = require('../../gulpconfig').styles;

gulp.task('styles-libsass', function() {
	return gulp.src(config.build.src)
		.pipe(plugins.sourcemaps.init())
		.pipe(plugins.sass(config.libsass))
		.pipe(plugins.autoprefixer())
        .pipe(plugins.sourcemaps.write(config.sourcemap.dest))
		.pipe(gulp.dest(config.build.dest));
});

gulp.task('styles', ['styles-libsass']);
