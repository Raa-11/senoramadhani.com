/** @type {import('tailwindcss').Config} */

import colors from 'tailwindcss/colors';

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: colors.black,
			white: colors.white,
			gray: colors.gray,
			emerald: colors.emerald,
			indigo: colors.indigo,
			yellow: colors.yellow,
			pink: colors.pink,
			blue: colors.blue,
			sky: colors.sky,
			red: colors.red,
			'abu': {
				100: '#fafafa',
			},
		},
		extend: {
			fontFamily: {
				'firacodebold': ["FiraCodeBold", "sans-serif"],
				'firacodelight': ["FiraCodeLight", "monospace"],
				'consolas': ["Consolas", "monospace"],
				'interbold': ["InterBold", "sans-serif"],
			},
		},
	},
	plugins: [],
}
