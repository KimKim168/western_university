import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Slash } from 'lucide-react';
import MyNewLayout from '../layout/MyLayout';
import MyOutreachProgram from '../components/news-components/my-outreach-program';
import { usePage } from '@inertiajs/react';
import useTranslation from '@/hooks/use-translation';
import { DemoImage } from '../components/demo-image';

const OutreachPrograms = () => {
    const { outreachPrograms, locale } = usePage().props;
    const { t } = useTranslation();
    const fontClass = locale === 'kh' ? 'font-kantumruy' : 'font-noto-san-extra-light';
    return (
        <MyNewLayout>
            <div className={`relative flex h-full w-full flex-col items-center justify-center bg-red-900 p-10 text-white md:p-20 dark:bg-red-950 ${fontClass}`}>
                <p className="text-3xl text-white md:text-5xl mb-2">{locale === 'kh' ? (outreachPrograms?.title_kh ?? outreachPrograms?.title) : outreachPrograms?.title}</p>
                <div>
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="text-white">
                                    {t('Home')}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <Slash className="text-gray-400" />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#/outreach_programs" className="text-gray-400">
                                    {locale === 'kh' ? (outreachPrograms?.title_kh ?? outreachPrograms?.title) : outreachPrograms?.title}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            <MyOutreachProgram outreachPrograms={outreachPrograms}/>
            <div className='mb-12'><DemoImage imageSrc={`/assets/images/pages`} images={outreachPrograms?.images}/></div>
        </MyNewLayout>
    );
};

export default OutreachPrograms;
