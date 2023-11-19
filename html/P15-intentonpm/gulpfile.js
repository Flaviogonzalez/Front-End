// todo este archivo sirve para crear scripts que ejecuten lo que se me canta bien las pelotas, generalmente sirve para automatizar compilaciones de archivos o animaciones

const {src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require("sass"));
const plumber = require('gulp-plumber');

function css(done) { //
    src('src/scss/**/*.scss')        // identificar el archivo de sass
        .pipe(plumber())             // compilar plumber: sirve para que funcione el watch sin problema y mejora la sintaxis de los errores en la consola.
        .pipe(sass())                // compilar sass : compilar codigo scss
        .pipe(dest("build/css"));    // almacenar sass
    done();
}

function dev(done) { // global
    watch('src/scss/**/*.scss', css);
    
    done();
}
exports.css /*este pertenece a node.js */ = css; // esta es la funcion
exports.dev = dev;