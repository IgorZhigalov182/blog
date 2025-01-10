module.exports = {
  typescript: {
    reactDocgen: 'react-docgen-typescript-plugin',
  },
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    // '@storybook/addon-essentials',
    {
      name: '@storybook/addon-essentials',
      options: {
        backgrounds: false,
      },
    },
    '@storybook/addon-interactions',
    'storybook-addon-mock/register',
    'storybook-addon-themes',
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
};

