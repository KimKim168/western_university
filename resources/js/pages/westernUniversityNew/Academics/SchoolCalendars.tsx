import React from 'react'
import MyNewLayout from '../layout/MyLayout'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Slash } from 'lucide-react';
import MyCalendar from '../components/academic-components/my-calendar';
import useTranslation from '@/hooks/use-translation';
import { usePage } from '@inertiajs/react';

const SchoolCalendars = () => {
    const { locale } = usePage().props;
    const { t } = useTranslation();
    const fontClass = locale === 'kh' ? 'font-kantumruy' : 'font-noto-san-extra-light';
    return (
        <MyNewLayout>
            <div className={`relative flex h-full w-full flex-col items-center justify-center bg-red-900 p-10 text-white md:p-20 dark:bg-red-950 ${fontClass}`}>
                <p className="text-3xl text-white md:text-5xl">School Calendar</p>
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
                                <BreadcrumbLink href="#/school_calendar" className="text-gray-400">
                                School Calendar
                                </BreadcrumbLink>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>
            </div>
            <MyCalendar/>
    </MyNewLayout>
  )
}

export default SchoolCalendars
