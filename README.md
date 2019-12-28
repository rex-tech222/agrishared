
Install it and run:

```bash
npm install
npm run dev
# or
yarn
yarn dev
```

Deploy it to the cloud with [now](https://zeit.co/now) ([download](https://zeit.co/download))

```bash
now
```
  

# Template Has

## with-env-from-next-config-js
As the build process (`next build`) is proceeding, `next.config.js` is processed and passed in as a parameter is the variable `phase`.
`phase` can have the values `PHASE_DEVELOPMENT_SERVER` or `PHASE_PRODUCTION_BUILD` (as defined in `next\constants`). Based on the variable
`phase`, different environmental variables can be set for use in your react app. That is, if you reference `process.env.RESTURL_SPEAKERS`
in your react app, whatever is returned by `next.config.js` as the variable `env`, (or `env.RESTURL_SPEAKERS`) will be accessible in your
app as `process.env.RESTURL_SPEAKERS`.
- When your run `next dev` or `npm run dev`, you will always use the environmental variables assigned when `isDev` is true in the example.
- When you run `next build` then `next start`, assuming you set externally the environmental variable STAGING to anything but 1, you will get
 the results assuming `isProd` is true.
- When your run `next build` or `npm run build` in production, if the environmental variable `STAGING` is set to `1`, `isStaging` will 
be set and you will get those values returned.

## next-page-transitions
The [`next-page-transitions`](https://github.com/illinois/next-page-transitions) library is a component that sits at the
app level and allows you to animate page changes. It works especially nicely with apps with a shared layout element,
like a navbar. This component will ensure that only one page is ever mounted at a time, and manages the timing of 
animations for you. This component works similarly to [`react-transition-group`](https://github.com/reactjs/react-transition-group)
in that it applies classes to a container around your page; it's up to you to write the CSS transitions or animations to make things pretty!

## React Server Side rendering
React Server Side rendering is very costly and takes a lot of server's CPU power for that. One of the best solutions for this problem is cache already rendered pages.
That's what this example demonstrate.
This app uses Next's [custom server and routing](https://github.com/zeit/next.js#custom-server-and-routing) mode. 
It also uses [express](https://expressjs.com/) to handle routing and page serving.
Alternatively, see [the example using React ESI](../with-react-esi/).

## with-react-useragent
This add user-agent awarness to your next.js app and set it up for server side 
rendering. It will enable you to directly detect the device from the server side.
You can then decide what to render depending on the device. For example:
- Smaller image for phones
- Dedicated download button fos iOS devices.
This uses the `pages/_app.js` file to automatically injectuser-agent detection in all your pages.

# next-seo
Integrate [next-seo](https://github.com/garmeeh/next-seo), a plugin to help manage your SEO in Next.js

#  API
## Prefetching
- The  page uses the imperative (i.e.: "manual") prefetching API to prefetch on hover
- It will prefetch all the pages in the background with prefetch except the page without prefetch
e.g
```   <Link prefetch href='/'>
          <a>Home</a>
        </Link>
    
         <Link href='/about'>
              <a
                onMouseEnter={() => {
                  Router.prefetch('/about')
                  console.log('prefetching /about!')
                }}
              >
                About
              </a>
            </Link>
        
          <Link href='/contact'>
              <a>
                Contact (<small>NO-PREFETCHING</small>)
              </a>
          </Link>
```
