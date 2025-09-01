import { Button } from '@/components/ui/button';
import useTranslation from '@/hooks/use-translation';
import { Link, usePage } from '@inertiajs/react';
import { ArrowUpRight } from 'lucide-react';

const MyOutreachProgram = ({ outreachPrograms }: { outreachPrograms: any }) => {
    const { locale } = usePage().props;
    const { t } = useTranslation();
    const fontClass = locale === 'kh' ? 'font-kantumruy' : '';
    return (
        <div className="mx-auto flex max-w-screen-xl flex-col justify-center px-6 py-8 sm:pt-12 xl:px-0">
            <div>
                <h2 className="mt-3 text-center text-4xl font-bold tracking-tight sm:text-5xl">{locale === 'kh' ? (outreachPrograms?.title_kh ?? outreachPrograms?.title) : outreachPrograms?.title}</h2>
                <div
                    className="text-foreground prose mt-6 max-w-none text-start whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html:locale === 'kh' ? (outreachPrograms?.long_description_kh ?? outreachPrograms?.long_description) : outreachPrograms?.long_description }}
                />
            </div>
            {outreachPrograms?.children?.length > 0 ? (
                <div className="my-8 grid w-full grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-4">
                    {outreachPrograms?.children?.map((item) => (
                        <div key={item.id} className="transition-all duration-500 hover:scale-105">
                            <img
                                src={`/assets/images/pages/${item.images?.[0]?.image}`}
                                className="bg-secondary aspect-square w-full rounded-lg object-cover"
                                width={600}
                                height={600}
                            />
                            <h3 className="mt-4 line-clamp-2 text-lg font-semibold">{locale === 'kh' ? (item.title_kh ?? item.title) : item.title}</h3>
                            <div className="text-foreground prose dark:prose-invert mt-3 line-clamp-3" dangerouslySetInnerHTML={{ __html:locale === 'kh' ? (item.short_description_kh ?? item.short_description) : item.short_description }}></div>
                            <div className="mt-4 flex items-center gap-2.5">
                                <Button
                                    size="lg"
                                    className="rounded-md border-2 border-black bg-white p-4 text-base text-black shadow-lg transition-all duration-500 hover:bg-blue-900 hover:text-white"
                                >
                                    <Link href={`/outreach_programs/${item.id}`}>{t('Learn More')}</Link> <ArrowUpRight className="!h-5 !w-5" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div></div>
            )}
        </div>
    );
};

export default MyOutreachProgram;
