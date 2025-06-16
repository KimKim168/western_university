import { usePage } from '@inertiajs/react';
import React from 'react';

const MyHeroHistory = () => {
  const { ourHestory } = usePage().props;

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-2  gap-16">
        {/* Text Section */}
        <div className="text-primary">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            {ourHestory?.title}
          </h1>
          <div className="h-1 w-20 bg-foreground mb-8" />
          <div
            className="prose prose-gray  max-w-[70ch] text-base"
            dangerouslySetInnerHTML={{ __html: ourHestory?.long_description }}
          />
        </div>
        {/* Image Section */}
        <div className="w-full overflow-hidden aspect-[4/3] rounded-lg transform transition duration-500 hover:scale-105">
          <img
            src={`/assets/images/pages/${ourHestory?.images?.[0]?.image || 'default.jpg'}`}
            alt={ourHestory?.title || 'History image'}
            className="w-full h-full object-cover "
          />
        </div>
      </div>
    </section>
  );
};

export default MyHeroHistory;
