var gulp =  require('gulp');
var sass =  require('gulp-sass');
var browserSync =  require('browser-sync').create();
var fileinclude = require('gulp-file-include');

gulp.task('styles', function(){
	gulp.src('./_scss/style.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./css'))	
	.pipe(browserSync.reload({stream: true}));
});

gulp.task('fileinclude', function() {
  gulp.src(['./_pages/*.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('serve', function(){
	browserSync.init({
		server: {
			baseDir: './'
		}
	});

	gulp.watch('./_scss/*.scss', ['styles']);
	gulp.watch('./**/*.html', ['fileinclude']).on('change', browserSync.reload);
});

gulp.task('default', ['styles', 'serve', 'fileinclude']);