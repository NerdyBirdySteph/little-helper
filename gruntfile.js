var _ = require('lodash');

module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-open');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-scaffold');
    grunt.loadTasks("./node_modules/brixo-framework/grunt-tasks");

    // Brixo Framework - default tasks configuration
    var brixoGrunt = require('brixo-framework/config/gruntfile.js')(grunt);

    var brixoScaffold = require('brixo-framework/scaffolding/scaffold.config.js')(grunt, brixoGrunt.configItem);
    
    // configure tasks entry points
    brixoGrunt.configItems('elements');
    brixoGrunt.configItems('components');
    brixoGrunt.configItems('modules');

    var projectGrunt = {
        
        open: _.merge(brixoGrunt.open, {
            start: {
                path : 'http://localhost:8090/'
            }
        }),
        
        jshint: {
            all: {
                src: ['gruntfile.js', 'components/**/*.js*', 'elements/**/*.js*', 'styleguide/**/*.js*'],
                jshintrc: true
            }
        },
        
        karma: _.merge(brixoGrunt.karma, {
            // override karma configurations here
        }),

        webpack: _.merge(brixoGrunt.webpack, {
            // override webpack configurations here
        }),

        "webpack-dev-server": _.merge(brixoGrunt["webpack-dev-server"], {          
            // override webpack dev server configurations here  
        }),

        scaffold: _.merge(brixoScaffold, {
            config: {
                options: {
                    questions: [{
                        name: 'firebaseUrl',
                        type: 'input',
                        message: 'Firebase DB url:'
                    }],
                    template: {
                        'scaffolding/config/firebase.config.js': 'config/firebase.config.js'
                    }
                }
            }
        })

    };

    grunt.initConfig(projectGrunt);
    grunt.registerTask('default', ['open:start', 'webpack-dev-server:start']);
    grunt.registerTask('config', 'scaffold:config');
};