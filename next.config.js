/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
}

module.exports = () => {
	const rewrites = () => {
		return [
			{
				source: '/time/:path*',
				destination: 'http://127.0.0.1:5000/time/:path*',
			},
			{
				source: '/test/:path*',
				destination: 'http://127.0.0.1:5000/test/:path*',
			},
			{
				source: '/mail/:path*',
				destination: 'http://127.0.0.1:5000/mail/:path*',
			},
		]
	}
	return {
		rewrites,
	}
}
