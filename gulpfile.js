var gulp = require('gulp'),
	//	sass = require('gulp-sass'),
	autoprefixer = require('gulp-autoprefixer'),
	minifycss = require('gulp-minify-css'),
	rename = require("gulp-rename"),
	browserSync = require('browser-sync').create(),
	validator = require('gulp-html'),
	htmlmin = require('gulp-htmlmin'),
	//	jade = require('gulp-jade'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglifyjs'),
	image = require('gulp-image');

gulp.task('browser-sync', ['styles', 'uglify', 'html', 'image'], function () {
	browserSync.init({
		server: {
			baseDir: 'build'
		},
		notify: false
	});
});
gulp.task('image', function () {
	gulp.src('./app/img/**/*')
		.pipe(image())
		.pipe(gulp.dest('build/img'))
});

//compile scss code
gulp.task('styles', function () {
	return gulp.src('./app/style/**/*.css')
		//		.pipe(sass().on('error', sass.logError))
		.pipe(rename({
			suffix: '.min',
			preffix: ''
		}))
		.pipe(autoprefixer({
			browsers: ['last 10 versions'],
			cascade: true
		}))
		.pipe(minifycss())
		.pipe(gulp.dest('build/css'))
		.pipe(browserSync.stream());
});
//compile jade code
//gulp.task('jade', function () {
//	return gulp.src('./app/templates/**/*.jade')
//		.pipe(jade())
//		.pipe(gulp.dest('build'))
//});

//compile html code
gulp.task('html', function () {
	return gulp.src('./app/templates/**/*.html')
		//		.pipe(validator())
		.pipe(htmlmin({
			collapseWhitespace: true
		}))
		.pipe(gulp.dest('build'));
});


//compile js code
gulp.task('uglify', function () {
	gulp.src('./app/js/**/*.js')
		//		.pipe(uglify())
		//		.pipe(concat('all.js'))
		.pipe(gulp.dest('build/js'))
});

gulp.task('build', ['styles', 'uglify', 'html', 'image']);


gulp.task('watch', function () {
	gulp.watch('app/style/**/*.css', ['styles']);
	//	gulp.watch('app/templates/**/*.jade', ['jade']);
	gulp.watch('app/templates/**/*.html', ['html']);
	gulp.watch('app/img/**/*', ['image']);
	gulp.watch('app/js/**/*.js', ['uglify']);
	gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);
