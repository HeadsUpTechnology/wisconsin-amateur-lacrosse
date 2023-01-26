import { useEffect } from 'react';
import Link from 'next/link';

interface MenuProps {}

const Header = () => {
	useEffect(() => {
		const menuLinks = document.querySelectorAll('header>a');

		menuLinks.forEach(link => {
			if(link.href === window.location.href) {
				link.classList.add('active');
			}
		})
	}, []);

	return (
	<header>
		<Link href="/about/">About</Link>
		<Link href="/">Home</Link>
		<Link href="/share/">Share</Link>
	</header>
	);
}

export default Header;