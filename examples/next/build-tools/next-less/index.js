const cssLoaderConfig = require('../next-css/css-loader-config');

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade',
        );
      }

      const { dev, isServer } = options;
      const { cssModules, cssLoaderOptions, postcssLoaderOptions, lessLoaderOptions = {} } = nextConfig;

      options.defaultLoaders.less = cssLoaderConfig(config, {
        extensions: ['less'],
        cssModules,
        cssLoaderOptions,
        postcssLoaderOptions,
        dev,
        isServer,
        loaders: [
          {
            loader: 'less-loader',
            options: lessLoaderOptions,
          },
          {
            loader: 'less-safe-loader'
          },
          {
            loader: 'style-resources-loader',
            options: {
              patterns: [
                require.resolve('@osui/theme/dist/less-functions-overrides.less'),
                require.resolve('@osui/theme/dist/antd-vars-patch.less'),
              ],
              injector: 'append'
            },
          },
        ],
      });

      if (cssModules) {
        options.defaultLoaders.less.unshift('@ecomfe/class-names-loader');
      }

      config.module.rules.push({
        test: /\.less$/,
        use: options.defaultLoaders.less,
      });

      config.module.rules.push({
        test: /\.less$/,
        use: options.defaultLoaders.less,
      });

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options);
      }

      return config;
    },
  });
};
