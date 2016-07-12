// === THEME ==== //

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')({ camelize: true });
var config  = require('../../gulpconfig').theme;


gulp.task('theme-php', function() {
	return gulp.src(config.php.src)
		.pipe(gulp.dest(config.php.dest));
});

gulp.task('theme-ejs', function() {
	return gulp.src([config.ejs.src, config.ejs.noread])
		.pipe(plugins.ejs({}, {ext: config.ejs.ext}))
		.pipe(gulp.dest(config.ejs.dest));
});

gulp.task('theme', ['theme-php','theme-ejs']);
