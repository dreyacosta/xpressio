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

        imagemin: {                          
            dist: {                            
                options: {                       
                    optimizationLevel: 3
                },
                files: {                         
                    'deploy/images/demo.png': 'images/demo.png'
                }
            }
        },

        copy: {
            target: {
                files: { 'deploy/': ['*.html'] }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Default task(s).
    grunt.registerTask('default', ['stylus', 'imagemin', 'copy']);

};