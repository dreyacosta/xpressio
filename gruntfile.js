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
                    'stylesheets/xpressio.css': ['stylesheets/xpressio.styl']
                }
            }
        },

        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 3
                },
                files: [
                    {expand: true, src: ['images/*'], dest: 'www/'}
                ]
            }
        },

        copy: {
            target: {
                files: [
                    {
                        expand: true,
                        src: [
                            '*.html',
                            '*.ico',
                            'stylesheets/*.css',
                            'font/*'
                        ],
                        dest: 'www/'
                    }
                ]
            }
        },

        watch: {
            files: '**/*.styl',
            tasks: ['stylus']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['stylus', 'imagemin', 'copy']);

};