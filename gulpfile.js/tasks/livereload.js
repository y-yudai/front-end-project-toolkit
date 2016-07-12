// ==== LIVERELOAD ==== //

var gulp    = require('gulp');
var plugins = require('gulp-load-plugins')({ camelize: true });
var config  = require('../../gulpconfig').livereload;


gulp.task('livereload', ['build'], function() {
	plugins.livereload.listen(config.port, function (err) {
		if (err) {
			return console.log(err);
		}
	});
});
