import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Slash } from 'lucide-react';
import MyContent from '../components/academic-components/my-content';
import MyNewLayout from '../layout/MyLayout';
import { usePage } from '@inertiajs/react';
import useTranslation from '@/hooks/use-translation';

const Programs = () => {
    const { programs, locale } = usePage<any>().props;
    const { t } = useTranslation();
    const fontClass = locale === 'kh' ? 'font-kantumruy' : 'font-noto-san-extra-light';
    return (
        <MyNewLayout>
            <div className={`relative flex h-full w-full flex-col items-center justify-center bg-red-900 p-10 text-white md:p-20 dark:bg-red-950 ${fontClass}`}>
                <p className={`text-3xl text-white md:text-5xl mb-2 ${fontClass}`}>{locale === 'kh' ? (programs?.title_kh ?? programs?.title) : programs?.title}</p>
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
                                    {locale === 'kh' ? (programs?.title_kh ?? programs?.title) : programs?.title}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            <MyContent children={programs?.children} />
        </MyNewLayout>
    );
};

export default Programs;
