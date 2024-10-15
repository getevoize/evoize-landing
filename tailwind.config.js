/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	theme: {
		extend: {
			fontFamily: {
				sans: [
					'Inter',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'"Segoe UI"',
					'Roboto',
					'"Helvetica Neue"',
					'Arial',
					'sans-serif',
				],
				titan: ['"Titan One"', 'sans-serif'],
			},
			borderRadius: {
				'4xl': '2rem',
				'5xl': '3rem',
			},
		},
	},
	plugins: [],
}
