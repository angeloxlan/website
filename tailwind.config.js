/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [],
    theme: {
        extend: {
            colors: {
                'usr-red': '#862525',
                'usr-soft-red': '#DBBEBE',
                'usr-blue': '#151E29',
            },
            minHeight: {
                100: '25rem',
            },
            fontFamily: {
                jetbrains: [
                    "'JetBrains Mono'",
                    'monospace',
                    ...defaultTheme.fontFamily.sans,
                ],
                sourcecode: [
                    "'Source Code Pro'",
                    'monospace',
                    ...defaultTheme.fontFamily.sans,
                ],
            },
        },
    },
    plugins: [],
}
