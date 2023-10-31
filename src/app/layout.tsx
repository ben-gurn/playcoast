// layout.tsx
'use client'

import Head from 'next/head';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Play Coast - Gold Coast Theme Parks</title>
        <meta name="description" content="The best place to find tickets for theme parks on the Gold Coast"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
