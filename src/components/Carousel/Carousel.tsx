import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-coverflow";

import styles from './carousel.module.css';
import { EffectCoverflow } from 'swiper';
import { DOMElement, useEffect, useRef, useState } from 'react';

const Carousel = () => {
	const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 0"];
	const swiperRef = useRef<SwiperRef | any>(null);
	const [ height, setHeight ] = useState(0);

	useEffect(() => {
		if (!swiperRef.current) {
			return;
		}

		setHeight(swiperRef.current.offsetHeight);
	}, []);

	return (
		<div style={{ "minHeight": `${height}px` }}>
			<Swiper
				ref={swiperRef}
				slidesPerView={5}
				spaceBetween={50}
				className={styles.swiper}
				coverflowEffect={{
					rotate: 20,
					stretch: 0,
					depth: -100,
					modifier: 2,
				}}
				effect="coverflow"
				modules={[EffectCoverflow]}
			>
				{
					items.map(i => 
					<SwiperSlide 
						className={styles.item}
						key={i}
					>
						<div className={styles.content}>
							{i}
						</div>
					</SwiperSlide>)
				}
			</Swiper>
		</div>
	)
}

export default Carousel;