import { deleteAsync } from "del";
import { path } from "../config/path.js";

export const clean = cb => {
	return deleteAsync(path.clean);
	cb();
};
