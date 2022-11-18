/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
}

module.exports = () => {
	const rewrites = () => {
		return [
			{
				source: '/mail/:path*',
				destination: 'http://127.0.0.1:5000/mail/:path*',
			},
			{
				source: '/quickmail/:path*',
				destination:
					'http://127.0.0.1:5000/quickmail/:path*',
			},
		]
	}
	return {
		rewrites,
	}
}

module.exports = {
	typescript: {
	  ignoreBuildErrors: true,
	},
  }