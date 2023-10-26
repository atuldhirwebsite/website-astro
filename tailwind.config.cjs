/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'satoshi': ['Satoshi', 'monospace'],
			},
			fontWeight: {
				'light': 300,
				'normal': 400,
				'medium': 500,
				'bold': 700,
				'black': 900,
			},
		},
	},
	plugins: [],
}
