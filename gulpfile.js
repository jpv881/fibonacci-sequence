var gulp = require('gulp');
browserSync = require('browser-sync');

gulp.task('default', ["browser"]);

gulp.task('browser', function(){
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
});

gulp.watch(['index.html', '*/**.js']).on('change', function(){
    browserSync.reload();
})