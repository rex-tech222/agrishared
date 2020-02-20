const withOffline = require('next-offline');
//const withSCSS = require("@zeit/next-sass");
//const withCSS = require("@zeit/next-css");
const withPLUGINs = require("next-compose-plugins");

const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})

const prod = process.env.NODE_ENV === 'production'

const nextConfig = {
    env: {
        TEST: process.env.TEST,
        HOST: prod ? 'http://localhost:1993' : 'http://localhost:1993'
    },
    distDir: 'build',
};
//module.exports = withCSS(withSCSS());

module.exports = withPLUGINs([
  //  [withCSS],
  //  [withSCSS],
    withBundleAnalyzer,
    withOffline,
    nextConfig
]);

