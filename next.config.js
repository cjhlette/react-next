const withSass = require('@zeit/next-sass')
const path = require('path')

module.exports = withSass({
  webpack: (config, options) => {
    // Unshift polyfills in main entrypoint.
    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()
      if (entries['main.js'] && !entries['main.js'].includes('./static/js/polyfills.js')) {
        entries['main.js'].unshift('./static/js/polyfills.js')
      }
      return entries
    }

    // import root path
    config.resolve.alias['#'] = path.join(__dirname, 'src')
    config.resolve.alias['#styles'] = path.join(__dirname, 'src/styles')
    config.resolve.alias['#pages'] = path.join(__dirname, 'src/pages')
    config.resolve.alias['#components'] = path.join(__dirname, 'src/components')
    config.resolve.alias['#lib'] = path.join(__dirname, 'src/lib')

    // image minify
    config.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
        },
      },
    })

    return config
  },
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]',
  },
})
