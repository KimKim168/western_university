import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Slash } from 'lucide-react';
import MyNewLayout from '../layout/MyLayout';
import MyHeroEvent from '../components/news-components/my-hero-event';
import MyBlogImage from '../components/news-components/my-blog-image';
import { usePage } from '@inertiajs/react';
import useTranslation from '@/hooks/use-translation';

const ActivitiesAndEvents = () => {
    const { activitiesAndEvents, locale } = usePage().props;
    const { t } = useTranslation();
    const fontClass = locale === 'kh' ? 'font-kantumruy' : 'font-noto-san-extra-light';
    return (
        <MyNewLayout>
            <div className={`relative flex h-full w-full flex-col items-center justify-center bg-red-900 p-10 text-white md:p-20 dark:bg-red-950 ${fontClass}`}>
                <p className="text-3xl text-white md:text-5xl">{activitiesAndEvents?.title}</p>
                <div>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="text-white">
                                    Home
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <Slash className="text-gray-400" />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#/history_and_values" className="text-gray-400">
                                    {activitiesAndEvents?.title}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            <MyHeroEvent children ={activitiesAndEvents?.children}/>
            {/* <MyBlogImage/> */}
        </MyNewLayout>
    );
};

export default ActivitiesAndEvents;
