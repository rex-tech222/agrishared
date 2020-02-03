import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <html lang='en'>
        <Head>
          <meta name='viewport' content='initial-scale=1.0, width=device-width'  />


          <link rel="icon" href="/static/img/favicon.png" type="image/x-icon"/>

          <link rel="stylesheet" href="/static/bootstrap-4.1.1/css/bootstrap.min-v4.3.1.css" type="text/css"/>
          <link rel="stylesheet" href="/static/plugins/dzsparallaxer/dzsparallaxer.css"/>
          <link rel="stylesheet" href="/static/plugins/dzsparallaxer/dzsscroller/scroller.css"/>
          <link rel="stylesheet" href="/static/plugins/dzsparallaxer/advancedscroller/plugin.css"/>
          <link rel="stylesheet" href="/static/nprogress.css"/>

          {/* Icons */}
          <link rel="stylesheet" href="/static/plugins/icon-line/css/simple-line-icons.css"/>
          <link rel="stylesheet" href="/static/plugins/icon-etlinefont/style.css"/>
          <link rel="stylesheet" href="/static/plugins/icon-line-pro/style.css"/>
          <link rel="stylesheet" href="/static/plugins/icon-hs/style.css"/>
          <link rel="stylesheet" href="/static/fontawesome/css/font-awesome.min.css" type="text/css" />

          <link rel="stylesheet" href="/static/components.css" type="text/css"/>
          <link rel="stylesheet" href="/static/globals.css" type="text/css"/>
         
          <link rel="stylesheet" href="/static/animate.min.css" type="text/css" />
         {/* <link rel="stylesheet" href="/static/slick.min.css" type="text/css" />*/}
          <link rel="stylesheet" href="/static/bg-files.css" type="text/css" />
         {/* <link rel="stylesheet" href="/static/styles.css" type="text/css" />*/}


          <script src="/static/jquery/jquery.min-3.2.1.js"></script>
          <script src="/static/bootstrap-4.1.1/js/popper.min.js"></script>
          <script src="/static/bootstrap-4.1.1/js/bootstrap.min.js"></script>

          <script src="/static/plugins/dzsparallaxer/dzsparallaxer.js"></script>
          <script src="/static/plugins/dzsparallaxer/dzsscroller/scroller.js"></script>
          <script src="/static/plugins/dzsparallaxer/advancedscroller/plugin.js"></script>
        </Head>
        <body className="">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
