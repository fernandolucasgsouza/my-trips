/* eslint-disable @typescript-eslint/no-var-requires */
const withPWA = require('next-pwa');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = withPWA({
    pageExtensions: ['page.tsx', 'page.ts', 'page.jsx', 'page.js', 'page.mdx'],
    reactStrictMode: true,
    pwa: {
        dest: 'public',
        disable: !isProduction,
    },
});
