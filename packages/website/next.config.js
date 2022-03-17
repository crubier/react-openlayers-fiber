const createWithNextra = require('nextra');

const withNextra = createWithNextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_flexsearch: true,
  unstable_staticImage: true,
})

/** @type {import('next').NextConfig} */
const nextConfig = withNextra({
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  experimental: {
    // Prefer loading of ES Modules over CommonJS
    // @link {https://nextjs.org/blog/next-11-1#es-modules-support|Blog 11.1.0}
    // @link {https://github.com/vercel/next.js/discussions/27876|Discussion}
    esmExternals: true,
    // Experimental monorepo support
    // @link {https://github.com/vercel/next.js/pull/22867|Original PR}
    // @link {https://github.com/vercel/next.js/discussions/26420|Discussion}
    externalDir: true,
  },
  reactStrictMode: true,
  redirects: () => {
    return [
      {
        source: "/docs",
        destination: "/docs/getting-started",
        statusCode: 302,
      },
      {
        source: "/examples/openlayers",
        destination: "/examples/openlayers/simple",
        statusCode: 302,
      },
      {
        source: "/examples",
        destination: "/examples/openlayers/simple",
        statusCode: 302,
      },
    ]
  }
})

module.exports = nextConfig
