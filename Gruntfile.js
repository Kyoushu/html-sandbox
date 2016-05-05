module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            options: {
                sourceComments: 'map',
                includePaths: [
                    'bower_components/bootstrap-sass/vendor/assets/stylesheets'
                ]
            },
            dist: {
                options: {
                    outputStyle: 'expanded'
                },
                files: {
                    'dist/css/app.css': 'src/scss/app.scss'
                }
            }
        },

        copy: {
            main: {
                files: [
                    {expand: true, flatten: false, cwd: 'bower_components/bootstrap-sass/vendor/assets/fonts/bootstrap', src: ['*'], dest: 'dist/fonts', filter: 'isFile'},
                    {expand: true, flatten: false, cwd: 'src', src: ['*.html', '**/*.html'], dest: 'dist', filter: 'isFile'}
                ]
            }
        },

        cssmin: {
            target: {
                files: {
                    'dist/css/app.min.css': 'dist/css/app.css'
                }
            }
        },

        uglify: {
            dist: {
                files: {
                    'dist/js/app.min.js': 'dist/js/app.js'
                }
            }
        },

        watch: {

            grunt: { files: ['Gruntfile.js'] },

            copy: {
                files: ['dist/*.html', 'dist/**/*.html'],
                tasks: ['copy']
            },

            sass: {
                files: ['scss/*.scss', 'scss/**/*.scss'],
                tasks: ['stylesheet']
            },

            scripts: {
                files: ['src/js/*.js', 'src/js/**/*.js'],
                tasks: ['javascript']
            }

        },

        concat: {
            dist: {
                src: [
                    'bower_components/jquery/dist/jquery.js',

                    'bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/tooltip.js',
                    'bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/affix.js',
                    'bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/alert.js',
                    'bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/button.js',
                    'bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/carousel.js',
                    'bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/collapse.js',
                    'bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/dropdown.js',
                    'bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/modal.js',
                    'bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/popover.js',
                    'bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/scrollspy.js',
                    'bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/tab.js',
                    'bower_components/bootstrap-sass/vendor/assets/javascripts/bootstrap/transition.js',

                    'src/js/*.js',
                    'src/js/**/*.js'
                ],
                dest: 'dist/js/app.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('stylesheet', ['sass', 'cssmin']);
    grunt.registerTask('javascript', ['concat', 'uglify']);
    grunt.registerTask('build', ['stylesheet', 'javascript', 'copy']);
    grunt.registerTask('default', ['build','watch']);
}