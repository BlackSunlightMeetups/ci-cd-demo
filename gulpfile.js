let gulp = require('gulp');

/**
 * Основные таски
 */


gulp.task('build', gulp.series(
    dist
));

function dist() {
    return gulp.src('Functions/**/*')
        .pipe(gulp.dest(`dist`));
}
