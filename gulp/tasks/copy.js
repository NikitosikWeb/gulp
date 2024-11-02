import { dest, src } from "gulp";
import { path } from "../config/path.js";

export const copy = () => {
	return src(path.src.copy).pipe(dest(path.dist.copy));
};
