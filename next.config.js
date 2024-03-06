/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		unoptimized: true,
		domains: ['localhost', 'digitalmali.onrender.com'],
		loader: 'imgix',
		path: '../media',
	},
};

export default nextConfig;