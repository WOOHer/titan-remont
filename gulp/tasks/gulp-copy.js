'use strict';

module.exports = function () {
    $.gulp.task('gulp-copy', function() {
        var sourceFiles = [ 'source/images/*', 'source/fonts/*' ],
            destination = [ 'build/assets/img', 'build/assets/fonts' ]

        return gulp
            .src($.gp.sourceFiles)
            .pipe($.gp.gulpCopy(outputPath, options))
            .dest($.gp.destination);
    });
}