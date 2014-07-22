handlebars-helpers-test
=======================

Simple test which uses the handlebars-helpers module.

## Usage

```bash
$ git clone git@github.com:batfink/handlebars-helpers-test
$ npm i
```

Note: For use with the [v0.6.0-branch of handlebars-helpers](https://github.com/assemble/handlebars-helpers/tree/v0.6.0).
In contrast to the [master-branch](https://github.com/assemble/handlebars-helpers/tree/master),
the grunt-dependency is removed, and the init-function now takes one config-object as a parameter.
See the [master-branch of this repo](https://github.com/batfink/handlebars-helpers-test/tree/master) for how to use the default handlebars-helpers module.

## Gulpfile

```js
var gulp = require('gulp');
var handlebars = require('handlebars');
var fs = require('fs');
var file = require('gulp-file');

require('handlebars-helpers')({
    Handlebars: handlebars,
    options: {
        marked: {
            smartypants: true
        }
    }
});

gulp.task('default', function() {

    var src = fs.readFileSync('src/index.hbs').toString(),
        data = { message: 'Hi!' },
        contents = handlebars.compile(src)(data);

    file('index.html', contents).pipe(gulp.dest('dist'));

});
```

## Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>test</title>
</head>
<body>

<p>{{message}}</p>

{{#markdown}}

## helper-test

**This** is *markdown* -- with smartypants

{{/markdown}}

</body>
</html>
```

## Output
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>test</title>
</head>
<body>

    <p>Hi!</p>

<h2>
  <a name="helper-test" class="anchor" href="#helper-test">
    <span class="header-link"></span>
  </a>helper-test
</h2><p><strong>This</strong> is <em>markdown</em> — with smartypants</p>


</body>
</html>


</body>
</html>
```
