import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.scss',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: '/dev', // required for pre rendering
    },
  ],
  plugins: [
    sass({
      includePaths: [
        'src/theme',
        '../common/src/theme',
      ],
    }),
  ],
  devServer: {
    basePath: '/dev/',
  },
};
