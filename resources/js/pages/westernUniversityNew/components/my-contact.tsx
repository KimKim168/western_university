import { Separator } from '@/components/ui/separator';
import { usePage } from '@inertiajs/react';
import { CalendarClockIcon, Mail, MapPin, Phone } from 'lucide-react';
import FormMessage from './form-message';
import { MySocial } from './my-social';

const MyContact = () => {
    const { application_info, contact, locale } = usePage().props;
    const fontClass = locale === 'kh' ? 'font-kantumruy' : '';

    return (
        <div className="my-12 flex items-center justify-center">
            <div className="mx-auto max-w-screen-2xl overflow-hidden px-4 sm:px-6 lg:px-16">
                <div className="grid grid-cols-2 gap-12 lg:grid-cols-12">
                    {/* Left - Form & Intro */}
                    <div className="col-span-2 lg:col-span-9">
                        <div
                            className={`text-3xl font-bold tracking-tight md:text-4xl ${fontClass}`}
                            dangerouslySetInnerHTML={{
                                __html: locale === 'kh' ? (contact?.short_description_kh ?? contact?.short_description) : contact?.short_description,
                            }}
                        ></div>

                        <div className="border-primary my-4 w-14 border-[1.5px]" />

                        <div
                            className={`text-base sm:text-lg ${fontClass}`}
                            dangerouslySetInnerHTML={{
                                __html: locale === 'kh' ? (contact?.long_description_kh ?? contact?.long_description) : contact?.long_description,
                            }}
                        ></div>
                        <FormMessage />
                    </div>

                    {/* Right - Contact Info */}
                    <div className="col-span-2 flex flex-col gap-10 lg:col-span-3">
                        {/* Socials */}
                        <div>
                            <h3 className={`text-xl font-bold tracking-tight ${fontClass}`}>{locale === 'kh' ? 'បណ្តាញសង្គម' : 'Socials'}</h3>
                            <Separator className="mt-2 mb-4" />
                            <div className="flex gap-3">
                                <MySocial />
                            </div>
                        </div>
                        {/* Phone */}
                        <div>
                            <h3 className={`text-xl font-bold tracking-tight ${fontClass}`}>{locale === 'kh' ? 'លេខទូរស័ព្ទ' : 'Phone'}</h3>
                            <Separator className="mt-2 mb-4" />
                            <div className="text-primary flex items-center gap-2 text-base">
                                <Phone className="w-5" /> {application_info?.phone}
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <h3 className={`text-xl font-bold tracking-tight ${fontClass}`}>{locale === 'kh' ? 'អ៊ីមែល' : 'Email'}</h3>
                            <Separator className="mt-2 mb-4" />
                            <div className="text-primary flex items-center gap-2 text-base">
                                <Mail className="w-5" /> {application_info?.email}
                            </div>
                        </div>

                        {/* Address */}
                        <div>
                            <h3 className={`text-xl font-bold tracking-tight ${fontClass}`}>{locale === 'kh' ? 'អាស័យដ្ឋាន' : 'Address'}</h3>
                            <Separator className="mt-2 mb-4" />
                            <div className="text-primary flex items-center gap-2 text-base">
                                <MapPin className="w-12" />
                                <span>{locale === 'kh' ? (application_info?.address_kh ?? application_info?.address) : application_info?.address}</span>
                            </div>
                        </div>
                        {/* Opening Hours */}
                        <div>
                            <h3 className={`text-xl font-bold tracking-tight ${fontClass}`}>{locale === 'kh' ? 'ម៉ោងបើក' : 'Opening Hours'}</h3>
                            <Separator className="mt-2 mb-4" />
                            <div className="text-primary flex items-center gap-2 text-base">
                                <CalendarClockIcon className="w-5" />
                                <span>{locale === 'kh' ? (application_info?.working_hours_kh ?? application_info?.working_hours) : application_info?.working_hours}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyContact;
