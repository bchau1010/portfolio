
module.exports = {
	content: ['./index.html', './src/**/*.{jsx, js}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				inter: ['inter', 'serif'],
			},
			colors: {
				// Custom colors for light mode
				light: {
					background: '#f0f9ff', // Custom background color for light mode
				},
				// Custom colors for dark mode
				dark: {
					background: '#18181b', // Custom background color for dark mode
				},
			},

		},
	},
	plugins: [],
};
