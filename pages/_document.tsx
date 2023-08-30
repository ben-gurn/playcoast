import Document, { Html, Head, Main, NextScript } from 'next/document';
declare var dataLayer: any[];



class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YFTGC0T4Z9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-YFTGC0T4Z9');
</script>
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
