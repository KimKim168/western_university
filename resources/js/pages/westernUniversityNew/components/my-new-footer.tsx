import { Separator } from '@/components/ui/separator';
import { Link, usePage } from '@inertiajs/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { MySocial } from './my-social';
import MyQuickLink from './my-quick-link';

const MyNewFooter = () => {
    const { application_info } = usePage().props;
    return (
        <div className="flex flex-col border-t border-gray-200">
            <div className="bg-muted grow" />
            <footer>
                <div className="mx-auto max-w-screen-xl">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 px-6 py-12 xl:grid-cols-4 xl:px-0">
                        <Link href="/" className="col-span-full w-32 text-center xl:col-span-1">
                            {/* Logo */}
                            <img src={`/assets/images/application_info/${application_info?.image}`} />
                        </Link>
                        <div>
                            <h6 className="font-noto-san-extra-light text-xl font-semibold">Contact</h6>
                            <div className="relative mt-2 mb-4 h-[1px] w-full bg-gray-200">
                                <div className="absolute top-0 left-0 h-full bg-red-700" style={{ width: '20%' }} />
                            </div>

                            <ul className="mt-4 space-y-4">
                                <li className="flex items-center gap-2">
                                    <div>
                                        <Phone className="mr-2 inline-block h-5 w-5 text-icon-primary" />
                                    </div>
                                    <div>
                                        <Link href="#" className="text-muted-foreground hover:text-foreground dark:text-white">
                                            {application_info?.phone}
                                        </Link>
                                    </div>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div>
                                        <MapPin className="mr-2 inline-block h-5 w-5 text-icon-primary" />
                                    </div>
                                    <div>
                                        <a href={application_info?.google_map} className="text-muted-foreground hover:text-foreground dark:text-white">
                                            {application_info?.address}
                                        </a>
                                    </div>
                                </li>
                                <li className="flex items-center gap-2">
                                    <div>
                                        <Mail className="mr-2 inline-block h-5 w-5 text-icon-primary" />
                                    </div>
                                    <div>
                                        <p className="hover:text-foreground text-red-800 dark:text-white">{application_info?.email}</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h6 className="font-noto-san-extra-light text-xl font-semibold">Quick Links</h6>
                            <div className="relative mt-2 mb-4 h-[1px] w-full bg-gray-200">
                                <div className="absolute top-0 left-0 h-full bg-red-700" style={{ width: '20%' }} />
                            </div>
                            {/* <p className="text-muted-foreground hover:text-foreground mt-4">
                                Enter your email address to get the latest University news, special events and student activities delivered right to
                                your inbox.
                            </p> */}
                            <div className="mt-4 flex items-center gap-5">
                                <MyQuickLink/>
                            </div>
                        </div>
                        {/* Subscribe Newsletter */}
                        <div>
                            <h6 className="font-noto-san-extra-light text-xl font-semibold">Social Media</h6>
                            <div className="relative mt-2 mb-4 h-[1px] w-full bg-gray-200">
                                <div className="absolute top-0 left-0 h-full bg-red-700" style={{ width: '20%' }} />
                            </div>
                            {/* <p className="text-muted-foreground hover:text-foreground mt-4">
                                Enter your email address to get the latest University news, special events and student activities delivered right to
                                your inbox.
                            </p> */}
                            <div className="mt-4 flex items-center gap-5">
                                <MySocial />
                            </div>
                        </div>
                    </div>
                    <Separator />
                </div>
            </footer>
            <div className="mx-auto max-w-screen-2xl"></div>
            <div className="flex flex-col-reverse items-center justify-between bg-blue-950 px-6 py-2 sm:flex-row lg:px-16">
                {/* Copyright */}
                <span className="text-white">{application_info?.copyright}</span>
            </div>
        </div>
    );
};

export default MyNewFooter;
