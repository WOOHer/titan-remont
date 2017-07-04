'use strict';

module.exports = function () {
    $.gulp.task('sprite', function() {
        var spriteData = $.gulp.src('source/images/png-sprites/*.png').pipe($.gp.spritesmith({
                imgName: 'sprite.png',
                cssName: 'sprite.css',
                imgPath: './assets/img/sprite.png'

        }));
        var img=spriteData.img.pipe($.gulp.dest('build/assets/img/png-sprites'));
        var css=spriteData.css.pipe($.gp.rename({extname:'.scss'})).pipe($.gulp.dest('source/style/common'));
        return $.stream(img, css);
    });
}