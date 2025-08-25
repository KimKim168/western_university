import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Link } from '@inertiajs/react';
import Autoplay from 'embla-carousel-autoplay';
import React from 'react';

const MySlide = ({ className, images = [] }: { className?: string; images?: any }) => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);
    return (
        <div className={className}>
            {images.length > 0 && (
                <Carousel
                    plugins={[
                        Autoplay({
                            delay: 3000,
                        }),
                    ]}
                    opts={{ align: 'start', loop: false }}
                    setApi={setApi}
                    className="bg-true-primary m-0"
                >
                    <CarouselContent>
                        {images.map((image:any) => (
                            <CarouselItem key={image.id} className="rounded-none pl-0">
                                <Link href={image.link || '#'}>
                                    <img
                                        className={`aspect-[16/9] w-full object-cover transition-all duration-500 ${
                                            image.link ? 'border-primary hover:scale-95 hover:border-2' : ''
                                        }`}
                                        src={`/assets/images/pages/${image.image}`}
                                        alt={image.name}
                                    />
                                </Link>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center justify-center gap-2 py-2">
                        {Array.from({ length: count }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)} 
                                className={`size-3 rounded-full transition-colors ${current === index + 1 ? 'bg-white' : 'border border-white'}`}
                            />
                        ))}
                    </div>
                </Carousel>
            )}
        </div>
    );
};

export default MySlide;
