import { Link, usePage } from '@inertiajs/react';
import MyNewLayout from '../layout/MyLayout';

export default function show() {
    const { showData, relatedPosts, locale } = usePage<any>().props;
    const fontClass = locale === 'kh' ? 'font-kantumruy' : 'font-noto-san-extra-light';
    return (
        <MyNewLayout>
            <section className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-20">
                {/* Main Layout */}
                <div className="flex flex-col gap-12 lg:flex-row">
                    {/* Content Area */}
                    <div className="w-full lg:w-3/4">
                        <h1 className={`mb-6 text-3xl font-bold tracking-tight text-red-700 sm:text-4xl dark:text-white ${fontClass}`}>
                            {locale === 'kh' ? (showData?.title_kh ?? showData?.title) : showData?.title}
                        </h1>
                        <div
                            className="prose dark:prose-invert ck-content max-w-none"
                            dangerouslySetInnerHTML={{
                                __html: locale === 'kh' ? (showData?.long_description_kh ?? showData?.long_description) : showData?.long_description,
                            }}
                        />
                    </div>

                    {/* Sidebar */}
                    <div className="sticky top-8 w-full lg:w-1/4">
                        <h2 className="mb-6 border-l-4 border-red-700 pl-2 text-2xl font-semibold text-gray-800 sm:text-3xl dark:text-gray-200">
                            Related {showData?.category_code}
                        </h2>
                        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1">
                            {relatedPosts?.map((item: any, index: any) => (
                                <Link
                                    href={`/news/${item.id}`}
                                    key={index}
                                    className="group block h-full transition-shadow hover:rounded-xl hover:shadow-md"
                                >
                                    <div className="flex h-full flex-col gap-3 overflow-hidden bg-white shadow-sm transition hover:bg-gray-50 lg:flex-row lg:rounded-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                                        {/* Thumbnail */}
                                        <div className="relative aspect-video w-full flex-shrink-0 overflow-hidden bg-gray-100 lg:w-28 xl:aspect-square dark:bg-gray-700">
                                            <img
                                                src={`/assets/images/posts/${item.images?.[0]?.image ?? 'placeholder.jpg'}`}
                                                alt={item.title}
                                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                                                loading="lazy"
                                                decoding="async"
                                            />
                                        </div>
                                        {/* Description */}
                                        <div className="flex flex-col gap-2 p-4 lg:px-0 lg:py-4">
                                            <h3 className={`line-clamp-2 text-base font-bold text-red-700 dark:text-white ${fontClass}`}>
                                                {locale === 'kh' ? (item?.title_kh ?? item?.title) : item?.title}
                                            </h3>
                                            <div className="prose dark:prose-invert line-clamp-2 max-w-none text-gray-700 dark:text-gray-300">
                                                {locale === 'kh' ? (item?.short_description_kh ?? item?.short_description) : item?.short_description}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </MyNewLayout>
    );
}
