const srcFolder = "./src";
const buildFolder = "./build";

export const path = {
	src: {
		copy: `${srcFolder}/static/**/*.*`,
		pug: `${srcFolder}/views/pages/*.pug`,
	},
	dist: {
		copy: `${buildFolder}/static/`,
		pug: `${buildFolder}/`,
	},
	watch: {
		copy: `${srcFolder}/static/**/*.*`,
		pug: `${srcFolder}/views/**/*.pug`,
	},
	clean: buildFolder,
};
