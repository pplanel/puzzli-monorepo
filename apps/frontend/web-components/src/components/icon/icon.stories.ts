import { html } from 'lit-html';
import { Story } from '@storybook/web-components';
import { withDesign } from 'storybook-addon-designs';

import { Icon } from './icon';
import twitterIcon from './assets/twitter.svg';

export default {
  title: 'Components/Icon',
  decorators: [withDesign],
  argTypes: {
    fill: {
      control: { type: 'color' }
    },
    bgColor: {
      control: { type: 'color' }
    }
  }
};

export type IconStoryArgs = Icon & { fill: string; bgColor: string };

const Template: Story<IconStoryArgs> = args => {
  return html` <app-icon .src=${args.src} style="--icon-bg-color: ${args.bgColor}; --icon-fill: ${args.fill}"></app-icon> `;
};

export const Default: Story<IconStoryArgs> = Template.bind({});

Default.storyName = 'Default';

Default.args = {
  src: twitterIcon,
  fill: 'rgba(124, 129, 149, 1)',
  bgColor: 'rgba(255, 255, 255, 0)'
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UFmj2osPpMRUAWohxW5Kwd/Redesign-app-Enem?node-id=814%3A1381'
  }
};
