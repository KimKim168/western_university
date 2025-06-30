import { usePage } from '@inertiajs/react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState } from 'react';

export function MyNewSlide() {
    const { banners } = usePage().props;

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        [Autoplay({ delay: 4000, stopOnInteraction: false })]
    );

    useEffect(() => {
        if (!emblaApi) return;
        const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
        emblaApi.on('select', onSelect);
        onSelect();
    }, [emblaApi]);

    return (
        <div className="relative mx-auto w-full">
            {/* Carousel */}
            <div className="overflow-hidden" ref={emblaRef}>
                <div className="flex">
                    {banners?.map((item) => (
                        <div key={item.id} className="flex-[0_0_100%]">
                            <div className="relative aspect-[21/7] w-full">
                                <img
                                    src={`/assets/images/banners/${item.image}`}
                                    alt="Banner"
                                    className="h-full w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                                <div className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 px-4 text-white sm:px-10 md:px-16 lg:px-20">
                                    <div className="max-w-full p-5 px-1 text-center sm:max-w-screen-xl sm:text-left md:max-w-[50%]">
                                        <h3 className="text-base font-bold sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl font-noto-san-extra-light">
                                            {item.title}
                                        </h3>
                                        <div className="mt-4 flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-4">
                                            <a
                                                href='/admissions'
                                                className="relative bg-[#2f2cf6] text-white font-medium md:text-[17px] px-4 py-[0.35em] pl-5 h-[2.5em] md:h-[2.8em] rounded-[0.9em] flex items-center overflow-hidden cursor-pointer shadow-[inset_0_0_1.6em_-0.6em_#714da6] group"
                                            >
                                                <span className="mr-10">{item.short_description}</span>
                                                <div className="absolute right-[0.3em] bg-white h-[2.2em] w-[2.2em] rounded-[0.7em] flex items-center justify-center transition-all duration-300 group-hover:w-[calc(100%-0.6em)] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] active:scale-95">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        width="24"
                                                        height="24"
                                                        className="w-[1.1em] transition-transform duration-300 text-[#7b52b9] group-hover:translate-x-[0.1em]"
                                                    >
                                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                                        <path
                                                            fill="currentColor"
                                                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                                                        ></path>
                                                    </svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Dot Navigation */}
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 transform space-x-2 sm:bottom-10 sm:space-x-4 xl:bottom-10">
                {banners?.map((_, index) => (
                    <button
                        key={index}
                        className={`h-2 w-2 rounded-full transition sm:h-3 sm:w-3 ${
                            index === selectedIndex ? 'bg-[#ffff]' : 'border-white border'
                        }`}
                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    );
}
