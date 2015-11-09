/**
 * Concatenate files.
 *
 * ---------------------------------------------------------------
 *
 * Concatenates files javascript and css from a defined array. Creates concatenated files in
 * .tmp/public/contact directory
 * [concat](https://github.com/gruntjs/grunt-contrib-concat)
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function(grunt) {

	grunt.config.set('concat', {
		js: {
          src: [
          	'./bower_components/angular/angular.js',
            './bower_components/angular-resource/angular-resource.js',
            './bower_components/angular-route/angular-route.js',
            './bower_components/jquery/dist/jquery.js',
            './bower_components/angular-animate/angular-animate.js',
            './vendor/ui-bootstrap-tpls-0.14.3.min.js',
            './vendor/ui-bootstrap-tpls-0.13.3.min.js',
            './bower_components/sass-bootstrap/dist/js/bootstrap.js',
            './bower_components/angular-base64-upload/dist/angular-base64-upload.js'
          ],
          dest: './assets/dist/dependencies.min.js'
        }
	});

	/*grunt.config.set('concat', {
		js: {
			src: require('../pipeline').jsFilesToInject,
			dest: '.tmp/public/concat/production.js'
		},
		css: {
			src: require('../pipeline').cssFilesToInject,
			dest: '.tmp/public/concat/production.css'
		}
	});*/

	grunt.loadNpmTasks('grunt-contrib-concat');
};
