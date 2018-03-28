const gulp = require('gulp'),
	   sass = require('gulp-sass'),
     cleanCSS = require('gulp-clean-css'),
     rename = require("gulp-rename"),
     minify = require('gulp-minifier'),
     buster = require('gulp-buster'),
     cssResourceCacheBuster = require('gulp-css-resource-cache-buster'),
     concat = require('gulp-concat');

var sassConfig = {
	inputFile: './public/stylesheets/sources/styles.scss',
	outputDirectory: './public/stylesheets/'
};

var jsConfig = {
  inputFiles: {
    global: [
    ]
  },
  outputDirectory: '/public/javascripts/'
};

/**
 * Builds sources scripts and output them in given outputName.
 *
 * @param {String} src        The source of files to build.
 * @param {String} outputName The output name of file after building.
 *
 * @returns {unresolved}
 */
function gulpBuildScripts(src, outputName) {
    var out = outputName + '.min.js';
    return gulp.src(src)
        .pipe(concat('scripts-global.js'))
        .pipe(minify({
            minify: true,
            collapseWhitespace: true,
            conservativeCollapse: true,
            minifyJS: true
        }))
        .pipe(rename(out))
        .pipe(gulp.dest(jsConfig.outputDirectory));
}

// all sass files > style.min.css
gulp.task('css', function() {
	return gulp
		.src(sassConfig.inputFile)
		.pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename("style.min.css"))
		.pipe(gulp.dest(sassConfig.outputDirectory));
});

// Default global js
gulp.task('js-global', function() {
  return gulpBuildScripts(jsConfig.inputFiles.global, 'scripts');
});

gulp.task('cache-buster', function() {
  return gulp.src(`./web/theme/${themeName}/{css,images,js}/**/*`)
    .pipe(buster({relativePath: `web/theme/${themeName}`}))
    .pipe(gulp.dest('.'));
});

// All scripts
gulp.task('scripts', ['js-global']);

// Watcher
gulp.task('watch', function() {
	gulp.watch('/public/stylesheets/sources/**/*.scss',  ['css-bust']);
  gulp.watch('/public/javascripts/sources/**/*.js', ['scripts-bust']);
});

// Default Tas
gulp.task('default', ['css', 'scripts']);
