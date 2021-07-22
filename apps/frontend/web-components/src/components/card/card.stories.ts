import { html } from 'lit-html';
import { Story } from '@storybook/web-components';
import { Card } from './card';

export default {
  title: 'Components/Card'
};

const Template: Story<Card> = () => {
  return html`
    <app-card>
      <div slot="header">
        <h1>Eu sou o header</h1>
      </div>

      <div>
        <p>Eu sou o content</p>
      </div>

      <div slot="footer">
        <p>Eu sou o footer</p>
      </div>
    </app-card>
  `;
};

export const Default: Story<Card> = Template.bind({});
Default.storyName = 'Default';
