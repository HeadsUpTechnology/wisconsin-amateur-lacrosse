import { Inter } from '@next/font/google';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import Search from '@/components/Search';
import styles from '@/styles/index.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
		<main id="content">
			<div className={styles.header}>
				<Header />
				<Search />
			</div>
			<h1 className="header">Discover Lacrosse in Wisconsin</h1>
			<Carousel />
		</main>
  )
}
