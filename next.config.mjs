/** @type {import('next').NextConfig} */
const nextConfig = {

  reactStrictMode: false,
  output: 'export',
  images: {
    unoptimized: true,
  
  reactCompiler: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
   {
    return [
      async redirects(){
        source: "/dashboard",
        destination: "/dashboard/default",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
