const withTypescript = require("@zeit/next-typescript");
const withSass = require("@zeit/next-sass");

module.exports = withTypescript(
  withSass({
    webpack: (config, options) => {
      // Unshift polyfills in main entrypoint.
      /*
      const originalEntry = config.entry;
      config.entry = async () => {
        const entries = await originalEntry();
        if (entries['main.js']) {
          entries['main.js'].unshift('./static/js/polyfills.js'); // <- polyfill here
        }
        return entries;
      };
      */

      return config;
    },
    cssModules: true,
    sassLoaderOptions: {},
    // typescriptLoaderOptions: {
    //   transpileOnly: false,
    // },
  })
);
