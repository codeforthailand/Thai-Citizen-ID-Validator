var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('lint', function() {
    return gulp.src('./lib/*.js')
      .pipe($.jshint())
      .pipe($.jshint.reporter('jshint-stylish'))
      .pipe($.jshint.reporter('fail'))
});

gulp.task('test', function(){
    return gulp.src('./spec/*.js')
        .pipe($.jasmine());
});

gulp.task('compress',function(){
    return gulp.src('./lib/*.js')
        .pipe($.concat('th-id-validator.js'))
        .pipe(gulp.dest('dist'))
        .pipe($.rename({ suffix: '.min' }))
        .pipe($.uglify())
        .pipe(gulp.dest('./dist'))
        .pipe($.notify({ message: 'Build completes' }));
});

gulp.task( 'default', [ 'lint', 'test' ] );
gulp.task( 'build', [ 'default', 'compress' ] );
