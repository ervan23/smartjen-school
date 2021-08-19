// eslint-disable-next-line no-undef
const mix = require('laravel-mix');
// eslint-disable-next-line no-undef
require('dotenv').config;

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
	.version()
	.vue()
	// .webpackConfig({
	// 	resolve: {
	// 		alias: {
	// 			// eslint-disable-next-line no-undef
	// 			'@': path.resolve('resources/js/Styles')
	// 		}
	// 	}
	// })
	.sass('resources/js/Styles/app.scss', 'public/css');
// .postCss('resources/css/app.css', 'public/css', [

// ]);
