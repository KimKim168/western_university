'use client';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';
const MyMission = () => {
  const { mission } = usePage().props;
  console.log(mission)
  //  const images = [
  //   "/assets/demo-images/Homepage/03_welcome_to_western_1.jpg",
  //   "/assets/demo-images/Homepage/03_welcome_to_western_3.jpg",
  //   "/assets/demo-images/Homepage/03_welcome_to_western_2.jpg",
  // ];
   const [currentIndex, setCurrentIndex] = useState(null);
  
    const handleClose = () => setCurrentIndex(null);
    const showPrev = () =>
      setCurrentIndex((prev) => (prev === 0 ? mission?.images?.length - 1 : prev - 1));
    const showNext = () =>
      setCurrentIndex((prev) => (prev === mission?.images?.length - 1 ? 0 : prev + 1));
  
  return (
     <>
     <div className="max-w-screen-xl mx-auto px-6 xl:px-0">
      <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mission?.images?.map((img, index) => (
          <div
            key={index}
            className="w-full aspect-video overflow-hidden rounded-lg shadow-md hover:scale-105 transition cursor-pointer"
            onClick={() => setCurrentIndex(index)}
          >
            <img className="w-full h-full object-cover" src={`/assets/images/pages/${img.image}`} alt={`Image ${index}`} />
          </div>
        ))}
      </div>

      {currentIndex !== null && (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center z-50">
          {/* Overlay to close */}
          <div className="absolute inset-0 backdrop-blur-sm" onClick={handleClose} />

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-6 text-white text-4xl z-50 hover:text-red-400 transition"
          >
            ✕
          </button>

          {/* Prev button */}
          <button
            onClick={showPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-5xl z-50 hover:text-blue-400 transition"
          >
            ❮
          </button>

          {/* Main image */}
          <div className="relative z-40 max-w-4xl w-full px-4">
            <img
             src={`/assets/images/pages/${mission?.images[currentIndex]?.image}`}
              alt={`Popup ${currentIndex}`}
              className="w-full h-auto rounded-xl shadow-xl border-4 border-white"
            />
          </div>

          {/* Next button */}
          <button
            onClick={showNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-5xl z-50 hover:text-blue-400 transition"
          >
            ❯
          </button>

          {/* Thumbnails */}
          <div className="mt-6 flex gap-4 overflow-x-auto px-6 pb-4 z-50">
            {mission?.images?.map((thumb, index) => (
              <img
                key={index}
                src={`/assets/images/pages/${thumb.image}`}
                onClick={() => setCurrentIndex(index)}
                className={`h-20 w-32 object-cover rounded-md cursor-pointer border-2 ${
                  index === currentIndex
                    ? 'border-blue-400'
                    : 'border-transparent hover:border-white'
                } transition`}
                alt={`Thumb ${index}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
    <div className="mb-12 flex items-center justify-center">
      <div className="max-w-screen-xl w-full mx-auto flex gap-12 px-6 py-12">
        <div>
          <h1 className="max-w-[17ch] text-primary prose text-3xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2]">
          {mission?.title}
          </h1>
          <div className="my-5 border-[1.5px] border-primary w-15 "/>
          <div className="mt-6 prose prose-p:dark:text-white text-base leading-relaxed whitespace-pre-line dark:text-white" dangerouslySetInnerHTML={{__html:mission?.long_description}}/>
        </div>
      </div>
    </div>
     </>
  )
}

export default MyMission;
