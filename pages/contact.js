import React, { useEffect } from 'react';
import Head from 'next/head';

const ContactFormWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Play Coast - Contact </title>
      </Head>
    <div
      data-tf-widget="tyyl9wta"
      data-tf-opacity="100"
      data-tf-iframe-props="title=Play Coast"
      data-tf-transitive-search-params
      data-tf-medium="snippet"
      style={{ width: '100%', height: '500px' }}
    ></div>
    </div>
    
  );
};

export default ContactFormWidget;
