import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Slash } from 'lucide-react';
import MyNewLayout from '../layout/MyLayout';
import MyTeamStudent from '../components/news-components/my-team-student';
import MyCampuseTeam from '../components/news-components/my-campuse-team';
import MyHeroStudentCouncil from '../components/news-components/my-hero-student-council';
import MyCouncilAction from '../components/news-components/my-council-action';
import { usePage } from '@inertiajs/react';
import useTranslation from '@/hooks/use-translation';

const StudentCouncil = () => {
    const { studentCouncil, locale } = usePage().props;
    const { t } = useTranslation();
    const fontClass = locale === 'kh' ? 'font-kantumruy' : 'font-noto-san-extra-light';
    return (
        <MyNewLayout>
            <div className={`relative flex h-full w-full flex-col items-center justify-center bg-red-900 p-10 text-white md:p-20 dark:bg-red-950 ${fontClass}`}>
                <p className="text-3xl text-white md:text-5xl">{studentCouncil?.title}</p>
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
                                {studentCouncil?.title}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            <MyHeroStudentCouncil studentCouncil={studentCouncil}/>
            <MyTeamStudent/>
            <MyCampuseTeam/>
            <MyCouncilAction/>
        </MyNewLayout>
    );
};

export default StudentCouncil;
