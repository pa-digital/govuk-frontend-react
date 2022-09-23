// eslint-disable-next-line @typescript-eslint/no-var-requires
const scss = require('rollup-plugin-scss');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      scss({
        output: './dist/govuk-frontend-react.css',
        outputStyle: 'compressed',
      })
    );
    return config;
  },
};
