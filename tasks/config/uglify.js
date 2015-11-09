/**
 * Minify files with UglifyJS.
 *
 * ---------------------------------------------------------------
 *
 * Minifies client-side javascript `assets`.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-uglify
 *
 */
module.exports = function(grunt) {

	grunt.config.set('uglify', {
		dist: {
			src: [
				'assets/js/angularApp.js',
				'assets/js/controllers/*.js',
				'assets/js/directives/*.js',
				'assets/js/factories/*.js',
				'assets/js/services/*.js',
			],
			dest: 'assets/dist/app.min.js'
		},
		buildnominify: {
              options:{
                  beautify: true,
                  compress: false
              },
              src: [
                'assets/js/angularApp.js',
				'assets/js/controllers/*.js',
				'assets/js/directives/*.js',
				'assets/js/factories/*.js',
				'assets/js/services/*.js',
              ],
              dest: 'assets/dist/app.nomin.js'
          }
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
};
