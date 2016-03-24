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
        watch: {
            less: {
                files: 'src/styles/**/*.less'
                tasks: ['less']
            }
        }
    }

    # 浏览器开发
    grunt.registerTask 'default', ['execute']
    return
