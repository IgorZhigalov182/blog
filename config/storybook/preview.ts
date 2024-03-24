/* eslint-disable max-len */
/* eslint-disable import/no-useless-path-segments */
import { Preview } from '@storybook/react';
import { Theme } from './../../src/app/providers/ThemeProvider/lib/ThemeContext';
import { ThemeDecorator } from './../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';
import { RouterDecorator } from './../../src/shared/config/storybook/RouterDecorator/RouterDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  },
  decorators: [
    (Story) => Story(StyleDecorator),
    ThemeDecorator(Theme.LIGHT),
    // (Story) => Story(RouterDecorator)
    RouterDecorator
  ]
};

export default preview;
