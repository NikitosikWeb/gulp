import { dest, src } from "gulp";
import imagemin, { gifsicle, mozjpeg, optipng } from "gulp-imagemin";
import { path } from "../config/path.js";

export const images = () => {
	return src(path.src.img, { encoding: false })
		.pipe(
			imagemin([
				gifsicle({ interlaced: true }),
				mozjpeg({ quality: 75, progressive: true }),
				optipng({ optimizationLevel: 5 }),
			])
		)
		.pipe(dest(path.dist.img));
};
