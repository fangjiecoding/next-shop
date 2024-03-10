/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**.music.126.net",
			},
			{
				protocol: "http",
				hostname: "**.music.126.net",
			},
		],
	},

	transpilePackages: [
		"antd",
		"@ant-design",
		"rc-util",
		"rc-pagination",
		"rc-picker",
		"rc-notification",
		"rc-tooltip",
		"rc-tree",
		"rc-table",
	],
};

export default nextConfig;
