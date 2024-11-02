import { parallel, series, watch } from "gulp";
import { path } from "./gulp/config/path.js";
import { clean } from "./gulp/tasks/clean.js";
import { copy } from "./gulp/tasks/copy.js";
import { pug } from "./gulp/tasks/pug.js";

const watching = () => {
	watch(path.watch.copy, copy);
	watch(path.watch.pug, pug);
};

export const build = series(clean, parallel(pug, copy), watching);
