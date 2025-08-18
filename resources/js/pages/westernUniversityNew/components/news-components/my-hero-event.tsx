import MySlide from "./my-slide";

const ActivityItem = ({ id, title, description, short_description, imageUrl, reverse = false }) => {
    return (
        <div id={id} className="relative overflow-hidden border-b border-gray-200 py-12">
            <div className={`flex flex-col-reverse lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} mx-auto max-w-screen-2xl items-center`}>
                {/* Text Content */}
                <div className="w-full px-6 sm:px-10 lg:px-20 lg:w-1/2">
                    <div className="prose dark:prose-invert ck-content lg:text-left">
                        <h2 className="my-6 pt-5 text-2xl font-bold text-red-700 font-noto-san-extra-light sm:text-3xl lg:my-0 lg:mb-4">{title}</h2>
                        <div
                            className="prose text-base leading-relaxed whitespace-pre-line text-gray-700 sm:text-lg"
                            dangerouslySetInnerHTML={{ __html: description ?? '' }}
                        ></div>
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

const MyHeroEvent = ({ children }: { children?: any }) => {
    return (
        <section>
            {children?.map((activity, index) => (
                <ActivityItem
                    id={`event_id${activity?.id}`} 
                    key={activity?.id}
                    title={activity?.title}
                    short_description={activity?.short_description}
                    description={activity?.long_description}
                    imageUrl={activity?.images}
                    reverse={index % 2 === 1} // Alternates layout
                />
            ))}
        </section>
    );
};

export default MyHeroEvent;
