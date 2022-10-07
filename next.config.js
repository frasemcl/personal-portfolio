/** @type {import('next').NextConfig} */

const nextTranslate = require('next-translate');

module.exports = nextTranslate({
	reactStrictMode: true,
	swcMinify: true,
});

// const nextConfig = {
// 	reactStrictMode: true,
// 	swcMinify: true,
// };

// module.exports = nextConfig;
