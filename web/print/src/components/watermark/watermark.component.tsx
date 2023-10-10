import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'leya-print-watermark',
  styleUrl: 'watermark.component.scss',
  shadow: false,
})
export class LeyaPrintWatermark {

  render() {
    const leyaPrintWatermark = new URL(window.location.href).searchParams.get('watermark');
    return <Host>{leyaPrintWatermark && <div class="leya-print-watermark">{leyaPrintWatermark}</div>}</Host>
  }
}
