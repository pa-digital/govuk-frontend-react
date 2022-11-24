// eslint-disable-next-line @typescript-eslint/no-var-requires
const scss = require('rollup-plugin-scss');
const copy = require('rollup-plugin-copy');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      copy({
        targets: [{ src: 'node_modules/govuk-frontend/govuk/assets/fonts/*', dest: 'dist/assets/fonts' }],
        verbose: true,
        hook: 'writeBundle'
      })
    );
    config.plugins.push(
      scss({
        output: './dist/govuk-frontend-react.css',
        outputStyle: 'compressed',
      })
    );
    return config;
  },
};
