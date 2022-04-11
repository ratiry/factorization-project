const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
console.log(10000);
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
console.log(10);
gulp.task('sass',function(done){
   gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error',sass.logError))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css/'))
  done();
})
