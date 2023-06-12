import './globals.css';
import Head from 'next/head';

export const metadata = {
  title: 'Play Coast',
  description: 'Get Cheap Theme Park Tickets for the Gold Coast',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>{children}</body>
    </html>
  );
}
