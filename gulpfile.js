var gulp = require( 'gulp' );
var plugins = require( 'gulp-load-plugins' )();

var basePaths = {
  src: './src/',
  dest: './wwwroot/wp-content/themes/rafhun/',
  bower: './bower_components/'
};

var paths = {
  styles: {
    src: basePaths.src + 'scss/',
    dest: basePaths.dest
  }
}

function getTask(task) {
  return require('./gulp-tasks/' + task)(gulp, plugins, paths);
}

// styles task
gulp.task('sass', function () {
  return gulp.src( paths.styles.src + 'style.scss')
    .pipe( plugins.sass().on( 'error', plugins.sass.logError ) )
    .pipe( plugins.autoprefixer() )
    .pipe( gulp.dest( paths.styles.dest ) )
    .pipe( plugins.cleanCss() )
    .pipe( plugins.rename({ suffix: '.min' }) )
    .pipe( gulp.dest( paths.styles.dest ) )
}); // end sass task
