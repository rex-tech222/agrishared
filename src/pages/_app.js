import App from 'next/app'
import React from 'react'
import NProgress from 'nprogress'
import Router from 'next/router'

import '../public/static/plugins/slick.min.css'
import '../public/static/plugins/antd.css'
import '../public/static/dashboard.css'
import '../public/static/styles.css'
import '../public/static/landing-page.css'
import '../public/static/b2c.css'

NProgress.configure({ showSpinner: false });
Router.events.on('routeChangeStart', url => {
    console.log(`Loading: ${url}`)

    NProgress.start()
})
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())


class MyApp extends App {


    static async getInitialProps ({ Component, ctx }) {

        const host = process.env.HOST;



        return {
            // Call page-level getInitialProps
            ...(Component.getInitialProps
                ? await Component.getInitialProps(ctx)
                : {}),

            // Some custom thing for all pages
            pathname: ctx.pathname,
            query: ctx.query,
           // cookies:  ctx.req.cookies,
            // headers: headers,
            //store: ctx.store,
            isServer: ctx.isServer,
           // host: host,
            //userAgent:    navigator.userAgent,
        }

    }



    render () {
        const { Component, pageProps } = this.props;
        let myPageProps = [];
        myPageProps = this.props;
        return (

                <Component {...myPageProps} />

        )
    }
}

export default  MyApp
