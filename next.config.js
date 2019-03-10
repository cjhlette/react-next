const withTypescript = require('@zeit/next-typescript');
const withSass = require('@zeit/next-sass');
const path = require('path');

module.exports = withTypescript(
  withSass({
    webpack: (config, options) => {
      // Unshift polyfills in main entrypoint.
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        if (
          entries['main.js'] &&
          !entries['main.js'].includes('./static/js/polyfills.js')
        ) {
          entries['main.js'].unshift('./static/js/polyfills.js');
        }
        return entries;
      };

      // import root path
      config.resolve.alias['@'] = path.join(__dirname, 'src');
      config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles')
      config.resolve.alias['@pages'] = path.join(__dirname, 'src/pages')
      config.resolve.alias['@components'] = path.join(__dirname, 'src/components')

      return config;
    },
    cssModules: true,
    sassLoaderOptions: {},
    // typescriptLoaderOptions: {
    //   transpileOnly: false,
    // },
  }),
);
