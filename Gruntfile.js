module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
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
            },
            node: {
                files: 'server/*.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['watch']);
};
