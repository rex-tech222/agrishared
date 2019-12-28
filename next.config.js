
const withSCSS = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withPLUGINs = require("next-compose-plugins");


// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}


//module.exports = withCSS(withSCSS());

module.exports = withPLUGINs([[withCSS], [withSCSS]]);
