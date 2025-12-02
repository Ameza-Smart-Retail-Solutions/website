/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: "custom",
        loaderFile: "./imageLoader.ts",
    },
};

export default nextConfig;
