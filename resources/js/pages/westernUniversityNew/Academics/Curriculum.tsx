import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { usePage } from '@inertiajs/react';
import { Slash } from 'lucide-react';
import MySchoolCurriculum from '../components/academic-components/my-school-curriculum';
import MyNewLayout from '../layout/MyLayout';
const Curriculum = () => {
    const { curriculum } = usePage().props;
    return (
        <MyNewLayout>
            <div className="relative flex h-full w-full flex-col items-center justify-center bg-red-900 dark:bg-red-950 p-10 text-white md:p-20">
                <p className="font-noto-san-extra-light text-3xl md:text-6xl">{curriculum?.title}</p>
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
                                    {curriculum?.title}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            <MySchoolCurriculum long_description={curriculum?.long_description} />
        </MyNewLayout>
    );
};

export default Curriculum;
