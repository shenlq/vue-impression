module.exports = function(grunt) {
    'use strict';
    var PORT, path, webpack;
    require('load-grunt-tasks')(grunt);
    path = require('path');
    webpack = require('webpack');
    PORT = 9008;

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        execute: {
            target: {
                src: ['server.js']
            }
        },
        clean: {
            all: {
                src: ["build/**/*"]
            }
        },
        copy: {
            font: {
                files: [{
                    expand: true,
                    cwd: 'src/styles/font-awesome',
                    src: ['fonts/*'],
                    dest: 'build/styles/'
                }]
            },
            animate: {
                files: [{
                    expand: true,
                    cwd: 'src/styles/animate',
                    src: ['*.css'],
                    dest: 'build/styles/animate'
                }]
            },
            image: {
                files: [{
                    expand: true,
                    cwd: 'src/images',
                    src: ['*.*'],
                    dest: 'build/images'
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    sourcemap: 'auto',
                    trace: false,
                    quiet: false,
                    debugInfo: false,
                    lineNumbers: false,
                    update: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/styles/',
                    src: 'index.scss',
                    dest: 'build/styles/',
                    ext: '.css'
                }, {
                    expand: true,
                    cwd: 'src/styles',
                    src: 'font-awesome/index.scss',
                    dest: 'build/styles/',
                    ext: '.css'
                }]
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 100 version', '> 99%']
            },
            auto: {
                expand: true,
                flatten: true,
                src: 'build/styles/*.css',
                dest: 'build/styles/'
            }
        },
        watch: {
            less: {
                files: 'src/styles/**/*.scss',
                tasks: ['sass', 'autoprefixer']
            }
        }
    });


    grunt.registerTask('default', ['clean', 'copy:font', 'copy:animate', 'sass', 'autoprefixer', 'execute']);
    grunt.registerTask('build', ['clean', 'copy:font', 'copy:animate', 'sass','copy:image', 'autoprefixer']);
};
