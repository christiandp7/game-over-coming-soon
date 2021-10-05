module.exports = {
	future: {
		purgeLayersByDefault: true,
		applyComplexClasses: true,
	},
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
	mode: 'jit',
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				fb: '#2d88ff',
				'fb-accent': '#4267B2',
				wapp: '#25D366',
				'wapp-accent': '#128C7E',
				'go-orange': '#FF830A',
			},
			screen: {
				screens: {
					sm: '640px',
					md: '768px',
					lg: '1024px',
					xl: '1280px',
					'2xl': '1536px',
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
