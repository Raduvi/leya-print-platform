import { h, Host } from '@stencil/core';
export class WorkReportContentTpl {
  render() {
    return h(Host, null, "content start", h("div", { class: "work-report__content__spacer", style: { height: '1000px' } }, "spacer"), new Array(20).fill(true).map((_, i) => {
      return h("section", null, h("h3", null, "Section ", i), h("p", null, "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."));
    }), h("div", { class: "work-report__content-end" }, "content end"));
  }
  static get is() { return "tpl-work-report-content"; }
  static get originalStyleUrls() {
    return {
      "$": ["1-work-report-content.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["1-work-report-content.css"]
    };
  }
}
