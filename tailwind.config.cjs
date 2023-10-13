/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {},
		colors: {
			'paynes-gray': '#586F7C',
			'light-blue': '#B8DBD9',
			'dark-green': '#04724D',
			white: '#ffffff'
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
	]
};
