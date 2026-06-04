import gulp from 'gulp';
import imagemin from 'gulp-imagemin';

export const images = () => {
    return gulp.src('src/images/*') // Adjust this path if needed
        .pipe(imagemin()) // Optimize images
        .pipe(gulp.dest('dist/images')); // Output optimized images
};

const build = gulp.series(images);

export default build;