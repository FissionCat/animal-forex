module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concurrent: {
            dev: {
                tasks: ['nodemon', 'watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        },
        nodemon: {
            dev: {
                script: 'server/server.js',
                options: {
                    ignore: ['node_modules/**'],
                    watch: ['server']
                }
            }
        },
        sass: {
            dist: {
                files: {
                    'static/css/all.css': 'static/scss/all.scss'
                }
            }
        },
        watch: {
            scss: {
                files: '**/*.scss',
                tasks: ['sass']
            }
        },
        browserSync: {
            dev: {
                bsFiles: {
                    src: 'static/**/*.{js,css,html}'
                },
                options: {
                    open: false,
                    proxy: 'localhost:8080',
                    watchTask: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-nodemon');
    grunt.registerTask('default', ['browserSync', 'concurrent']);
};
