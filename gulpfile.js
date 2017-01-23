const elixir = require('laravel-elixir');
var postStylus = require('poststylus');

require('laravel-elixir-vue-2');

elixir.config.sourcemaps = false;


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
        ['app.styl'], './resources/build/css',
        {
            use: [postStylus(['lost'])] //pull in lost gridsystem
        }
    )
        .styles(['../../build/css', '../vendor/example.css'], './resources/build/min/app.min.css')
        .browserSync({
            proxy: 'localhost:8888/dummy/resources/html/index.php'
        })
});