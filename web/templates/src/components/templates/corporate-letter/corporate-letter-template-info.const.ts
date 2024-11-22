import { TemplateInfo } from '@leya-print/template-api';
import { CorporateLetter } from './corporate-letter-model';
import sampleData from './corporate-letter.json';

export const corporateLetterTemplateInfo: TemplateInfo<CorporateLetter> = {
  ident: 'corporate-letter',
  title: 'Corporate Letter',
  description: 'Corporate Letter with custom markdown content about the template packages feature of the Leya Print Platform',
  components: {
    header: 'tpl-corporate-letter-header',
    content: 'tpl-corporate-letter-content',
    footer: 'tpl-corporate-letter-footer',
  },
  sampleData: {
    'simple': {
      title: 'Corporate Letter for Leya Print Platform',
      description: 'A simple Corporate Letter',
      data: sampleData,
    },
  },
};
