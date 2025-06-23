/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/api/:path*',
            destination: 'http://localhost:8030/api/:path*', // <-- change 5000 to 8030
          },
        ];
      },
    images: {
        domains: ['res.cloudinary.com'],
    },
};

export default nextConfig;