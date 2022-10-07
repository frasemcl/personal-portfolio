/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				custom1: ['Familjen Grotesk'],
			},
			backgroundImage: {
				patternLight:
					"url('../public/elevation.svg'),linear-gradient(110deg, #ffffff, #fffff2)",
				patternDark:
					"url('../public/elevation.svg'),linear-gradient(110deg, #1F2937, #111827)",
			},
		},
	},
	plugins: [],
};
