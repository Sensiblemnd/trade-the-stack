/** @type {import('next').NextConfig} */
const path = require("path")

module.exports = {
  reactStrictMode: true,

  trailingSlash: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles/sass")],
  },

  eslint: {
    dirs: ["pages", "utils", "components", "interfaces", "lib"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },

  images: {
    
  },

  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        permanent: true,
      },
    ]
  },
}
