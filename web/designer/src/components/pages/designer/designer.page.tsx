import { Component, Fragment, h, Host, Listen, Prop, State, VNode } from '@stencil/core';
import { TemplateInfo } from '@leya-print/template-api';
import { templatePackageService } from '@leya-print/web-common';

@Component({
  tag: 'designer-page',
  styleUrl: 'designer.page.scss',
  shadow: true,
})
export class DesignerPage {
  @Prop() tplName = 'invoice';
  @Prop() tplPackage?: string;

  @State() reloading = false;
  @State() reloadingStage = false;

  sampleData?: any;

  private loader?: VNode;

  @Listen('designer-reload-preview')  
  reloadPreview() {        
    this.reloading = true;
    setTimeout(() => this.reloading = false, 10);
  }

  @Listen('designer-reload')
  reloadStage() {        
    this.reloadingStage = true;
    setTimeout(() => this.reloadingStage = false, 0);
  }

  async componentWillLoad() {
    try {
      const templateInfo: TemplateInfo = await templatePackageService.templateInfo(this.tplPackage, this.tplName);
      const sampleInfoData = Object.values(templateInfo.sampleData)[0];
      this.sampleData = sampleInfoData.data
    } catch (error) {
      console.log('error while mounting component', error);
    }
                
    await templatePackageService.defineCustomElements(this.tplPackage);
  }

  render() {
    return <Host>
      {this.loader}
      <designer-ui
        tplName={this.tplName}
        sampleData={this.sampleData}
      ></designer-ui>
      <designer-stage reloading={this.reloadingStage}>{ !this.reloading && <Fragment>
        <div slot="stage-header" innerHTML={`<tpl-${this.tplName}-header></tpl-${this.tplName}-header>`}></div>
        <div slot="stage-content" innerHTML={`<tpl-${this.tplName}-content></tpl-${this.tplName}-content>`}></div>
        <div slot="stage-footer" innerHTML={`<tpl-${this.tplName}-footer></tpl-${this.tplName}-footer>`}></div>
      </Fragment>}</designer-stage>
    </Host>;
  }
}
