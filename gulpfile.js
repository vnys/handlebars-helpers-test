var gulp = require('gulp');
var handlebars = require('handlebars');
var fs = require('fs');
var file = require('gulp-file');


require('handlebars-helpers').register(handlebars, {
    marked: {
        smartypants: true
    }
});

gulp.task('default', function() {

    var src = fs.readFileSync('src/index.hbs').toString(),
        data = { message: 'Hi!' },
        contents = handlebars.compile(src)(data);

    file('index.html', contents).pipe(gulp.dest('dist'));

});
