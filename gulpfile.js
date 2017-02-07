const elixir = require('laravel-elixir');
var postStylus = require('poststylus');

require('laravel-elixir-vue-2');




/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */




elixir(function(mix) {
    mix.stylus(
        ['app.styl'], null, //process stylus files
        {
            use: [postStylus(['lost'])] //pull in lost gridsystem
        }
    )
        .styles(['./public/css/app.css', './resources/assets/css/vendor'], './public/css/app.combined.css') //combine & minify (minify is only applied with the flag --production)
        .rollup('app.js') //module bundling, treeshaking and conversion from ES6 to ES5
        //.scripts(['./public/js/app.js', './resources/assets/js/vendor']) //combine some files
        .browserSync({
            proxy: 'dummytypo3:8888/public',
            files: ['resources/html/**/*', 'public/**/*'] //files to watch
            //proxy: 'localhost:8888/dummy/resources/html/index.php'
        })
});