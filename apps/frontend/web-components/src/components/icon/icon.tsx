import { Component, Host, h, Element, Prop } from '@stencil/core';
import { IconResolvers, IconResolverType } from './icon.resolvers';

const SVG_WRAPPER_CLASS = 'app-icon-svg-wrapper';

@Component({
  tag: 'app-icon',
  styleUrl: 'icon.scss',
  assetsDirs: ['assets'],
  shadow: true
})
export class Icon {
  @Element() el: HTMLAppIconElement;

  @Prop() src!: string;
  @Prop() type: IconResolverType = 'SVG';
  @Prop() colors: boolean;

  componentDidLoad(): void {
    const srcParts = this.src.split('.');
    const type = srcParts[1].toUpperCase();

    // If type not declared, use the src extension as default type
    if (this.type === undefined && type in IconResolvers) {
      this.type = type.toUpperCase() as IconResolverType;
    }

    IconResolvers[this.type](this.el, this.src, `.${SVG_WRAPPER_CLASS}`);
  }

  render(): HTMLAppIconElement {
    const TagName = this.type === 'SVG' ? 'div' : 'img';
    const attrs = this.type === 'SVG' ? { class: SVG_WRAPPER_CLASS } : { src: this.src, alt: '' };

    return (
      <Host class={{ [SVG_WRAPPER_CLASS]: this.colors }}>
        <TagName {...attrs} />
      </Host>
    );
  }
}
