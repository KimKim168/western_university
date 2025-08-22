import { ImageSwiper } from './ui/image-swiper';

export function DemoImage({ images, imageSrc }) {
    return (
        <div className="mx-auto max-w-screen-2xl px-4 xl:px-16">
            <ImageSwiper imageSrc={imageSrc} images={images} />
        </div>
    );
}
