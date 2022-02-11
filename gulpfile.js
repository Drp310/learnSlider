const {src,dest, watch,parallel } = require('gulp')
const pug = require('gulp-pug')
const del = require('del')
const scss = require('gulp-sass')(require('sass'));
function styling(){
    return (src('style.scss'))
    .pipe(scss())
    .pipe(dest('style'))
}
function puging(){
    return(src('index.pug'))
    .pipe(pug())
    .pipe(dest('code'))
}
function watching(){
    watch(['index.pug'],puging);

}
function watching1(){
    watch(['style.scss'],styling);
    
}
exports.all = parallel(watching,watching1)
exports.watching1 = watching1
exports.puging = puging
exports.watching = watching
exports.styling = styling