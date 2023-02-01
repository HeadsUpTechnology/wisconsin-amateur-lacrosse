import { Share } from '@/types/Share';
import Image from 'next/image';
import React, { useState, useEffect } from "react";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
	const [currentPage, setCurrentPage] = useState(0);
  const [shares, setShares] = useState<Share[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/shares/0")
        .then((response) => response.json())
        .then((newShares: Share[]) => {
          setShares(newShares);
          setLoading(false);
        });
  }, []);

  const handleNext = () => {
    if (currentIndex === shares.length - 1) {
      setLoading(true);
			fetch("/api/shares/" + (currentPage + 1))
        .then((response) => response.json())
        .then((newShares: Share[]) => {
          setShares(shares => [ ...shares, ...newShares]);
          setLoading(false);
					setCurrentPage(currentPage => currentPage+=1);
        });
    }

    setCurrentIndex((currentIndex + 1) % shares.length);
  };

  const handlePrev = () => {
		if (currentIndex === 0) return;
		
	  setCurrentIndex(currentIndex => Math.max(--currentIndex, 0));
  };

  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Image src={shares[currentIndex]?.thumb} alt={`Image ${currentIndex + 1}`} width={350} height={400} />
      )}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Carousel;
