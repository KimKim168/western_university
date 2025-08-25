import { usePage } from "@inertiajs/react";

const MyValuesWiscare = () => {
    const { valuesWiscare, locale } = usePage().props;
    // console.log(valuesWiscare);
  return (
    <div className="flex items-center justify-center px-6 pb-12">
      <div className="max-w-screen-xl mx-auto  xl:px-0">
        <h2 className="text-4xl md:text-4xl !leading-[1.15] font-bold tracking-tighter text-center">
          {locale === 'kh' ? (valuesWiscare?.title_kh ?? valuesWiscare?.title) : valuesWiscare?.title}
        </h2>
        {/* <p className="mt-3 text-lg text-center text-muted-foreground">
          Quick answers to common questions about our products and services.
        </p> */}
        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 rounded-xl overflow-hidden">
          {valuesWiscare?.children?.map((item) => (
            <div key={item.id} className="border dark:border-primary border-dashed p-6 -mt-px -ml-px">
              <div className="h-16 w-16 flex items-center justify-center rounded-full bg-accent dark:bg-primary overflow-hidden">
                <img src={`/assets/images/pages/${item?.images[0]?.image}`} alt={`image`} className="h-10 w-10 object-contain" />
              </div>
              <div className="mt-3 flex items-start gap-2 text-[1.35rem] font-semibold tracking-tight">
                <span>{locale === 'kh' ? (item?.title_kh ?? item?.title) : item?.title}</span>
              </div>
              <p className="prose prose-p:dark:text-white whitespace-pre-line" dangerouslySetInnerHTML={{__html: locale === 'kh' ? (item?.short_description_kh ?? item?.short_description) : item?.short_description}}></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyValuesWiscare;

