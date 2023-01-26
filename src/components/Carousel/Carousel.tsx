import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-coverflow";

import styles from './carousel.module.css';
import { EffectCoverflow } from 'swiper';

const Carousel = () => {
	const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6", "Item 7", "Item 8", "Item 9", "Item 0"];

	return (
		<Swiper
			slidesPerView={5}
			spaceBetween={50}
			className={styles.swiper}
			coverflowEffect={{
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
			}}
			modules={[EffectCoverflow]}
		>
			{
				items.map(i => 
				<SwiperSlide 
					className={styles.item}
					key={i}
				>
					{i}
				</SwiperSlide>)
			}
		</Swiper>
	)
}

export default Carousel;