import { useState } from 'react';

export default function HomeImageSlider() {
  
  const [currentIndex, setCurrentIndex] = useState(0);

 
  const carouselItems = [
    { id: 1, imageUrl: '/slide1.jpeg', altText: 'Slide 1' },
    { id: 2, imageUrl: '/slide2.jpeg', altText: 'Slide 2' },
    { id: 3, imageUrl: '/slide3.jpeg', altText: 'Slide 3' },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length
    );
  };

  return (
   
    <div className="w-full h-screen relative">
     
      <div className="relative w-full h-full overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item) => (
            <div key={item.id} className="w-full h-full flex-shrink-0">
              <img
                src={item.imageUrl}
                alt={item.altText}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
}
