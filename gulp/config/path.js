const srcFolder = "./src";
const buildFolder = "./build";

export const path = {
	src: {
		copy: `${srcFolder}/static/**/*.*`,
		pug: `${srcFolder}/views/pages/*.pug`,
		style: `${srcFolder}/styles/index.scss`,
		img: `${srcFolder}/assets/images/**/*.*`,
	},
	dist: {
		copy: `${buildFolder}/static/`,
		pug: `${buildFolder}/`,
		style: `${buildFolder}/css/`,
		img: `${buildFolder}/assets/images`,
	},
	watch: {
		copy: `${srcFolder}/static/**/*.*`,
		pug: `${srcFolder}/views/**/*.pug`,
		style: `${srcFolder}/styles/**/*.scss`,
		img: `${srcFolder}/assets/images/**/*.*`,
	},
	clean: buildFolder,
};
