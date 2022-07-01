import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
            as="script"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/prismjs@0.0.1/themes/prism-okaidia.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
