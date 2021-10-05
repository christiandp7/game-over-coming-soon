module.exports = {
	future: {
		purgeLayersByDefault: true,
		applyComplexClasses: true,
	},
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
	jit: 'true',
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				fb: '#2d88ff',
				'fb-accent': '#4267B2',
				wapp: '#25D366',
				'wapp-accent': '#128C7E',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
