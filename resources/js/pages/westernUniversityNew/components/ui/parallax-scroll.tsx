"use client";

import { cn } from "@/lib/utils";

type ImageItem = {
  image: string;
  title: string;
  long_description: string;
  images: { image: string }[];
  type?: string;
  link?: string;
  content?: string;
};

type ParallaxScrollProps = {
  images: ImageItem[];
  className?: string;
};

export const ParallaxScroll = ({ images, className }: ParallaxScrollProps) => {
  const renderImageCard = (item: ImageItem, idx: number) => {
    const imgSrc = `/assets/images/pages/${item.images[0]?.image}`;
    const href = item.type ? item.link : item.content;

    return (
      <div key={idx} className="w-full group">
        <a href={href} className="block h-full">
          <div className="flex flex-col h-full rounded-2xl overflow-hidden bg-white shadow-md transform transition duration-300 ease-in-out group-hover:scale-[1.02] group-hover:shadow-xl">
            <div className="overflow-hidden">
              <img
                src={imgSrc}
                alt={item.title}
                className="h-64 w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col flex-1 p-5 text-gray-800">
              <h3 className="text-lg font-bold mb-2">{item.title}</h3>
              <p
                className="prose prose-base whitespace-pre-line text-base text-gray-600 line-clamp-[10]"
                dangerouslySetInnerHTML={{ __html: item.long_description }}
              />
            </div>
          </div>
        </a>
      </div>
    );
  };

  return (
    <div className={cn("w-full", className)}>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 max-w-screen-2xl mx-auto px-6 xl:px-16 pt-12 pb-20">
        {images.map((item, idx) => renderImageCard(item, idx))}
      </div>
    </div>
  );
};
