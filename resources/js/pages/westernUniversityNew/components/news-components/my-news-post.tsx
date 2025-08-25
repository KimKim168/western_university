import MyNoData from '@/components/my-no-data';
import { MySearchTableData } from '@/components/my-search-table-data';
import { Link, usePage } from '@inertiajs/react';
import FilterCategory from '../../SchoolLife/FilterCategory';
import useTranslation from '@/hooks/use-translation';

// Reusable card component
const PostCard = ({ item, locale, fontClass }) => (
    <Link href={`/news/${item.id}`}>
        <div className="h-full overflow-hidden border border-gray-200 bg-white shadow-lg transition hover:scale-[1.01] hover:cursor-pointer dark:border-gray-700 dark:bg-gray-900 dark:shadow-md">
            <img
                src={`/assets/images/posts/${item?.images?.[0]?.image}`}
                width={400}
                height={250}
                className="aspect-video w-full object-cover"
                alt={item.title}
            />
            <div className="p-4 text-start">
                <h2 className={`line-clamp-2 text-xl font-bold text-red-700 dark:text-red-400 ${fontClass}`}>{locale === 'kh' ? (item?.title_kh ?? item?.title) : item?.title}</h2>
                <p
                    className="my-4 line-clamp-2 text-sm text-gray-500 dark:text-gray-300"
                    dangerouslySetInnerHTML={{ __html:locale === 'kh' ? (item?.short_description_kh ?? item?.short_description) : item?.short_description}}
                />
            </div>
        </div>
    </Link>
);

const MyNewPost = () => {
    const { tableData, locale } = usePage<any>().props;
    const fontClass = locale === 'kh' ? 'font-kantumruy' : 'font-noto-san-extra-light';
    return (
        <div className="mx-auto max-w-screen-2xl px-4 pt-10 lg:px-20">
            <div className="flex h-full justify-end gap-2">
                <MySearchTableData className="mb-10" />
                <FilterCategory />
            </div>

            {tableData?.data?.length > 0 ? (
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {tableData?.data?.map((item:any) => <PostCard key={item.id} item={item} locale={locale}
                    fontClass={fontClass} />)}
                </div>
            ) : (
                <MyNoData />
            )}
        </div>
    );
};

export default MyNewPost;
