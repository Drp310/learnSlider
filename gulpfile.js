const {src,dest, watch } = require('gulp')
const pug = require('gulp-pug')
const del = require('del')

function puging(){
    return(src('index.pug'))
    .pipe(pug())
    .pipe(dest('code'))
}
function watching(){
    watch(['index.pug'],puging);
}
exports.puging = puging
exports.watching = watching