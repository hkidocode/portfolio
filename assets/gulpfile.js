const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
// const autoprefixer = require('gulp-autoprefixer');
// const cleanCSS = require('gulp-clean-css');

// compile scss into css
function style() {
    // 1. where is my scss file
    return gulp.src('./scss/main.scss')
    // 2. pass that file through sass compiler
    .pipe(sass())
    // .pipe(autoprefixer())
    // 3. where do I save the compiled css
    .pipe(gulp.dest('./css'))
    // 4. stream changes to all browser
    .pipe(browserSync.stream());

}

// watch for changes automatically
function watch() {
    browserSync.init({
        baseDir: './'
    });
     gulp.watch('./scss/main.scss', style);
     gulp.watch('../index.html').on('change', browserSync.reload);

}


// function minifying() {
//     return gulp.src('./css/style.css')
//     .pipe(cleanCSS({compatibility: 'ie8'}))
//     .pipe(gulp.dest('dist'));
// }



exports.style = style;
exports.watch = watch;
// exports.cleanCSS = cleanCSS;
