import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Slash } from 'lucide-react';
import MyNewLayout from '../layout/MyLayout';
import MyTeamStudent from '../components/news-components/my-team-student';
import MyCampuseTeam from '../components/news-components/my-campuse-team';
import MyHeroStudentCouncil from '../components/news-components/my-hero-student-council';
import MyCouncilAction from '../components/news-components/my-council-action';
import { usePage } from '@inertiajs/react';

const StudentCouncil = () => {
    const { studentCouncil } = usePage().props;    
    return (
        <MyNewLayout>
            <div className="relative flex h-full w-full flex-col items-center justify-center bg-red-900 dark:bg-red-950 p-10 text-white md:p-20">
                <p className="font-noto-san-extra-light text-3xl md:text-6xl">{studentCouncil?.title}</p>
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
