import { proxyCustomElement, HTMLElement, getAssetPath, h, Host } from '@stencil/core/internal/client';
import { i as invoiceSamples } from './invoice-samples.js';
import { d as defineCustomElement$3 } from './address.component.js';
import { d as defineCustomElement$2 } from './address-line.component.js';

const _0InvoiceHeaderCss = "body{font-size:12pt;font-family:\"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif !important}@media print{@page {margin-left:20mm}}tpl-invoice-header{font-size:12pt;font-family:\"Lucida Sans\", \"Lucida Sans Regular\", \"Lucida Grande\", \"Lucida Sans Unicode\", Geneva, Verdana, sans-serif !important;display:block;padding:1cm 2cm 1cm 25mm;padding-bottom:0;font-size:10pt;min-height:88mm}tpl-invoice-header .invoice-header__address-box{position:absolute;display:flex;flex-direction:column;top:30mm;left:20mm;width:85mm;height:42mm;box-sizing:border-box;padding-left:5mm;border:1px solid darkgray;border-style:dotted;border-radius:5px}tpl-invoice-header .invoice-header__address-box .invoice-header__sender{display:flex;height:5mm;width:80mm}tpl-invoice-header .invoice-header__address-box .invoice-header__sender tplb-address-line{flex-shrink:1;font-size:7pt}tpl-invoice-header .invoice-header__address-box .invoice-header__additions{height:9.7mm}tpl-invoice-header .invoice-header__address-box .invoice-header__sendTo{height:27.3mm}tpl-invoice-header .invoice-header__header-data{min-height:62mm;margin-left:115mm;margin-bottom:8.46mm;margin-right:-10mm;max-width:75mm}tpl-invoice-header .invoice-header__header-data .invoice-header__company tplb-address{display:block;margin-bottom:1em}tpl-invoice-header .invoice-header__header-data .invoice-header__company tplb-address .tplb-address-company{font-weight:bold}tpl-invoice-header .invoice-header__header-data .invoice-header__customer-reference{display:inline-flex;flex-direction:column;margin-top:2em;border:1px solid red;padding:0}tpl-invoice-header .invoice-header__header-data .invoice-header__customer-reference h3{display:block;color:white;margin-top:0;margin-bottom:0.3em}tpl-invoice-header .invoice-header__header-data .invoice-header__customer-reference h3 span:first-child{display:block;overflow:hidden;width:5.6470833333cm;height:1.75em}tpl-invoice-header .invoice-header__header-data .invoice-header__customer-reference h3 span:first-child svg{width:5.6470833333cm;fill:red;stroke:red}tpl-invoice-header .invoice-header__header-data .invoice-header__customer-reference h3 span:last-child{display:block;padding:0.3em;padding-bottom:0.15em}tpl-invoice-header .invoice-header__header-data .invoice-header__customer-reference .invoice-header__customer-reference__content{padding:0.3em}tpl-invoice-header .invoice-header__headline{display:flex;justify-content:space-between;align-items:baseline}tpl-invoice-header .invoice-header__headline h2{margin-top:1cm;margin-bottom:0.5cm}tpl-invoice-header .invoice-header__foldmark-1{position:absolute;left:0mm;top:86.9mm;width:5mm;height:0;overflow:hidden;border-bottom:0.2mm solid black}tpl-invoice-header .invoice-header__centermark{position:absolute;left:0mm;top:148.3mm;width:10mm;height:0;overflow:hidden;border-bottom:0.4mm solid black}tpl-invoice-header .invoice-header__foldmark-2{position:absolute;left:0mm;top:191.9mm;width:5mm;height:0;overflow:hidden;border-bottom:0.2mm solid black}tpl-invoice-header .invoice-header__img{display:flex;justify-content:end;padding-bottom:0.2cm;padding-right:2cm;padding-left:2cm}tpl-invoice-header .invoice-header__img-size{width:110px;height:70px}tpl-invoice-header .leya-print-image{width:inherit;height:inherit}tpl-invoice-header .leya-print-image .img-size{width:inherit;height:inherit}tpl-invoice-header .invoice-header_img_url{width:100px;height:70px;align-content:end}tpl-invoice-header .leya-print-image{width:inherit;height:inherit}tpl-invoice-header .leya-print-image .img-size{width:inherit;height:inherit}";

const InvoiceHeaderTpl = /*@__PURE__*/ proxyCustomElement(class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.invoice = window.providedData || invoiceSamples['invoice-001'];
  }
  render() {
    const invoice = this.invoice;
    const image = getAssetPath(`assets/leya.png`);
    return h(Host, null, h("div", { class: "invoice-header__img" }, h("div", { class: "invoice-header__img-size" }, h("leya-print-image-fetch", { imgSrc: image, class: "leya-print-image", imgAlt: "Company Logo" }))), h("div", { class: "invoice-header__address-box" }, h("div", { class: "invoice-header__sender" }, h("tplb-address-line", { address: invoice.sender.address })), h("div", { class: "invoice-header__additions" }), h("div", { class: "invoice-header__sendTo" }, h("tplb-address", { address: invoice.recipient.address }))), h("div", { class: "invoice-header__header-data" }, h("div", { class: "invoice-header__company" }, h("tplb-address", { address: invoice.sender.address }), h("div", null, "USt-IdNr.: ", invoice.sender.vatIdent)), invoice.customerReference && h("div", { class: "invoice-header__customer-reference" }, h("h3", null, h("span", null, h("svg", { viewBox: '0 0 60 10', xmlns: "http://www.w3.org/2000/svg" }, h("rect", { x1: 0, y1: 0, width: 60, height: 10 }), h("text", { x: 4, y: 7, fill: "white", "font-size": 5, stroke: "none" }, "customer reference:")))), h("div", { class: "invoice-header__customer-reference__content" }, invoice.customerReference.split('\n').map((l) => h("div", null, l))))), h("div", { class: "invoice-header__headline" }, h("h2", null, "Invoice ", this.invoice.invoiceNo), h("div", { class: "invoice-header__date" }, new Date(this.invoice.date).toLocaleDateString('en-US', { dateStyle: 'full' }))), h("div", { class: "invoice-header__foldmark-1" }, "\u00A0"), h("div", { class: "invoice-header__centermark" }, "\u00A0"), h("div", { class: "invoice-header__foldmark-2" }, "\u00A0"));
  }
  static get assetsDirs() { return ["assets"]; }
  static get style() { return _0InvoiceHeaderCss; }
}, [0, "tpl-invoice-header", {
    "invoice": [32]
  }]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["tpl-invoice-header", "tplb-address", "tplb-address-line"];
  components.forEach(tagName => { switch (tagName) {
    case "tpl-invoice-header":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, InvoiceHeaderTpl);
      }
      break;
    case "tplb-address":
      if (!customElements.get(tagName)) {
        defineCustomElement$3();
      }
      break;
    case "tplb-address-line":
      if (!customElements.get(tagName)) {
        defineCustomElement$2();
      }
      break;
  } });
}

const TplInvoiceHeader = InvoiceHeaderTpl;
const defineCustomElement = defineCustomElement$1;

export { TplInvoiceHeader, defineCustomElement };
