

const { src, dest, watch } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');


sass.compiler = require('node-sass');

function concatjs() {
    return src('js/animations/*.js')
    .pipe(concat('main.js'))
    .pipe(dest('js'));
}

function styles() {
    return src('scss/**/*.scss')
        .pipe(sass({ outputStyle: "expanded" }).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(dest('css'));

}

function watcher() {
    return watch('scss/**/*.scss', styles);

}

exports.watch = watcher;
exports.concat = concatjs;



