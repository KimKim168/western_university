import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Link } from '@inertiajs/react';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

const MySlide = ({ className, images = [] }: { className?: string; images?: any }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      {images.length > 0 && (
        <Carousel
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false,
            }),
          ]}
          opts={{ align: 'start', loop: true }}
          setApi={setApi}
          className="m-0"
        >
          <CarouselContent>
            {images.map((image) => (
              <CarouselItem key={image.id} className="pl-0">
                <Link href={image.link || '#'}>
                  <div className="relative group">
                    {/* Image */}
                    <img
                      className="w-full aspect-[16/9] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      src={`/assets/images/pages/${image?.image}`}
                      alt={image.name}
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500"></div>
                  </div>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Pagination Dots */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <div
                key={index}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  current === index + 1
                    ? 'bg-white shadow-md scale-110'
                    : 'border border-white opacity-60 hover:opacity-100'
                }`}
              ></div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/70 transition-all duration-300 shadow-lg" />
          <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/70 transition-all duration-300 shadow-lg" />
        </Carousel>
      )}
    </div>
  );
};

export default MySlide;
