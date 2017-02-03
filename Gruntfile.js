module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'app/css/main.css': 'scss/main.scss'
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
                files: ['app/index.html'],
                options: {
                    livereload: true
                }
            }
        },
        dataUri: {
            dist: {
                src: ['dist/css/main.css'],
                dest: 'dist/css/',
                options: {
                    target: ['dist/img/icons/*.*', 'dist/img/arrow.png'],
                    fixDirLevel: true,
                    maxBytes: 2048

                }
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'dist/css',
                    dest: 'dist/css',
                    src: ['*.css', '!*.min.css'],
                    ext: '.css'
                }]
            }
        },
        strip_code: {
            options: {
                blocks: [
                    {
                        start_block: "/* start-test-block */",
                        end_block: "/* end-test-block */"
                    },
                    {
                        start_block: "<!-- start-html-test-code -->",
                        end_block: "<!-- end-html-test-code -->"
                    }
                ]
            },
            html: {
                src: ['dist/*.html']
            }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-data-uri');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-strip-code');
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('dist', ['dataUri', 'cssmin', 'strip_code']);
};
