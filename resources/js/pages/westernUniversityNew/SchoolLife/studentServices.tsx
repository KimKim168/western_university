import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Slash } from 'lucide-react';
import MyContent from '../components/academic-components/my-content';
import MyNewLayout from '../layout/MyLayout';
import { usePage } from '@inertiajs/react';
import MyNoData from '@/components/my-no-data';
import useTranslation from '@/hooks/use-translation';

const StudentServices = () => {

    const { studentServices, locale } = usePage().props;
    const { t } = useTranslation();
    const fontClass = locale === 'kh' ? 'font-kantumruy ' : 'font-noto-san-extra-light';
    return (
        <MyNewLayout>
            <div className={`relative flex h-full w-full flex-col items-center justify-center bg-red-900 p-10 text-white md:p-20 dark:bg-red-950`}>
                <p className={`text-3xl text-white md:text-5xl ${fontClass}`}>
                    {locale === 'kh' ? (studentServices?.title_kh ?? studentServices?.title) : studentServices?.title} 
                </p>
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
                                <BreadcrumbLink href="#" className="text-gray-400">
                                   {locale === 'kh' ? (studentServices?.title_kh ?? studentServices?.title) : studentServices?.title} 
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            {studentServices?.children?.length === 0 ? (
                <div className='my-12'><MyNoData/></div>
            ) :
            (
             <MyContent children={studentServices?.children} />
            )
            }
        </MyNewLayout>
    );
};

export default StudentServices;
