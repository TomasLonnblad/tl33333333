/** @type {import('next').NextConfig} */
const nextConfig = {


  
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

            reactStrictMode: false,
  output: 'export',
  images: {
    unoptimized: true,
      },
    ];
  },
};

export default nextConfig;
