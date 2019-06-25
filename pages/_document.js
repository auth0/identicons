import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <title>Identicons - Royalty-free, free Identity icons from Auth0</title>
          <link rel="apple-touch-icon" sizes="180x180" href="./static/favicons/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="./static/favicons/favicon-32x32.png"></link>
          <link rel="icon" type="image/png" sizes="16x16" href="./static/favicons/favicon-16x16.png"></link>
          <link rel="mask-icon" href="./static/favicons/safari-pinned-tab.svg" color="#000000"></link>
          <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/core/2.0.5/core.min.css" />
          <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/components/2.0.0/components.min.css" />
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
        </Head>
        <body className="identicons-page">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
