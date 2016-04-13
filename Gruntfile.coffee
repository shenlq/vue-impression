module.exports = (grunt) ->
    'use strict'
    require('load-grunt-tasks')(grunt)
    path = require('path');
    webpack = require('webpack');
    projectRoot = path.resolve(__dirname, '../');
    PORT = 9008;

    grunt.initConfig {
        pkg: grunt.file.readJSON 'package.json'
        execute: {
            target: {
                src: ['server.js']
            }
        }
        clean: {
            all: {
                src: ["build/**/*"]
            }
        }
        copy: {
            font: {
                files: [{
                    expand: true,
                    cwd: 'src/styles/font-awesome'
                    src: [
                        'fonts/*'
                    ]
                    dest: 'build/styles/'
                }]
            }
        }
        sass: {
            dist: {
                options: {
                    sourcemap: 'auto'
                    trace: false
                    quiet: false
                    debugInfo: false
                    lineNumbers: false
                    update: true
                    # style: 'compressed'
                }
                files: [{
                    expand: true,
                    cwd: 'src/styles/'
                    src: 'index.scss'
                    dest: 'build/styles/'
                    ext: '.css'
                },{
                    expand: true,
                    cwd: 'src/styles'
                    src: 'font-awesome/index.scss'
                    dest: 'build/styles/'
                    ext: '.css'
                }]
            }
        }
        autoprefixer: {
            options: {
                browsers: ['last 20 version', '> 99%']
            }
            auto: {
                expand: true,
                flatten: true,
                src: 'build/styles/*.css',
                dest: 'build/styles/'
            }
        }
        watch: {
            less: {
                files: 'src/styles/**/*.scss'
                tasks: ['sass']
            }
        }
    }

    # 浏览器开发
    grunt.registerTask 'default', ['clean', 'copy:font', 'sass', 'autoprefixer', 'execute']
    return
