/**
 * @author Loserfucker<lihx_hit@163.com>
 * @date 2016/8/19
 * @description
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var basePath = 'build/';
var paths = {
    styles: basePath+'css/',
    scripts: basePath+'js/',
    images: basePath+'images/',
    templates: basePath+''
};

// SOURCES CONFIG
var source = {
    scripts: paths.scripts+'**/*.js',
    templates: paths.templates+'**/*.html',
    styles: paths.styles+'**/*.css',
    images: paths.images+'**/*.{jpg,gif,png,svg,ico}'
};

// JS APP
gulp.task('scripts', function () {
    return gulp.src(source.scripts)
        .pipe($.uglify())
        .pipe(gulp.dest(paths.scripts));
});
gulp.task('styles', function () {
    return gulp.src(source.styles)
        .pipe($.cleanCss())
        .pipe($.autoprefixer({
            browsers: ['> 1%']
        }))
        .pipe(gulp.dest(paths.styles));
});
gulp.task('images', function () {
    return gulp.src(source.images)
        .pipe($.cache($.imagemin()))
        .pipe(gulp.dest(paths.images));
});
gulp.task('default',['scripts','styles','images']);