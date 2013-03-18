module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        stylus: {
            compile: {
                options: {
                    compress: true
                },
                files: {
                    'deploy/stylesheets/xpressio.theme.css': ['stylesheets/xpressio.theme.styl'] // compile and concat into single file
                }
            }
        },

        copy: {
            target: {
                // options: { cwd: 'path/to/sources' },
                files: { 'deploy/': ['*.html', 'images/*'] }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['stylus', 'copy']);

};