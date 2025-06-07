import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		unoptimized: true,
		localPatterns: [{ pathname: "image.tmdb.org/**" }],
	},
};

export default nextConfig;
