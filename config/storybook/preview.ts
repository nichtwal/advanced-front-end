import type { Preview } from '@storybook/react'
import {StyleDecorator} from '../../src/shared/config/storybook/style-decorator/StyleDecorator'
const preview: Preview = {
 // decorators:[StyleDecorator],
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};


export default preview;