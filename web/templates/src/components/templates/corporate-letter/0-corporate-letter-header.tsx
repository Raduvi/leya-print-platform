import { Component, getAssetPath, h, Host } from '@stencil/core';

@Component({
  tag: 'tpl-corporate-letter-header',
  styleUrl: '0-corporate-letter-header.scss',
  shadow: false,
  assetsDirs: ['assets'],
})
export class CorporateLetterHeaderTpl {    
  render() {            
    const image = getAssetPath(`assets/leya-print-platform-logo.png`); 

    return <Host>      
      <div class="invoice-header__img"><div class="invoice-header__img-size"><leya-print-image-fetch imgSrc={image} class="leya-print-image" imgAlt="Leya Print Platform Logo" /></div></div>
    </Host>
  }
}