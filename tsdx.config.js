/* eslint-disable @typescript-eslint/no-var-requires */
const scss = require('rollup-plugin-scss');
const copy = require('rollup-plugin-copy');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      scss({
        output: 'dist/govuk-frontend-react.css',
        fileName: 'govuk-frontend-react.css',
        outputStyle: 'compressed',
      })
    );
    config.plugins.push(
      copy({
        targets: [
          {
            src: 'node_modules/govuk-frontend/govuk/assets/fonts',
            dest: 'dist/assets',
          },
          {
            src: 'node_modules/govuk-frontend/govuk/assets/images',
            dest: 'dist/assets',
          },
        ],
        verbose: true,
        copySync: true,
      })
    );
    return config;
  },
};
