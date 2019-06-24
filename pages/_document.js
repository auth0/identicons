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
          <meta name="description" content="Get royalty-free identity icons. A visual language for identity - open source project from Auth0’s Guillermo Mesyngier and Vittorio Bertocci. For use in presentations, specifications and documentation.">
          <link rel="apple-touch-icon" sizes="180x180" href="./static/favicons/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="32x32" href="./static/favicons/favicon-32x32.png"></link>
          <link rel="icon" type="image/png" sizes="16x16" href="./static/favicons/favicon-16x16.png"></link>
          <link rel="mask-icon" href="./static/favicons/safari-pinned-tab.svg" color="#000000"></link>
          <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/core/2.0.5/core.min.css" />
          <link rel="stylesheet" href="https://cdn.auth0.com/styleguide/components/2.0.0/components.min.css" />
          <link rel="stylesheet" type="text/css" charSet="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" /> 
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <script type="application/ld+json">
            {
                "@context": "http://schema.org",
                "@type": "WebPage",
                "name": "Identicons - Royalty-free, free Identity icons from Auth0",
                "description": "Get royalty-free identity icons. A visual language for identity - open source project from Auth0’s Guillermo Mesyngier and Vittorio Bertocci. For use in presentations, specifications and documentation.",
                "url": "https://identicons.dev/",
                "image": "https://identicons.dev/static/favicons/apple-touch-icon.png",
                "publisher": {
                    "@type": "Organization",
                    "name": "Auth0",
                    "legalName": "Auth0 Inc.",
                    "url": "https://auth0.com/",
                    "logo": "https://cdn.auth0.com/website/assets/pages/press/img/resources/auth0-logo-main-6001cece68.svg",
                    "foundingDate": "2013",
                    "sameAs": [
                        "https://twitter.com/auth0",
                        "https://www.facebook.com/getauth0/",
                        "https://www.linkedin.com/company/auth0"
                    ]
                }
              }
          </script>
          <meta name="google-site-verification" content="IXxB6hv45d2ZH_S9bHfRP5M45c9_K9287ia6saqJXvw" />
        </Head>
        <body className="identicons-page">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
