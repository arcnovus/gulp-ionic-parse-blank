'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var $ = require('gulp-load-plugins')();
gulp.task('constants', function () {
    var configPath = 'app.constants.dev.json';
    if (process.env.NODE_ENV === 'prod') {
        configPath = 'app.constants.prod.json';
        return gulp.src(configPath)
            .pipe($.ngConstant({
                constants: {
                    PARSE_APP_ID: process.ENV.PARSE_APP_ID,
                    PARSE_API_KEY: process.ENV.PARSE_API_KEY
                }
            }))
            .pipe(gulp.dest('src/app/'));
    }
    return gulp.src(configPath)
        .pipe($.ngConstant())
        .pipe(gulp.dest('src/app/'));
});
