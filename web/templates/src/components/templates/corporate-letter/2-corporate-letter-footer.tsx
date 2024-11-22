import { Component, h } from '@stencil/core';

@Component({
  tag: 'tpl-corporate-letter-footer',
  styleUrl: '2-corporate-letter-footer.scss',
})
export class CorporateLetterFooterTpl {
  render() {
    return (
      <div class="page_number">
        Page <span class="pageNumber"></span> of <span class="totalPages"></span>
      </div>
    )
  }
}
