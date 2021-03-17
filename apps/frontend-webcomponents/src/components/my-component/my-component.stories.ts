import { html } from 'lit-html';
import { Story } from '../..';


export interface MyComponentArgs {
    first: string;
    middle: string;
    last: string;
}


export default {
    title: 'Componentes/my-component'
}


const Template: Story<MyComponentArgs> = (args) => html`
    <my-component first="${args.first}" middle="${args.middle}" last="${args.last}">
        This will not render [ no slot ]
    </my-component>
`;


export const MyComponent: Story<MyComponentArgs> = Template.bind({});

MyComponent.storyName = 'default';


export const MyComponentWithArgs: Story<MyComponentArgs> = Template.bind({});

MyComponentWithArgs.storyName = 'with props';

MyComponentWithArgs.args = {
    first: 'This',
    middle: 'will be',
    last: 'rendered'
};