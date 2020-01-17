
const withSCSS = require("@zeit/next-sass");
const withCSS = require("@zeit/next-css");
const withPLUGINs = require("next-compose-plugins");
const withOffline = require('next-offline');

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.css'] = (file) => {}
}


//module.exports = withCSS(withSCSS());




const nextConfig = {

}


//module.exports = withPLUGINs([ [withCSS], [withSCSS], withOffline(nextConfig) ]);
module.exports = withPLUGINs([ [withCSS], [withSCSS] ]);
