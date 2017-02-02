module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'html/css/main.css': 'scss/main.scss'
                }
            }
        },
        watch: {
            css: {
                files: '**/*.scss',
                tasks: ['sass'],
                options: {
                    livereload: true,
                },
            },
            html: {
                files: ['html/index.html'],
                options: {
                    livereload: true
                }
            }
        },
        dataUri: {
            dist: {
                src: ['html/css/main.css'],
                dest: 'html/css/',
                options: {
                    target: ['html/img/icons/*.*', 'html/img/arrow.png'],
                    fixDirLevel: true,
                    maxBytes: 2048

                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'html/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'html/css',
                    ext: '.min.css'
                }]
            }
        },
        // TODO: specify `dist` dir for output and enable task below.
        // update: {
        //     options: {
        //         remove: ['script[data-autoremove="true"]']
        //     }
        // }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-data-uri');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-dom-munger');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('dist', ['dataUri', 'cssmin']);
};
