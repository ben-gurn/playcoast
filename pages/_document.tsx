import Document, { Html, Head, Main, NextScript } from 'next/document';

declare var dataLayer: any[];

class MyDocument extends Document {
  render() {
    const gtagScriptContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-YFTGC0T4Z9');
    `;

    return (
      <Html lang="en">
        <Head>
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-YFTGC0T4Z9"></script>
          <script dangerouslySetInnerHTML={{ __html: gtagScriptContent }}></script>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
