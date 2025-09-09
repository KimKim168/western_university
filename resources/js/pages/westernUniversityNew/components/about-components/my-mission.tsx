'use client';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';
const MyMission = () => {
    const { mission, locale } = usePage<any>().props;
    const fontClass = locale === 'kh' ? 'font-kantumruy' : 'font-noto-san-extra-light';

    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClose = () => setCurrentIndex(null);
    const showPrev = () => setCurrentIndex((prev) => (prev === 0 ? mission?.images?.length - 1 : prev - 1));
    const showNext = () => setCurrentIndex((prev) => (prev === mission?.images?.length - 1 ? 0 : prev + 1));

    return (
        <>
            <div className="mx-auto max-w-screen-xl px-6 xl:px-0">
                <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {mission?.images?.map((img, index) => (
                        <div
                            key={index}
                            className="aspect-video w-full cursor-pointer overflow-hidden rounded-lg shadow-md transition hover:scale-105"
                            onClick={() => setCurrentIndex(index)}
                        >
                            <img className="h-full w-full object-cover" src={`/assets/images/pages/${img.image}`} alt={`Image ${index}`} />
                        </div>
                    ))}
                </div>

                {currentIndex !== null && (
                    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90">
                        {/* Overlay to close */}
                        <div className="absolute inset-0 backdrop-blur-sm" onClick={handleClose} />

                        {/* Close button */}
                        <button onClick={handleClose} className="absolute top-5 right-6 z-50 text-4xl text-white transition hover:text-red-400">
                            ✕
                        </button>

                        {/* Prev button */}
                        <button
                            onClick={showPrev}
                            className="absolute top-1/2 left-4 z-50 -translate-y-1/2 text-5xl text-white transition hover:text-blue-400"
                        >
                            ❮
                        </button>

                        {/* Main image */}
                        <div className="relative z-40 w-full max-w-4xl px-4">
                            <img
                                src={`/assets/images/pages/${mission?.images[currentIndex]?.image}`}
                                alt={`Popup ${currentIndex}`}
                                className="h-auto w-full rounded-xl border-4 border-white shadow-xl"
                            />
                        </div>

                        {/* Next button */}
                        <button
                            onClick={showNext}
                            className="absolute top-1/2 right-4 z-50 -translate-y-1/2 text-5xl text-white transition hover:text-blue-400"
                        >
                            ❯
                        </button>

                        {/* Thumbnails */}
                        <div className="z-50 mt-6 flex gap-4 overflow-x-auto px-6 pb-4">
                            {mission?.images?.map((thumb, index) => (
                                <img
                                    key={index}
                                    src={`/assets/images/pages/${thumb.image}`}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-20 w-32 cursor-pointer rounded-md border-2 object-cover ${
                                        index === currentIndex ? 'border-blue-400' : 'border-transparent hover:border-white'
                                    } transition`}
                                    alt={`Thumb ${index}`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <div className="mb-12 flex items-center justify-center">
                <div className="mx-auto flex w-full max-w-screen-xl gap-12 px-6 py-12 xl:px-0">
                    <div>
                        <h1 className={`text-primary prose max-w-[17ch] text-3xl !leading-[1.2] font-bold md:text-4xl ${fontClass}`}>
                            {locale === 'kh' ? (mission?.title_kh ?? mission?.title) : mission?.title}
                        </h1>
                        <div className="border-primary my-4 w-15 border-[1.5px]" />
                        {/* {mission?.short_description ? (
                            <div
                                className="prose-p:dark:text-white prose max-w-[70ch] text-base whitespace-pre-line"
                                dangerouslySetInnerHTML={{
                                    __html:
                                        locale === 'kh' ? (mission?.short_description_kh ?? mission?.short_description) : mission?.short_description,
                                }}
                            />
                        ): null} */}

                        <div
                            className="prose-p:dark:text-white prose max-w-[70ch] text-base whitespace-pre-line"
                            dangerouslySetInnerHTML={{
                                __html: locale === 'kh' ? (mission?.long_description_kh ?? mission?.long_description) : mission?.long_description,
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MyMission;
