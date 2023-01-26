import Footer from '@/components/Footer'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
				<script src="https://kit.fontawesome.com/1c5c37a225.js" crossOrigin="anonymous" async></script>
				<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Ubuntu&display=optional"></link>
			</Head>
      <body>
        <Main />
				<Footer />
        <NextScript />
      </body>
    </Html>
  )
}
