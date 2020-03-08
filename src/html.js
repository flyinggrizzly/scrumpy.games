import React from "react"
import PropTypes from "prop-types"

const Favicon = () => (
  <>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=LbzPd6zxKq" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=LbzPd6zxKq" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=LbzPd6zxKq" />
    <link rel="manifest" href="/site.webmanifest?v=LbzPd6zxKq" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg?v=LbzPd6zxKq" color="#5bbad5" />
    <link rel="shortcut icon" href="/favicon.ico?v=LbzPd6zxKq" />
    <meta name="msapplication-TileColor" content="#00aba9" />
    <meta name="theme-color" content="#ffffff" />
  </>
)

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
        <Favicon />
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
