import { Link, usePage } from '@inertiajs/react';

const MyNewMiddleSection = () => {
    const { outreachPrograms } = usePage().props;
    return (
        <div className="bg-blue-950">
            <div className="mx-auto grid max-w-screen-2xl items-center lg:grid-cols-2">
                <div className="h-full w-full">
                    <img src={`/assets/images/pages/${outreachPrograms?.images?.[0]?.image}`}  className="h-full w-full object-cover" />
                </div>

               
                <div className="h-full w-full px-4 py-12 text-white sm:px-10 md:p-24">
                    <h2 className="text-4xl font-bold">{outreachPrograms?.title}</h2>
                    <div className="my-5 h-1 w-16 bg-white"></div>
                    <div className="prose text-gray-300 line-clamp-2" dangerouslySetInnerHTML={{__html:outreachPrograms?.long_description}}>
                    </div>
                     {
                    outreachPrograms?.children?.map((item)=>(
                         <Link href={`/outreach_programs/${item.id}`}>
                        <div className="mt-6 flex overflow-hidden bg-white text-gray-800 shadow-md">
                            <img src={`/assets/images/pages/${item?.images?.[0]?.image}`} alt="Course Image" className="w-1/4 object-cover" />
                            <div className="w-3/4 space-y-2 p-4">
                                <h3 className="text-lg font-semibold text-red-700">{item?.title}</h3>
                                <div className="text-gray-700" dangerouslySetInnerHTML={{__html:item?.short_description}}></div>
                            </div>
                        </div>
                    </Link>
                    ))
                }
               {outreachPrograms?.children?.length > 3 && (
                        <Link
                            href={`/outreach_programs`}
                            className="mt-6 inline-flex items-center rounded-md border bg-[#e31c24] px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-gray-100 hover:text-[#244494]"
                        >
                            View All Outreach Programs
                        </Link>
                    )}
                   
                </div>
            </div>
        </div>
    );
};

export default MyNewMiddleSection;
