var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: './src/'
        }
    });
});

gulp.task('sass', function () {
  return gulp.src('src/assets/scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('watch', ['browserSync', 'sass'], function () {
  gulp.watch('src/assets/scss/*.scss', ['sass']);
});
