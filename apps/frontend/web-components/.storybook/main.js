// const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    // '@storybook/addon-links',
    // '@storybook/addon-viewport',
    // '@storybook/addon-notes',
    // 'storybook-addon-jsx',
  ],
  // webpackFinal: async (config, { configType }) => {
  //   // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  //   // You can change the configuration based on that.
  //   // 'PRODUCTION' is used when building the static version of storybook.

  //   config.devServer = {
  //     watchContentBase: true,
  //     contentBase: path.join(__dirname, 'src'),
  //     historyApiFallback: true,
  //   };

  //   // config.module.rules[0].use[0].options.sourceType = 'unambiguous';

  //   config.module.rules.push({
  //     test: /.\.stories\.tsx$/,
  //     exclude: /(src)/,
  //     use: [{
  //       loader: 'babel-loader',
  //       options: {
  //         presets: ['@babel/preset-env, @babel/preset-react'],
  //       },
  //     },
  //   ],

  //   });
  //   config.resolve.extensions.push('.stories.tsx');

  //   config.module.rules.push({
  //     test: /\.i18n\..+\.json$/,
  //     use: [{
  //       loader: 'raw-loader',
  //       options: {
  //         esModule: false,
  //       },
  //     },
  //   ],
  //   });
  //   // config.module.rules.push({
  //   //     test: /\.theme\.css$/,
  //   //     use: [
  //   //         'style-loader',
  //   //         {
  //   //             loader: 'css-loader',
  //   //             options: {
  //   //                 esModule: false
  //   //             }
  //   //         },
  //   //     ]
  //   // });




  //   config.resolve.alias = {
  //     '@src': path.resolve(__dirname, '../dist/collection'),

  //   };

  //   // Return the altered config
  //   return config;
  // },
};
