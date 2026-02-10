import { SlideIndicator } from '@widgets/postDetail/carousel/slidelndicator';
import { useState, Children, type ReactNode, useRef } from 'react';

interface CarouselProps {
  children: ReactNode;
}

export function Carousel({ children }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = Children.count(children);
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = touchStartX.current - e.changedTouches[0].clientX;

    // 👉 임계값 (너무 예민하지 않게)
    if (diff > 50 && currentSlide < totalSlides) {
      setCurrentSlide((s) => s + 1);
    }

    if (diff < -50 && currentSlide > 1) {
      setCurrentSlide((s) => s - 1);
    }

    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full touch-pan-y"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300"
          style={{
            transform: `translateX(-${(currentSlide - 1) * 100}%)`,
          }}
        >
          {Children.map(children, (child) => (
            <div className="w-full h-[20rem] border flex-shrink-0">{child}</div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-[0.5rem] right-[0.5rem]">
        <SlideIndicator currentSlide={currentSlide} totalSlides={totalSlides} />
      </div>
    </div>
  );
}
