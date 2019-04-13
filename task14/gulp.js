var gulp = require('gulp');
var sass = require('gulp-sass');

//style paths
var sassFiles = 'style/**/*.scss',
    cssDest = 'style/css/';

gulp.task('style', function(){
    gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});
