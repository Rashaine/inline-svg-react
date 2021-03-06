const gulp = require("gulp");
const babel = require("gulp-babel");

gulp.task("build", function() {
  return gulp
    .src(["./src/index.js"])
    .pipe(babel())
    .pipe(gulp.dest("./lib"));
});

gulp.task("default", ["build"]);
