import { MySearchTableData } from '@/components/my-search-table-data';
import { Link, usePage } from '@inertiajs/react';

// Reusable card component
const PostCard = ({ item }) => (
    <Link href={`/news/${item.id}`}>
        <div className="h-full overflow-hidden border border-gray-200 bg-white shadow-lg transition hover:scale-[1.01] hover:cursor-pointer">
            <img
                src={`/assets/images/posts/${item?.images?.[0]?.image}`}
                width={400}
                height={250}
                className="aspect-video w-full object-cover"
                alt={item.title}
            />
            <div className="p-4 text-start">
                <h2 className="font-noto-san-extra-light line-clamp-2 text-xl font-bold text-red-700">{item?.title}</h2>
                <p className="my-4 line-clamp-2 text-sm text-gray-500" dangerouslySetInnerHTML={{ __html: item?.short_description }} />
            </div>
        </div>
    </Link>
);

const MyNewPost = () => {
    const { tableData, blogs } = usePage().props;

    return (
        <div className="mx-auto max-w-screen-2xl px-4 pt-10 lg:px-20">
            <MySearchTableData className='mb-10'/>
            {/* NEWS Section */}
            <div className="mb-4 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="font-noto-san-extra-light border-l-4 border-red-700 pl-4 text-3xl font-bold tracking-tight text-red-700 sm:text-4xl dark:text-white">
                    {tableData?.[0]?.category_code || 'No News'}
                </h1>
            </div>

            {tableData?.length > 0 ? (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {tableData.map((item) => (
                        <PostCard key={item.id} item={item} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-xl text-gray-500">No News Data</p>
            )}

            {/* BLOGS Section */}
            <h1 className="font-noto-san-extra-light mt-16 mb-6 border-l-4 border-red-700 pl-4 text-3xl font-bold tracking-tight text-red-700 sm:text-4xl dark:text-white">
                {blogs?.[0]?.category_code || 'No Blogs'}
            </h1>

            {blogs?.length > 0 ? (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {blogs.map((item) => (
                        <PostCard key={item.id} item={item} />
                    ))}
                </div>
            ) : (
                <p className="text-center text-xl text-gray-500">No Blogs Data</p>
            )}
        </div>
    );
};

export default MyNewPost;
