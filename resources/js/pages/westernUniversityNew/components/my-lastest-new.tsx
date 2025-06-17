import { Link, usePage } from '@inertiajs/react';
// import { CalendarClock } from 'lucide-react';

// const newsItems = [
//     {
//         id: 1,
//         title: 'Liberal Arts Colleges Rankings',
//         description: 'Liberal Arts Colleges emphasize undergraduate education and award at least half of their degrees in the liberal arts fields of study.',
//         image: 'assets/demo-images/banner5.jpg',
//     },
//     {
//         id: 2,
//         title: 'Ways Parents and Counselors Can Help Students Earn Scholarships',
//         description: 'Liberal Arts Colleges emphasize undergraduate education and award at least half of their degrees in the liberal arts fields of study.',
//         image: 'assets/demo-images/banner3.jpg',
//     },
//     {
//         id: 3,
//         title: 'Ways Parents and Counselors Can Help Students Earn Scholarships',
//         description: 'Liberal Arts Colleges emphasize undergraduate education and award at least half of their degrees in the liberal arts fields of study.',
//         image: 'assets/demo-images/banner3.jpg',
//     },
//     {
//         id: 4,
//         title: 'Ways Parents and Counselors Can Help Students Earn Scholarships',
//         description: 'Liberal Arts Colleges emphasize undergraduate education and award at least half of their degrees in the liberal arts fields of study.',
//         image: 'assets/demo-images/banner4.jpg',
//     },
//     {
//         id: 5,
//         title: 'Liberal Arts Colleges Rankings',
//         description: 'Liberal Arts Colleges emphasize undergraduate education and award at least half of their degrees in the liberal arts fields of study.',
//         image: 'assets/demo-images/banner3.jpg',
//     },
//     {
//         id: 6,
//         title: 'Liberal Arts Colleges Rankings',
//         description: 'Liberal Arts Colleges emphasize undergraduate education and award at least half of their degrees in the liberal arts fields of study.',
//         image: 'assets/demo-images/banner3.jpg',
//     },
// ];

const MyLastestNew = () => {
    const { tableData } = usePage().props;
    // console.log(tableData);
    return (
        <div className="mx-auto max-w-screen-2xl  px-4 py-12 text-center sm:px-16">
            <h2 className="text-4xl font-bold text-primary sm:text-4xl">Latest News</h2>
            <div className="mx-auto mt-5 h-1 w-16 bg-true-primary" />
            <div className="mx-auto my-12 grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {tableData?.map((item) => (
                    <a key={item.id} href={`/detail/${item.id}`} className="overflow-hidden border border-gray-200 bg-white shadow-lg hover:cursor-pointer">
                        <img
                            src={`/assets/images/posts/${item?.images?.[0]?.image}`}
                            width={400}
                            height={250}
                            className="aspect-video w-full object-cover"
                        />
                        <div className="p-4 text-start">
                            <h2 className="text-xl font-noto-san-extra-light font-bold text-red-700">
                                {item.title}
                            </h2>
                            <p className="my-6 text-gray-500">
                                {item.short_description}
                            </p>
                            {/* Uncomment this block to display time info
                            <div className="mt-3 flex items-center text-sm text-blue-950">
                                <CalendarClock className="mr-2 h-4 w-4" />
                                <span>2 days ago</span>
                            </div>
                            */}
                        </div>
                    </a>
                ))}
            </div>

            <Link
                href="/news"
                className="inline-flex items-center mt-6 px-6 py-3 bg-[#e31c24] rounded-md text-white hover:bg-blue-950 font-semibold shadow-md transition duration-500"
            >
                View All Courses
            </Link>
        </div>
    );
};

export default MyLastestNew;
