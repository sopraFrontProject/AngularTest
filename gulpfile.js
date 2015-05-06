//var gulp        = require('gulp');
var gulp        = require('gulp-param')(require('gulp'), process.argv);

var plugins     = require('gulp-load-plugins')();
var rjs         = require('gulp-requirejs');
var print       = require('gulp-print');
var del         = require('del');
var es          = require('event-stream');
var Q           = require('q');
var compass     = require('gulp-compass');
var path        = require('path');
var plumber     = require('gulp-plumber');
var notify      = require("gulp-notify");

var kdn = '';

var paths = {
    //scripts           : 'app/**/*.js',
    styles              : ['./app/**/*.css'],
    sass                : ['./app/sass/*.sass'],
    //images            : './images/**/*',
    index               : './app/index.html',
    //partials          : ['app/**/*.html', '!app/index.html'],

    distDev             : './dev',
    distProd            : './prod',

    distDevCss          : './dev/css',
    distProdCss         : './prod/css',

    distScriptsDev      : './dev/js',
    distScriptsProd     : './prod/js'
    //scriptsDevServer: 'devServer/**/*.js'
};


var pipes = {};

var onError = function (err) {
    gutil.beep();
    console.log(err);
};



// rename the file
pipes.minifiedFileName = function(val) {
    return plugins.rename(function (path) {
        if(val){
            //production
            path.extname = '.min' + path.extname;
        }else{
            //development
            path.extname = path.extname;
        }
    });
};


// production environment
pipes.builtStylesProd = function() {
    return gulp.src(paths.styles)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('style.css'))
        .pipe(plugins.minifyCss())
        .pipe(plugins.sourcemaps.write())
        .pipe(pipes.minifiedFileName(true))
        .pipe(gulp.dest(paths.distProdCss));
};


// develop environment
pipes.builtStylesDev = function() {
    return gulp.src(paths.styles)
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.concat('style.css'))
        .pipe(plugins.sourcemaps.write())
        .pipe(pipes.minifiedFileName(false))
        .pipe(gulp.dest(paths.distDevCss));
};


pipes.validatedIndex = function() {
    return gulp.src(paths.index)
        .pipe(plugins.htmlhint())
        .pipe(plugins.htmlhint.reporter());
};



pipes.builtIndexDev = function() {
    var appStyles = pipes.builtStylesDev();

    return pipes.validatedIndex()
        .pipe(gulp.dest(paths.distDev))
        .pipe(plugins.inject(appStyles, {relative: true}))
        .pipe(gulp.dest(paths.distDev));
};


pipes.builtIndexProd = function() {
    var appStyles = pipes.builtStylesProd();

    return pipes.validatedIndex()
        .pipe(gulp.dest(paths.distProd))
        .pipe(plugins.inject(appStyles, {relative: true}))
        .pipe(plugins.htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(gulp.dest(paths.distProd));
};


pipes.builtAppDev = function() {
    return es.merge(pipes.builtIndexDev());
};


pipes.builtAppProd = function() {
    return es.merge(pipes.builtIndexProd());
};

/*
 * TASKS
 * */

//gulp.task('clean-dev', ['requirejsDev'], function() {
gulp.task('clean-dev', function() {
    var deferred = Q.defer();
    del(paths.distDev, function() {
        deferred.resolve();
    });
    return deferred.promise;
});


gulp.task('clean-prod', function() {
    var deferred = Q.defer();
    del(paths.distProd, function() {
        deferred.resolve();
    });
    return deferred.promise;
});


gulp.task('requirejsDev', function() {
    rjs({
        name            : 'main',
        baseUrl         : 'app/js/',
        out             : 'main.js',
        mainConfigFile  : 'app/js/main.js',
        shim            : {}
    })
        .pipe(gulp.dest(paths.distScriptsDev));
});



gulp.task('requirejsProd', function() {
    rjs({
        name            : 'main',
        baseUrl         : 'app/js/',
        out             : 'main.js',
        mainConfigFile  : 'app/js/main.js',
        shim            : {}
    })
        .pipe(plugins.sourcemaps.init())
        .pipe(plugins.uglify())
        .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest(paths.distScriptsProd));
});



gulp.task('clean-build-app-dev', ['clean-dev', 'requirejsDev'], pipes.builtAppDev);
gulp.task('clean-build-app-prod', ['clean-prod', 'requirejsProd'], pipes.builtAppProd);


/*
Example how pass parameter
> gulp defaultDev -d --value textHere
*/
/*
gulp.task('defaultDev', ['clean-build-app-dev'], function(value){
    console.log(value);
    kdn = value;
});
*/



gulp.task('styles', function() {
    return gulp.src(paths.sass)
        .pipe(plumber({
            errorHandler: onError
        }))
        .pipe(compass({
            config_file: './config.rb',
            css: './app/css',
            sass: './app/sass'
        }))
        .pipe(gulp.dest('./app/css'))
        .pipe(notify({ message: 'Styles task complete' }));
});




/*
// TAREAS DE GULP CON COMPASS PARA REVISAR
gulp.task('styles', function() {
    return gulp.src(paths.sass)
        .pipe(compass({
            config_file: 'config.rb',
            sourcemap: true,
            debug : true,
            css: 'css',
            sass: 'app/sass'
        }))
        .pipe(gulp.dest(paths.distDevCss));
});


gulp.task('compass', function() {
    gulp.src(paths.sass)
        .pipe(compass({
            config_file: './config.rb',
            css: 'app/stylesheets',
            sass: 'app/sass'
        }))
        .pipe(gulp.dest(paths.distDevCss));
});


gulp.task('compass_1', function() {
    gulp.src(paths.sass)
        .pipe(compass({
            project: path.join(__dirname, 'app'),
            css: 'css',
            sass: 'sass'
        }))
        .pipe(gulp.dest('app/css/temp'));
});
*/



gulp.task('defaultDev', ['clean-build-app-dev']);
gulp.task('defaultProd', ['clean-build-app-prod']);




gulp.task('live', function() {
    //livereload.listen({ start: true });

    //watch .scss files
    gulp.watch(paths.sass, ['styles']);

/*
    gulp.watch(paths.sass,function() {
        gulp.run('styles');
    });
*/

});












