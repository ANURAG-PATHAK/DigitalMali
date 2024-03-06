/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
		domains: ['localhost', 'https://digitalmali.onrender.com'],
		loader: 'imgix',
		path: '../media',
	},
};

export default nextConfig;