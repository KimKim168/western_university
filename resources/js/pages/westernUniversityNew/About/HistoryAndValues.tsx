import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { usePage } from '@inertiajs/react';
import { Slash } from 'lucide-react';
import MyHeroBottomHistory from '../components/about-components/my-hero-bottom-history';
import MyHeroHistory from '../components/about-components/my-hero-history';
import MyNewLayout from '../layout/MyLayout';
import MyMission from '../components/about-components/my-mission';
import MyValuesWiscare from './my_values_wiscare';

const HistoryAndValues = () => {
    const { hestoryTitle } = usePage().props;
    return (
        <MyNewLayout>
            <div className="relative flex h-full w-full flex-col items-center justify-center bg-red-900 p-10 text-white md:p-20">
                <p className="font-noto-san-extra-light text-3xl md:text-6xl">{hestoryTitle?.title}</p>
                <div className="mt-10">
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
                                <BreadcrumbLink href="#" className="text-white">
                                    About
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator>
                                <Slash className="text-gray-400" />
                            </BreadcrumbSeparator>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="#/history_and_values" className="text-gray-400">
                                    {hestoryTitle?.title}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            <MyHeroHistory/>
            {/*Start Vision */}
            {/* <MyBlogImage /> */}
            <MyHeroBottomHistory />
            {/*Start Vision */}
            {/* Start mission */}
            <MyMission/>
            {/* End mission */}
            {/* Start values wiscare */}
            <MyValuesWiscare/>
            {/* End values wiscare */}
        </MyNewLayout>
    );
};

export default HistoryAndValues;
