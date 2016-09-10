// globals
var useproxy = false;

var src = './src/';
var dist = './assets/';

// only required if useproxy = true
var proxyUrl = 'local.app.com';
var localPort = 8080;

// my scripts
var scripts = [
  src + 'js/scripts.js'
];

// vars use bower
var bower = './bower_components/';
// var plugins path 
var plugins = [
  bower + 'jquery/dist/jquery.min.js',
  bower + 'bootstrap-sass/assets/javascripts/bootstrap.min.js'
];


// define package
var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  uglify = require('gulp-uglify'),
  concat = require('gulp-concat'),
  jshint = require('gulp-jshint'),
  sass = require('gulp-sass'),
  postcss = require('gulp-postcss'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  sourcemaps = require('gulp-sourcemaps'),
  imagemin = require('gulp-imagemin'),
  browserSync = require('browser-sync').create(),
  reload = browserSync.reload;

// tasks
// minify sass to css
// sass mappgins files
gulp.task('styles:dev', function(){
  var processors = [
      autoprefixer({browsers: ['> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4']}),
      cssnano(),
    ];

  gulp.src(src + 'scss/style.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(postcss(processors))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest(dist + 'css/'))
  .pipe(browserSync.stream());
});

// sass dist remove source maps
gulp.task('styles:dist', function(){
  var processors = [
      autoprefixer({browsers: ['> 3%', 'last 2 versions', 'ie 9', 'ios 6', 'android 4']}),
      cssnano(),
    ];

  gulp.src(src + 'scss/style.scss')
  .pipe(plumber())
  .pipe(sass())
  .pipe(postcss(processors))
  .pipe(gulp.dest(dist + 'css/'))
  .pipe(browserSync.stream());
});

// minify images
gulp.task('images', function(){
  gulp.src(src + 'img/*')
  .pipe(imagemin())
  .pipe(gulp.dest(dist + 'img/'));
});

// copy fonts
gulp.task('fonts', function(){
  gulp.src(src + 'fonts/**/*')
  .pipe(gulp.dest(dist + 'fonts/'));
});

// minify script js
gulp.task('main', function(){
  gulp.src(scripts)
  .pipe(plumber())
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(jshint.reporter('fail'))
  .pipe(concat('main.js'))
  .pipe(uglify())
  .pipe(gulp.dest(dist + 'js/'));
});

// pluginss js concat
gulp.task('pluginsjs', function(){
  gulp.src(plugins)
  .pipe(concat('plugins.js'))
  .pipe(uglify())
  .pipe(gulp.dest(dist + 'js/'));
});

// serve
gulp.task('serve', function(){
  if(useproxy){
    browserSync.init({
      proxy: proxyUrl,
      port: localPort
    });
  }else{
    browserSync.init({
      server: {
        baseDir: "./"
      },
      port: localPort
    });
  }
  
  gulp.watch(src + 'scss/**/*.scss', ['styles:dev']);
  gulp.watch(src + 'js/**/*.js', ['main']).on('change', reload);
  gulp.watch(src + 'img/*(*.png|*.jpg|*.jpeg|*.gif|*.svg)').on('change', reload);
  gulp.watch('./**/*.php').on('change', reload);
  gulp.watch('*.html').on('change', reload);
});

// tasks globals
gulp.task('static', ['pluginsjs', 'main', 'images', 'fonts']);

// build
gulp.task('build', ['styles:dev', 'static']);
// gulp minify all
gulp.task('dist', ['styles:dist', 'static']);
// dev
gulp.task('default', ['build', 'serve']);