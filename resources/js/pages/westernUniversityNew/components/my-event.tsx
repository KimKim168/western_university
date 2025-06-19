import { Link, usePage } from '@inertiajs/react';

const MyEvent = () => {
    const { activitiesAndEvents } = usePage().props;

    return (
        <div className="mx-auto max-w-screen-2xl px-6 lg:px-20 py-16 text-center border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900 transition-colors duration-300 sm:px-16">
            <h2 className="text-primary text-3xl font-bold dark:text-white sm:text-4xl">Events</h2>
            <div className="bg-true-primary mx-auto mt-5 h-1 w-16 dark:bg-white"></div>

            <div className="container mx-auto py-12">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
                    {activitiesAndEvents?.children?.map((item) => (
                        <div
                            key={item.id}
                            className="group relative overflow-hidden bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-700 transition-colors duration-300"
                        >
                            {/* Image with Hover Effect */}
                            <div className="relative">
                                <img
                                    className="aspect-[9/10] w-full object-cover"
                                    src={`/assets/images/pages/${item?.images?.[0]?.image}`}
                                    alt="Event Image"
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center bg-blue-950/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                    <Link
                                        href={`/activities_and_events#event_id${item.id}`}
                                        className="rounded-lg border border-white px-4 py-2 font-semibold text-white"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>

                            {/* Event Details */}
                            <div className="p-4">
                                <h2 className="font-noto-san-extra-light mb-2 line-clamp-2 text-start text-base text-red-700 dark:text-primary">
                                    {item?.title}
                                </h2>
                                <div
                                    className="flex items-start prose prose-p:line-clamp-2 text-sm text-gray-600 dark:text-gray-300"
                                    dangerouslySetInnerHTML={{ __html: item?.short_description }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Link
                href="/activities_and_events"
                className="mt-6 inline-flex items-center rounded-md bg-[#e31c24] px-6 py-3 font-semibold text-white shadow-md transition hover:bg-blue-950"
            >
                View All Events
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
            </Link>
        </div>
    );
};

export default MyEvent;
