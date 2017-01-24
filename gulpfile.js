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
        ['app.styl'], './resources/build/css', //process stylus files
        {
            use: [postStylus(['lost'])] //pull in lost gridsystem
        }
    )
        .styles(['./resources/build/css', './resources/assets/vendor'], './resources/build/min/app.min.css') //combine & minify (minify is only applied with the flag --production)
        .browserSync({
            proxy: 'dummytypo3:8888',
            files: ['resources/**/*', 'resources/html/**/*'] //files to watch
            //proxy: 'localhost:8888/dummy/resources/html/index.php'
        })
});