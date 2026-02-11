interface SlideIndicatorProps {
  currentSlide: number;
  totalSlides: number;
}

export function SlideIndicator({
  currentSlide,
  totalSlides,
}: SlideIndicatorProps) {
  return (
    <div className=" flex gap-[0.5rem] items-center justify-center typo-caption h-[2.4rem] w-[4.6rem] bg-gray-300 rounded-[16px] text-white">
      <span>{currentSlide}</span> / <span>{totalSlides}</span>
    </div>
  );
}
