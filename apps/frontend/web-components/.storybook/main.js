module.exports = {
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    '@storybook/addon-a11y',
    'storybook-addon-themes',
    'storybook-addon-designs'
  ],
  webpackFinal: (config) => {
    const mutateLoaderToMakePathAbsolute = (loader) => {
      if(loader && loader.options && loader.options.name) {
        loader.options.name = 'assets/[name].[ext]';
      }
    };

    const fileLoader = config.module.rules.find(({loader}) => /file-loader/.test(loader));
    mutateLoaderToMakePathAbsolute(fileLoader);
    return config;
  }
}
