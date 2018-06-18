var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var gp_concat = require('gulp-concat');
var gp_rename = require('gulp-rename');

gulp.task('css', function() {
    return gulp.src('css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8', specialComments: 0, level: {
            1: {
                all: true,
                normalizeUrls: false
            },
            2: {
                restructureRules: true
            }
        }}))
        .pipe(gulp.dest('dist'))
});


gulp.task('js', function(){
    return gulp.src(['js/modernizr.js','js/jquery.min.js', 'js/bootstrap.min.js', 'js/height.js','js/offcanvas.js','js/main.js'])
        .pipe(gp_concat('concat.js'))
        .pipe(gulp.dest('dist'))
        .pipe(gp_rename('bundle_fyd7i1u8.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
});
