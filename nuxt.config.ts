// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@nuxthub/core', '@nuxt/eslint', '@nuxtjs/tailwindcss'],
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
    hub: {
        database: true,
    }
})
