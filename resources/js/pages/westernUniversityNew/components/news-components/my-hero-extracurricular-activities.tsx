import { usePage } from "@inertiajs/react";
import MySlide from "./my-slide";

const ActivityItem = ({ title, description, imageUrl, reverse = false }) => {
    const { locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-kantumruy' : 'font-noto-san-extra-light';
    return (
        <div className="relative overflow-hidden py-12  border-b border-gray-200">
            <div className={`flex flex-col-reverse lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} items-center max-w-screen-2xl mx-auto`}>
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2 px-6 sm:px-10 md:px-16 lg:px-12 xl:px-20">
                    <div className="lg:text-left prose dark:prose-invert ck-content">
                        <h2 className={`my-6 pt-5 text-2xl font-bold text-red-700 sm:text-3xl lg:my-0 lg:mb-4 ${fontClass}`}>
                            {title}
                        </h2>
                        <div className="text-gray-700 prose whitespace-pre-line text-base sm:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: description ?? '' }}>
                        </div>
                    </div>
                </div>

                {/* Image Content */}
                <div className="w-full lg:w-1/2">
                {/* {imageUrl?.map((item)=>(
                    <div className="group h-64 w-full overflow-hidden sm:h-80 md:h-96 lg:h-[28rem]">
                        <img
                            src={`/assets/images/pages/${imageUrl?.image}`}
                            alt={title || 'Activity image'}
                            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                    </div>
                ))} */}
                    <MySlide
                        className="h-64 sm:h-80 md:h-96 lg:h-[28rem] w-full overflow-hidden"
                        images={imageUrl?.map((item) => ({
                            id: item?.id,
                            image: item?.image,
                            name: title,
                            link: item?.link || null,
                        }))}
                    />
                </div>
            </div>
        </div>
    );
};

const MyHeroEvent = ({children}:{children?:any}) => {
    const { locale } = usePage().props;
    return (
        <section id="about">
            {children?.map((activity, index) => (
                <ActivityItem
                    key={activity?.id}
                    title={locale === 'kh' ? (activity?.title_kh ?? activity.title) : activity.title}
                    description={locale === 'kh' ? (activity?.long_description_kh ?? activity?.long_description) : activity?.long_description}
                    imageUrl={activity?.images}
                    reverse={index % 2 === 1} // Alternates layout
                />
            ))}
        </section>
    );
};

export default MyHeroEvent;
