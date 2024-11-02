import { dest, src } from "gulp";
import autoPrefixer from "gulp-autoprefixer";
import dartSass from "gulp-dart-sass";
import sourcemaps from "gulp-sourcemaps";
import { path } from "../config/path.js";

export const style = () => {
	return src(path.src.style)
		.pipe(sourcemaps.init())
		.pipe(
			dartSass
				.sync({
					outputStyle: "expanded",
					silenceDeprecations: ["legacy-js-api"],
				})
				.on("error", dartSass.logError)
		)
		.pipe(
			autoPrefixer({
				overrideBrowserslist: ["last 2 versions"],
				cascade: false,
			})
		)
		.pipe(sourcemaps.write("."))
		.pipe(dest(path.dist.style));
};
