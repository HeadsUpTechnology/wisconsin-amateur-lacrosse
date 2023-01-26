import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
			<main id="content">
				<Header />
				<h1 className="header">Wisconsin Amateur Lacrosse</h1>
				<p>
				Lacrosse is an exciting and rewarding sport that provides a unique opportunity for children of all ages to learn, grow, and have fun. It is a fast-paced, physical sport that encourages teamwork, sportsmanship, and respect for the game. With a focus on safety and skill development, lacrosse provides an environment where everyone can thrive and enjoy the sport. From teaching an understanding of the game to building character, lacrosse has something to offer everyone. Join in the fun and become part of the lacrosse family today!
				</p>
      </main>
    </>
  )
}
