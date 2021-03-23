import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'my-composed-component',
  styleUrl: 'my-composed-component.scss',
  shadow: true,
})
export class MyComposedComponent {
  render() {
    return (
      <Host>
        <pzl-toolbar>
          Left text
          <pzl-flexible-space></pzl-flexible-space>
          <slot></slot>
          <pzl-flexible-space></pzl-flexible-space>
          Right text
        </pzl-toolbar>
      </Host>
    );
  }
}
