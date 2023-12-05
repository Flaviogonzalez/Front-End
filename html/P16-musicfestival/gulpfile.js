const {src, dest, watch, parallel} = require("gulp");

// css
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");
const autoprefixer = require("autoprefixer"); // soporte de navegacion
const cssnano = require("cssnano"); // comprime el codigo css
const postcss = require("gulp-postcss"); // transforma el codigo de los dos
const sourcemaps = require("gulp-sourcemaps"); // simplemente ayuda a la busqueda de las clases para el navegador(??? re inutil)

// imagenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');

// js

const terser = require("gulp-terser-js");


// funciones

// css
function css(done) {
    src('src/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([ autoprefixer(), cssnano() ]))
    .pipe(sourcemaps.write('.'))
    .pipe(dest("build/css"));
    done();
}


// imagenes
function imagenes(done) {
    const opciones = {
        optimizationLevel: 3
    }

    src('src/img/**/*.{png, jpg}')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('build/img'))

    done()
}

function versionWebp(done) {
    const opciones = {
        quality: 50
    };

    src('src/img/**/*.{jpg, png}')
        .pipe(webp(opciones))
        .pipe(dest('build/img'))

    done()
}

// javascript

function javascript ( done ) {
    src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe( terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/js'));

    done()
}

// watch - escuchar cambios
function dev(done){
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);
    done();
}


exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.dev = parallel(imagenes, versionWebp, javascript, dev);