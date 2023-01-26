import { Inter } from '@next/font/google';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
		<main id="content">
			<Header />
			<h1 className="header">Discover Lacrosse in Wisconsin</h1>
			<Carousel />
		</main>
  )
}
