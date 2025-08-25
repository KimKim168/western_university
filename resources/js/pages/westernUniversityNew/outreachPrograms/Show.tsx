import { usePage } from '@inertiajs/react';
import MyNewLayout from '../layout/MyLayout';

export default function show() {
    const { showData, locale } = usePage<any>().props;
    const fontClass = locale == 'kh' ? 'font-katumruy' : 'font-noto-san-extra-light';
    return (
        <MyNewLayout>
            <section className="mx-auto max-w-screen-2xl px-4 py-10 sm:px-6 lg:px-20">
                {/* Main Layout */}
                <div className="flex flex-col gap-12 lg:flex-row">
                    {/* Content Area */}
                    <article className="w-full">
                        <h1 className={`mb-6 text-3xl font-bold tracking-tight text-red-700 sm:text-4xl dark:text-white ${fontClass}`}>
                            {locale == 'kh' ? (showData?.title_kh ?? showData?.title) : showData?.title}
                        </h1>
                        <div
                            className={`prose prose-sm dark:prose-invert max-w-none ${fontClass}`}
                            dangerouslySetInnerHTML={{
                                __html: locale == 'kh' ? (showData?.long_description_kh ?? showData?.long_description) : showData?.long_description,
                            }}
                        />
                    </article>
                </div>
            </section>
        </MyNewLayout>
    );
}
