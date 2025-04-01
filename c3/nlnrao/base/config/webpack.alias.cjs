const Path = require('path');

function webpackAliasInfo() {
 return {
    '@Assets': Path.resolve(__dirname, 'public/assets'),
    // Main Module
    '@MainComponents': Path.resolve(__dirname, 'src/main/components'),
    '@MainConfig': Path.resolve(__dirname, 'src/main/config'),
    '@MainPages': Path.resolve(__dirname, 'src/main/pages'),
    '@MainTemplates': Path.resolve(__dirname, 'src/main/templates'),
    '@MainStaticData': Path.resolve(__dirname, 'src/main/static-data'),

    // Showcase Module
    '@ShowcaseComponents': Path.resolve(__dirname, 'src/showcase/components'),
    '@ShowcaseConfig': Path.resolve(__dirname, 'src/showcase/config'),
    '@ShowcasePages': Path.resolve(__dirname, 'src/showcase/pages'),
    '@ShowcaseTemplates': Path.resolve(__dirname, 'src/showcase/templates'),
    '@ShowcaseStaticData': Path.resolve(__dirname, 'src/showcase/static-data'),
    // Needed when library is linked via `npm link` to app
    /** This is implemented when the React Hooks are not working under the library */
    react: Path.resolve("./node_modules/react"),
    // filename:'showcase/main.js',
    // publicPath: '/'
 };
}

exports.webpackAliasInfo = webpackAliasInfo;