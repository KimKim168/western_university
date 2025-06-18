import { Slash } from 'lucide-react';
import MyNewLayout from '../layout/MyLayout'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import MySchoolFacility from '../components/about-components/my-school-facility';
import { usePage } from '@inertiajs/react';


const SchoolFacilities = () => {
    const { schoolFacilities } = usePage().props;
  return (
   <MyNewLayout>
         <div className="relative flex h-full w-full flex-col items-center justify-center bg-red-900 p-10 dark:bg-red-950 text-white md:p-20">
                <p className="font-noto-san-extra-light text-3xl md:text-6xl">{schoolFacilities?.title}</p>
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
                                <BreadcrumbLink href="#" className="text-gray-400">
                                    {schoolFacilities?.title}
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            <MySchoolFacility schoolFacilitiesChildren={schoolFacilities?.children} />
   </MyNewLayout>
  )
}

export default SchoolFacilities
