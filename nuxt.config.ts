export default defineNuxtConfig({
    devtools: { enabled: true },
    app: {
        head: {
            title: 'Angel Aguirre • @angeloxlan',
            htmlAttrs: {
                lang: 'en',
            },
            meta: [
                { charset: 'utf-8' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1',
                },
                { name: 'title', content: 'Angel Aguirre • @angeloxlan' },
                { name: 'keywords', content: 'Software,Engineer' },
                { name: 'format-detection', content: 'telephone=no' },
                {
                    hid: 'description',
                    name: 'description',
                    content:
                        'Enthusiastic Software Developer with a strong passion for technology.',
                },
            ],
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        },
        pageTransition: { name: 'page', mode: 'out-in' },
    },
    css: ['@/assets/scss/main.scss'],
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
    googleFonts: {
        display: 'swap',
        download: true,
        base64: true,
        overwriting: true,
        families: {
            'JetBrains+Mono': {
                wght: [400],
            },
            'Source+Code+Pro': {
                wght: [400],
                ital: [400],
            },
        },
    },
})
