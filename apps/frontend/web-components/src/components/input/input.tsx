import { Component, Host, h, Prop, Element } from '@stencil/core';
import { inheritAttributes } from 'src/utils/helpers';

@Component({
  tag: 'app-input',
  styleUrl: 'input.scss',
  shadow: true
})
export class Input {
  inheritedAttributes: { [k: string]: boolean };

  @Element() hostEl: HTMLElement;

  @Prop() type: string;
  @Prop() name: string;
  @Prop() status: 'positive' | 'negative';

  render(): HTMLAppInputElement {
    const attrs = inheritAttributes(this.hostEl, ['placeholder']);

    return (
      <Host>
        <input
          class={{
            'app-input': true,
            [this.status]: true
          }}
          name={this.name}
          type={this.type}
          {...attrs}
        />
      </Host>
    );
  }
}
