module.exports = function (grunt) {
    // Project configuration.
    grunt
        .initConfig({
            pkg: grunt.file.readJSON('package.json'),
            sourcePath: 'src',
            targetPath: 'target',
            clean: {
                target: ['<%= targetPath %>']
            },
            uglify: {
                target: {
                    options: {
                        banner: '/*! <%= pkg.groupId %>-<%= pkg.artifactId %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                        sourceMap: true
                    },
                    files: {
                        '<%= targetPath %>/<%= pkg.groupId %>-<%= pkg.artifactId %>.min.js': '<%= sourcePath %>/moment-taiwan.js'
                    }
                }
            },
            copy: {
                target: {
                    files: [{
                        expand: true,
                        cwd: '<%= sourcePath %>/',
                        src: ['moment-taiwan.js'],
                        dest: '<%= targetPath %>/'
                    }]
                }
            },
            jshint: {
                options: {
                    eqnull: true,
                    "-W041": false, // disable the check "use === to compare with 0"
                    scripturl: true, //disable the check "Script URL"
                    // more options here if you want to override JSHint
                    // defaults
                    globals: {
                        jQuery: true,
                        console: true,
                        module: true
                    }
                },
                target: {
                    files: {src: ['<%= sourcePath %>/moment-taiwan.js']}
                }
            }
        });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // copy bower files to target
    grunt.registerTask('default', ['clean:target', 'jshint:target', 'uglify:target', 'copy:target']);
};