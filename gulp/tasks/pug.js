'use strict';

var fs = require('fs');//add string

module.exports = function() {
    let locals = JSON.parse(fs.readFileSync('./content.json', 'utf-8'));
  $.gulp.task('pug', function() {
    return $.gulp.src('./source/template/pages/*.pug')
      .pipe($.gp.pug({
          locals: locals,//add string
          pretty: true }))
      .on('error', $.gp.notify.onError(function(error) {
        return {
          title: 'Pug',
          message:  error.message
        }
       }))
      .pipe($.gulp.dest($.config.root));
  });
};
