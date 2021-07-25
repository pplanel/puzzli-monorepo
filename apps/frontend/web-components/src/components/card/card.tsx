import { Component, Host, h, Element } from '@stencil/core';

@Component({
  tag: 'app-card',
  styleUrl: 'card.scss',
  shadow: true
})
export class Card {
  hasHeader: boolean;
  hasFooter: boolean;

  @Element() hostEl: HTMLAppCardElement;

  componentWillLoad(): void {
    this.hasHeader = !!this.hostEl.querySelector('[slot="header"]');
    this.hasFooter = !!this.hostEl.querySelector('[slot="footer"]');
  }

  render(): HTMLAppCardElement {
    return (
      <Host>
        {this.hasHeader && (
          <div class="app-card-header">
            <slot name="header"></slot>
          </div>
        )}

        <div class="app-card-content">
          <slot></slot>
        </div>

        {this.hasFooter && (
          <div class="app-card-footer">
            <slot name="footer"></slot>
          </div>
        )}
      </Host>
    );
  }
}
