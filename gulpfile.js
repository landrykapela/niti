const jshint = require('gulp-jshint');
const babel  = require('gulp-babel');
const runSequence = require('run-sequence');
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const uglify = require('gulp-uglify')


//task to export js
gulp.task('exportJS', () => {
	gulp.src('js/*.js')
	.pipe(gulp.dest('dist/js'))
});

//task to export css
gulp.task('exportCSS', () => {
	gulp.src('css/*.css')
	.pipe(gulp.dest('dist/css'))
});

//task to export html
gulp.task('exportHTML', () => {
	gulp.src('*.html')
	.pipe(gulp.dest('dist'))
});

//task to export images
gulp.task('exportIMAGES', () => {
	gulp.src('images/*.*')
	.pipe(gulp.dest('dist/images'))
});
//task for babel polyfill
gulp.task('babelPolyfill', () => {
	gulp.src('node_modules/babel-polyfill/browser.js')
	.pipe(gulp.dest('dist/node_modules/babel-polyfill'))
});

//task to automate browser sync
gulp.task('browserSync', () => {
	browserSync.init({
		server: './dist',
		port: 8080,
		ui: {
			port: 8081
		}
	});
});

//task to watch changes
gulp.task('watch', ['browserSync'], () => {
	gulp.watch('js/*.js', ['exportJS']);
	gulp.watch('*.html', ['exportHTML']);
	gulp.watch('css/*.css', ['exportCSS']);
	gulp.watch('images/*.*', ['exportIMAGES']);

	gulp.watch('dist/js/*.js', browserSync.reload);
	gulp.watch('dist/css/*.css', browserSync.reload);
	gulp.watch('dist/images/*.*', browserSync.reload);
	gulp.watch('dist/*.html', browserSync.reload);

});

//default task to run all task by default
gulp.task('default', (callback) => {
	runSequence(['exportHTML','exportIMAGES','exportCSS','exportJS','babelPolyfill'],'watch', callback);
});