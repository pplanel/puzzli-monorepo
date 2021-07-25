import { html } from 'lit-html';
import { Story } from '@storybook/web-components';
import { withDesign } from 'storybook-addon-designs';

import { Input } from './input';

export default {
  title: 'Components/Input',
  decorators: [withDesign]
};

const Template: Story<Input> = args => {
  return html` <app-input status=${args.status}></app-input> `;
};

export const Default: Story<Input> = Template.bind({});

Default.storyName = 'Default';

Default.args = {
  status: 'positive'
};

Default.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/UFmj2osPpMRUAWohxW5Kwd/Redesign-app-Enem?node-id=1000%3A1606'
  }
};
