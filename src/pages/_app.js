import App from 'next/app'
import React from 'react'



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
