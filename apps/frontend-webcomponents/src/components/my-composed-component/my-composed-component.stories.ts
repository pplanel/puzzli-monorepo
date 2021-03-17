import { html } from 'lit-html';

import { Story } from '../..';
import { MyComponentArgs, MyComponentWithArgs } from '../my-component/my-component.stories';

export interface MyComposedComponentStoryArgs extends MyComponentArgs { 
    title?: string; 
    content?:  string | Node;
    teste?: boolean;
};

export default {
    title: 'Componentes/my-composed-component'
}

export const MyComposedComponent:Story<MyComposedComponentStoryArgs> = (args, context) => html`
    <my-composed-component meuTeste=${args.teste ? () => true : undefined}>
        ${MyComponentWithArgs({ ...args, ...MyComponentWithArgs.args as MyComponentArgs }, context)}
        <hr>
        <h2>${args.title}</h2>
        <p>Meu conteúdo customizado</p>
    </my-composed-component>
`;

MyComposedComponent.args = {
    title: "Meu titulo dinamico",
    teste: true
};

MyComposedComponent.storyName = 'my-composed-component';
