/**
 * @author Loserfucker<lihx_hit@163.com>
 * @date 2016/8/19
 * @description
 */
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync').create();
var basePath = 'build/';
var Hexo = require('hexo');
var paths = {
    styles: basePath + 'css/',
    scripts: basePath + 'js/',
    images: basePath + 'images/',
    templates: basePath + ''
};

// SOURCES CONFIG
var source = {
    scripts: paths.scripts + '**/*.js',
    templates: paths.templates + '**/*.html',
    styles: paths.styles + '**/*.css',
    images: paths.images + '**/*.{jpg,gif,png,svg,ico}'
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
gulp.task('templates', function () {
    return gulp.src(source.templates)
        .pipe($.htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(paths.templates));
});
gulp.task('default', ['scripts', 'styles', 'images', 'templates']);
gulp.task('server', function () {
    var queue = [];
    var timer;
    var hexo = new Hexo(process.cwd(), {
    });
    function listener(path){
        // Stop the timer
        if (timer) clearTimeout(timer);

        // Add data to queue
        queue.push(path);

        // Start the timer
        timer = setTimeout(reload, 100);
    }
    function reload(){
        browserSync.reload(queue);
        queue.length = 0;
    }
    hexo.on('server', function(){
        browserSync.init({
            port: 8088,
            proxy: "localhost:4000"
        },function(){
            hexo.route.on('update', listener);
        });
    });
    hexo.init().then(function(){
        hexo.call('server',{}).then(function(){
        })
    });


});