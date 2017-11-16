var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream')

var child = require('child_process');
var fs = require('fs');

gulp.task('server', function() {
  var server = child.spawn('node', ['server.js']);
  var log = fs.createWriteStream('server.log', {flags: 'a'});
  server.stdout.pipe(log);
  server.stderr.pipe(log);
});

gulp.task('watch', function(){
  gulp.watch('src/*.js', ['script']);
  gulp.watch('public/*', ['style','assets']);
});

gulp.task('style',function(){
	gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('app.css'))
		.pipe(gulp.dest('public'))
})
gulp.task('assets',function(){
	gulp
	.src('assets/*')
	.pipe(gulp.dest('public'))
})
gulp.task('script', function(){
	browserify('./src/index.js')
	.transform(babel)
	.bundle()
	.pipe(source('index.js'))
	.pipe(rename('app.js'))
	.pipe(gulp.dest('public'))
})
gulp.task('default',['style','assets','script','server'])