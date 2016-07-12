// ==== CONFIGURATION ==== //

var project  = 'LEIHAUOLI_PROJECT_NAME';
var src      = './src/';
var build    = './build/';
var modules  = './node_modules/';

module.exports = {
	images: {
		build: {
			src: src + 'img/**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)',
			dest: build + 'img'
		}
	},
	livereload: {
		port: 35729
	},
	scripts: {
		src: src + 'js/**/*.js',
		dest: build + 'js'
	},
	styles: {
		build: {
			src: src + 'scss/**/*.scss',
			dest: build + 'css'
		},
		libsass: {
			includePaths: './src/scss',
			precision: 6,
			outputStyle: 'expanded',
			indentType: 'tab',
			indentWidth: '1',
			onError: function(err) {
				return console.log(err);
			}
		}
	},
	watch: {
		src: {
			styles:     src + 'scss/**/*.scss',
			scripts:    src + 'js/**/*.js',
			images:     src + '**/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)',
			livereload: build + '**/*',
			php:        src + '**/*.php',
			ejs:        src + '**/*.ejs',
			noread_ejs: src + '**/_*.ejs'
		}
	},
	theme: {
		php: {
			src:        src + '**/*.php',
			dest:       build
		},
		ejs: {
			src:        src + '**/*.ejs',
			noread:     '!' + src + '**/_*.ejs',
			dest:       build,
			ext:        '.html'
		}
	}
};
