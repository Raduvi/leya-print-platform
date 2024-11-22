import { Component, h, Host, State } from '@stencil/core';
import { CorporateLetter } from './corporate-letter-model';
import { marked } from 'marked';

@Component({
  tag: 'tpl-corporate-letter-content',
  styleUrl: '1-corporate-letter-content.scss',
  shadow: false,
  assetsDirs: ['assets'],
})
export class CorporateLetterContentTpl {
  @State() data: CorporateLetter = (window as any).providedData || {
    title: 'no data',
    contents: 'test',
  };
  @State() htmlContent: string = '';

  async componentWillLoad() {
    this.htmlContent = await marked(this.data.contents, { async: false });
  }

  render() {
    return <Host>
      <div innerHTML={this.htmlContent}></div>
    </Host>
  }
}
