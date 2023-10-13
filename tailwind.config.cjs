/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		colors: {
			'gold': '#586F7C',
			'black': '#010101',
			'white': '#ffffff',
			
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	]
};
