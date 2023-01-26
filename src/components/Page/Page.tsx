import Footer from '@/components/Footer';

type PageProps = {
	children: React.ReactNode
}

const Page: React.FC<PageProps> = ({ children }) => {
	return (
		<main>
			{children}
			<Footer />
		</main>
	)
}

export default Page;