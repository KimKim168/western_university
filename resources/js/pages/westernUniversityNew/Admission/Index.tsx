import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Slash } from 'lucide-react';
import MyNewLayout from '../layout/MyLayout';
import MyHeroAdmissions from '../components/my-hero-admissions';
import { usePage } from '@inertiajs/react';
import useTranslation from '@/hooks/use-translation';

const Index = () => {
    const { admissions, locale } = usePage().props;
    const { t } = useTranslation();
    const fontClass = locale === 'kh' ? 'font-kantumruy mb-2' : 'font-noto-san-extra-light';
    return (
        <MyNewLayout>
            <div className={`relative flex h-full w-full flex-col items-center justify-center bg-red-900 p-10 text-white md:p-20 dark:bg-red-950 ${fontClass}`}>
                <p className={`text-3xl text-white md:text-5xl ${fontClass}`}>{locale === 'kh' ? (admissions?.title_kh ?? admissions?.title) : admissions?.title}</p>
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
                                <BreadcrumbLink href="#/history_and_values" className="text-gray-400">
                                    {locale === 'kh' ? (admissions?.title_kh ?? admissions?.title) : admissions?.title}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            <MyHeroAdmissions locale={locale} admissions={admissions} />
        </MyNewLayout>
    );
};

export default Index;