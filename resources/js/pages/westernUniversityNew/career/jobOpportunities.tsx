import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';
import { Slash } from 'lucide-react';
import CurrentOpportunities from '../components/current-opportunities';
import MyNewLayout from '../layout/MyLayout';

const JobOpportunities = () => {
    const { locale } = usePage().props;
    const { t } = useTranslation();
    const fontClass = locale === 'kh' ? 'font-kantumruy' : 'font-noto-san-extra-light';
    return (
        <MyNewLayout>
            <div className="relative flex h-full w-full flex-col items-center justify-center bg-red-900 p-10 text-white md:p-20 dark:bg-red-950">
                <p className={`mb-2 text-3xl md:text-6xl ${fontClass}`}>{locale === 'kh' ? 'ឱកាសការងារ' : 'Job Opportunities'}</p>
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
                                <BreadcrumbLink href="#" className="text-gray-400">
                                    {locale === 'kh' ? 'ឱកាសការងារ' : 'Job Opportunities'}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            <CurrentOpportunities />
        </MyNewLayout>
    );
};

export default JobOpportunities;
