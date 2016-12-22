// ==== MAIN ==== //

var gulp = require('gulp');
var chalk = require('chalk');
var config  = require('../../gulpconfig').info;

gulp.task('default', ['watch'],function(){
    setTimeout(function () {
        if(config.name === 'PROJECT_NAME'){
            console.log(chalk.red('We suggest that you begin by typing: PROJECT_NAME'));
        } else {
            console.log(chalk.blue('Success! build...' + config.name));
        }
    },200);
});

gulp.task('build', ['styles','theme','scripts','images']);
