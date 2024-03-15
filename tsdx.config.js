const scss = require('rollup-plugin-scss');
const copy = require('rollup-plugin-copy');
const fs = require('fs');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
      scss({
        output: 'dist/tmp-govuk-frontend-react.css',
        fileName: 'tmp-govuk-frontend-react.css',
        outputStyle: 'compressed',
      })
    );

    config.plugins.push(
      copy({
        targets: [
          {
            src: 'node_modules/govuk-frontend/dist/govuk/assets/fonts',
            dest: 'dist/assets',
          },
          {
            src: 'node_modules/govuk-frontend/dist/govuk/assets/images',
            dest: 'dist/assets',
          },
        ],
        verbose: true,
        copySync: true,
      })
    );

    setTimeout(() => {
      if (fs.existsSync('dist/tmp-govuk-frontend-react.css')) {
        const initialGovFrontendCss = fs.readFileSync(
          'node_modules/govuk-frontend/dist/govuk/govuk-frontend.min.css',
          'utf-8'
        );

        let modifiedGovFrontendCss = initialGovFrontendCss.replace(
          /\/assets/g,
          './assets'
        );

        modifiedGovFrontendCss = modifiedGovFrontendCss.replace(
          '/*# sourceMappingURL=govuk-frontend.min.css.map */',
          ''
        );

        const combinedCss =
          modifiedGovFrontendCss +
          fs.readFileSync('dist/tmp-govuk-frontend-react.css', 'utf-8');

        fs.writeFileSync('dist/govuk-frontend-react.css', combinedCss);

        fs.unlinkSync('dist/tmp-govuk-frontend-react.css');
      }
    }, 20000);

    return config;
  },
};
