handlebars-helpers-test
=======================

Simple test which uses the [handlebars-helpers](https://github.com/assemble/handlebars-helpers) module.

## Usage

```bash
$ git clone git@github.com:batfink/handlebars-helpers-test
$ npm i
```

Note: Handlebars-helpers requires grunt to be installed, which is why grunt is in the package.json

## Gulpfile

```js
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
```

Note: To use the default options, send in an empty object as the second parameter: 

```js
require('handlebars-helpers').register(handlebars, {});
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

<h2 id="helper-test">helper-test</h2>
<p><strong>This</strong> is <em>markdown</em> — with smartypants</p>


</body>
</html>
```
