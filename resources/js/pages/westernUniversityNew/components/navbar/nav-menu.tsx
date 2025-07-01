import { cn } from '@/lib/utils';
import { Link } from '@inertiajs/react';
import { useState } from 'react';
import MySearch from '../my-search';
import { HoveredLink, Menu, MenuItem } from '../ui/navbar-menu';

export function MyNavMenu({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <>
            <div className={cn('mx-auto w-full', className)}>
                <div className="flex h-full items-center justify-end">
                    <div className="hidden xl:block">
                        <div className="flex items-center gap-2">
                            <Menu setActive={setActive}>
                                <Link href={`/`}>
                                    <MenuItem setActive={setActive} active={active} item="Home" subRoutes={['/']}></MenuItem>
                                </Link>
                                <Link href={`#`}>
                                    <MenuItem
                                        setActive={setActive}
                                        active={active}
                                        item="About"
                                        subRoutes={['/history_and_values', '/school_facilities', '/campuses']}
                                    >
                                        <div className="flex flex-col space-y-4 text-sm">
                                            <HoveredLink href="/history_and_values">History and Values</HoveredLink>
                                            <HoveredLink href="/school_facilities">School Facilities</HoveredLink>
                                            <HoveredLink href="/campuses">Campuses</HoveredLink>
                                        </div>
                                    </MenuItem>
                                </Link>
                                <Link href={`#`}>
                                    <MenuItem
                                        setActive={setActive}
                                        active={active}
                                        item="Academics"
                                        subRoutes={['/curriculum', '/programs', '/class_schedules_and_subjects', '/school_calendar']}
                                    >
                                        <div className="flex flex-col space-y-4 text-sm">
                                            <HoveredLink href="/curriculum">Curriculum</HoveredLink>
                                            <HoveredLink href="/programs">Programs</HoveredLink>
                                            <HoveredLink href="/class_schedules_and_subjects">Class Schedules and Subjects </HoveredLink>
                                            <HoveredLink href="/school_calendar">School Calendar</HoveredLink>
                                        </div>
                                    </MenuItem>
                                </Link>

                                <Link href={`/admissions`}>
                                    <MenuItem setActive={setActive} active={active} item="Admissions" subRoutes={['/admissions']}></MenuItem>
                                </Link>

                                <Link href={`#`}>
                                    <MenuItem
                                        setActive={setActive}
                                        active={active}
                                        item="School Life"
                                        subRoutes={[
                                            '/student_services',
                                            '/activities_and_events',
                                            '/extracurricular_activities',
                                            '/outreach_programs',
                                            '/student_council',
                                            '/news',
                                        ]}
                                    >
                                        <div className="flex flex-col space-y-4 text-sm">
                                            <HoveredLink href="/student_services">Student Services</HoveredLink>
                                            <HoveredLink href="/activities_and_events">Activities And Events</HoveredLink>
                                            <HoveredLink href="/extracurricular_activities">Extracurricular Activities</HoveredLink>
                                            <HoveredLink href="/outreach_programs">Outreach Programs</HoveredLink>
                                            <HoveredLink href="/student_council">Student Council</HoveredLink>
                                            <HoveredLink href="/news">News And Blogs</HoveredLink>
                                        </div>
                                    </MenuItem>
                                </Link>
                                <Link href={`/contact`}>
                                    <MenuItem setActive={setActive} active={active} item="Contact" subRoutes={['/contact']}></MenuItem>
                                </Link>
                            </Menu>
                            <div>
                                <MySearch />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
