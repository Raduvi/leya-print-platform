import { r as registerInstance, h, H as Host } from './index-63403316.js';
import { i as invoiceSamples } from './invoice-samples-ab010f4d.js';


const _2InvoiceFooterCss = "tpl-invoice-footer{display:block;box-sizing:border-box;padding:1cm 2cm 1cm 25mm;padding-top:0}tpl-invoice-footer .invoice-footer__pageNumber{text-align:right;padding-top:4.23mm;font-size:10pt;margin-bottom:4.23mm}tpl-invoice-footer .invoice-footer__img{justify-content:right;display:flex;justify-content:end;padding-bottom:0.2cm;padding-right:2cm;padding-left:2cm}tpl-invoice-footer .invoice-footer__details{text-align:center;font-size:7pt}tpl-invoice-footer .invoice-footer__details .invoice-footer__line span:not(:first-of-type)::before{content:\"|\";margin:0.5em}tpl-invoice-footer .invoice-footer__details .invoice-footer__line:not(:first-of-type){margin-top:0.2em}";

const InvoiceFooterTpl = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.invoice = window.providedData || invoiceSamples['invoice-001'];
  }
  render() {
    const imagePath = '/assets/icon/leya.png';
    const url = window.location.href.toString().includes('/dev/') ? `/dev${imagePath}` : `/print${imagePath}`;
    const sender = this.invoice.sender;
    const bank = sender.bankDetails;
    return h(Host, null, h("div", { class: "invoice-footer__img" }, h("leya-print-image-fetch", { imgSrc: url })), h("div", { class: "invoice-footer__pageNumber" }, "Page ", h("span", { class: "pageNumber" }, "99"), "/", h("span", { class: "totalPages" }, "99")), h("div", { class: "invoice-footer__details" }, h("div", { class: "invoice-footer__line invoice-footer__name" }, sender.address.company), [
      line(['Phone', sender.phone], ['Mail', sender.email], ['Web', sender.web]),
    ], h("div", { class: "invoice-footer__line invoice-footer__line__bank-details" }, "Bank details: ", bank.name, " IBAN: ", bank.iban, " BIC: ", bank.bic, h("br", null))));
  }
};
function line(...items) {
  return h("div", { class: "invoice-footer__line" }, items
    .filter(([_, value]) => !!value)
    .map(([label, value]) => h("span", null, h("label", null, label, ":"), " ", value)));
}
InvoiceFooterTpl.style = _2InvoiceFooterCss;

export { InvoiceFooterTpl as tpl_invoice_footer };
