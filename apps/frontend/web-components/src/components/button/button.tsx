import { Component, Event, h, Host, Prop } from '@stencil/core';
import { EventEmitter } from '@stencil/core/internal';

import { ColorVariant, ColorVariants } from '../../global/types/ColorVariants';
import { BasicSize, BasicSizes } from '../../global/types/Sizes';
import generateClasses from '../../utils/generateClasses';

@Component({
  tag: 'app-button',
  styleUrl: 'button.scss',
  shadow: true // Shadow DOM
})
export class Button {
  @Prop() variant: ColorVariant = ColorVariants.PRIMARY;
  @Prop() size: BasicSize = BasicSizes.SMALL;
  @Prop({ reflect: true }) disabled: boolean;

  @Event() buttonClicked: EventEmitter<MouseEvent>;

  private handleClickEvent = (e: MouseEvent) => {
    this.buttonClicked.emit(e);
  };

  private classes = () => {
    return generateClasses([this.size, this.variant]);
  };

  render(): HTMLAppButtonElement {
    return (
      <Host>
        <button class={this.classes()} disabled={!!this.disabled} onClick={this.handleClickEvent}>
          <div class="wrapper">
            <slot></slot>
          </div>
        </button>
      </Host>
    );
  }
}
