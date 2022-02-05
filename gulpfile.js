const gulp = require('gulp')
const pug = require('gulp-pug')
const del = require('del')

function puging(){
    return(gulp.src('index.pug'))
    .pipe(pug())
    .pipe(gulp.dest('code'))
}
exports.puging = puging