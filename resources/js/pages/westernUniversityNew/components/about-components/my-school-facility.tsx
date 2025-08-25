import { usePage } from "@inertiajs/react";
import MySlide from "./my-slide";

const MySchoolFacility = ({schoolFacilitiesChildren}:{schoolFacilitiesChildren?:any}) => {
  const { locale } = usePage().props;
  return (
    <div className="py-10 lg:py-16">
      <div className="max-w-screen-2xl mx-auto px-6  lg:px-20 space-y-8">
        {schoolFacilitiesChildren?.map((item, index) => {
          const isReversed = index % 2 === 1;
          return (
            <div
              key={item?.id}
              className={`flex flex-col md:flex-row ${
                isReversed ? "md:flex-row-reverse" : ""
              }  gap-10 rounded-3xl `}
            >
              {/* Text Section */}
              <div className="md:w-1/2">
                <h4 className="text-2xl md:text-3xl font-semibold mb-4 text-primary">
                  {locale === 'kh' ? (item?.title_kh ?? item?.title) : item?.title }
                </h4>
                <p className="prose dark:prose-invert text-base md:text-lg text-start leading-relaxed" dangerouslySetInnerHTML={{ __html: locale === 'kh' ? (item?.long_description_kh ?? item?.long_description) : item?.long_description }}>
                </p>
              </div>

              {/* Image Section */}
              <div className="w-full md:w-1/2">
                <div className="w-full overflow-hidden rounded-2xl">
                <MySlide images={item?.images}/>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default MySchoolFacility;
