import { html } from 'lit-html';
import { Story } from '@storybook/web-components';
import { withDesign } from 'storybook-addon-designs';
import { action } from '@storybook/addon-actions';

import { Button } from './button';
import { BasicSizes } from '../../global/types/Sizes';
import { FlatVariants, OutlineVariants } from '../../global/types/ColorVariants';

export default {
  title: 'Components/Button',
  decorators: [withDesign],
  argTypes: {
    size: {
      options: [...Object.values(BasicSizes), undefined],
      control: { type: 'inline-radio' }
    }
  }
};

const buttonDesignParameter = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/DJx2lF835E8GRMUo8iIqE8/test?node-id=1%3A3'
  }
};

const Template: Story<Button & { label: string }> = ({ label, size, variant, disabled }) => {
  return html` <app-button size=${size} variant=${variant} disabled=${disabled} @buttonClicked=${action('buttonClicked')}>${label}</app-button> `;
};

export const Solid: Story<Button & { label: string }> = Template.bind({});

Solid.storyName = 'Solid';

Solid.parameters = { ...buttonDesignParameter };

Solid.argTypes = {
  variant: {
    options: [...Object.values(FlatVariants)],
    control: { type: 'inline-radio' }
  }
};

Solid.args = {
  variant: 'primary',
  size: 'medium',
  disabled: false,
  label: 'Button'
};

export const Outline: Story<Button & { label: string }> = Template.bind({});

Outline.storyName = 'Outline';

Outline.parameters = { ...buttonDesignParameter };

Outline.argTypes = {
  variant: {
    options: [...Object.values(OutlineVariants)],
    control: { type: 'inline-radio' }
  }
};

Outline.args = {
  variant: 'outline-primary',
  size: 'medium',
  disabled: false,
  label: 'Button'
};
