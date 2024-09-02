import { src, dest } from "gulp";
import minify from "gulp-minify";

function copy() {
  console.log("Copying files... icons/* -> /dist/icons");
  const copyIcon = src(["icons*/**/*"], { encoding: false }).pipe(
    dest("dist/"),
  );
  console.log("Copying files... src/*.(js|json|css) -> /dist");
  const copyJs = src(["src/*.(js|json|css)"])
    .pipe(
      minify({
        ext: {
          src: ".js",
          min: ".js",
        },
        noSource: true,
      }),
    )
    .pipe(dest("dist/"));
  return [copyIcon, copyJs];
}

copy();
