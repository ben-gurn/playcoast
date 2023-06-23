// _app.tsx
import { AppProps } from 'next/app'
import RootLayout from '../src/app/layout'
import '../src/app/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const layoutProps = (Component as any).layoutProps || {}
  return <RootLayout {...layoutProps}><Component {...pageProps} /></RootLayout>
}

export default MyApp
