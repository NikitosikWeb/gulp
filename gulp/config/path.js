const srcFolder = "./src";
const buildFolder = "./build";

export const path = {
	src: {
		copy: `${srcFolder}/static/**/*.*`,
		pug: `${srcFolder}/views/pages/*.pug`,
		style: `${srcFolder}/styles/index.scss`,
	},
	dist: {
		copy: `${buildFolder}/static/`,
		pug: `${buildFolder}/`,
		style: `${buildFolder}/css/`,
	},
	watch: {
		copy: `${srcFolder}/static/**/*.*`,
		pug: `${srcFolder}/views/**/*.pug`,
		style: `${srcFolder}/styles/**/*.scss`,
	},
	clean: buildFolder,
};
