// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: [
		'@nuxt/eslint',
		'@nuxthub/core',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/google-fonts',
	],
	googleFonts: {
		families: {
			'Titan One': [400, 500, 600, 700],
		},
	},
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				quotes: 'single',
				semi: false,
				blockSpacing: true,
			},
		},
	},
})
