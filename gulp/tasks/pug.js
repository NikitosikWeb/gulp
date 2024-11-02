import { dest, src } from "gulp";
import GulpPug from "gulp-pug";
import replace from "gulp-replace";
import { path } from "../config/path.js";

export const pug = () => {
	return src(path.src.pug)
		.pipe(
			GulpPug({
				pretty: true,
			})
		)
		.pipe(replace("@ico", "./assets/icons"))
		.pipe(replace("@img", "./assets/images"))
		.pipe(dest(path.dist.pug));
};
