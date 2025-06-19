import { usePage } from '@inertiajs/react';

const MyHeroHistory = () => {
    const { ourHestory } = usePage().props;

    return (
        <section className="px-6 pt-16 lg:px-20">
            <div className="mx-auto grid max-w-screen-xl gap-16 lg:grid-cols-2">
                {/* Text Section */}
                <div className="text-primary">
                    <h1 className="mb-6 text-3xl leading-tight font-bold tracking-tight md:text-5xl">{ourHestory?.title}</h1>
                    <div className="bg-foreground mb-8 h-1 w-20" />
                    <div 
                        className="max-w-[70ch] prose prose-p:dark:text-white text-base leading-relaxed whitespace-pre-line dark:text-white"
                        dangerouslySetInnerHTML={{ __html: ourHestory?.long_description }}
                    ></div>
                </div>
                {/* Image Section */}
                <div className="aspect-[4/3] w-full transform overflow-hidden rounded-lg transition duration-500 hover:scale-105">
                    <img
                        src={`/assets/images/pages/${ourHestory?.images?.[0]?.image || 'default.jpg'}`}
                        alt={ourHestory?.title || 'History image'}
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default MyHeroHistory;
