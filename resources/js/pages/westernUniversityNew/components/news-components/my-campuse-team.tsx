import { usePage } from "@inertiajs/react";

const MyCampuseTeam = () => {
  const { campusRepresentative, locale } = usePage().props;
  const fontClass = locale === 'kh' ? 'font-kantumruy' : '';

  return (
    <div className="flex flex-col justify-center mt-10 px-6 lg:px-0 max-w-screen-xl mx-auto">
      <h2
        className={`mt-3 text-3xl md:text-4xl font-bold tracking-tighter border-l-4 border-red-700 pl-2 ${fontClass}`}
      >
        {locale === 'kh'
          ? (campusRepresentative?.title_kh ?? campusRepresentative?.title)
          : campusRepresentative?.title}
      </h2>

      <div
        className="mt-4 text-base sm:text-lg prose dark:prose-invert ck-content whitespace-pre-line"
        dangerouslySetInnerHTML={{
          __html:
            locale === 'kh'
              ? (campusRepresentative?.short_description_kh ?? campusRepresentative?.short_description)
              : campusRepresentative?.short_description,
        }}
      />

      <div className="mt-10 sm:mt-10 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {campusRepresentative?.children?.map((member) => (
          <div key={member.id}>
            <img
              src={`/assets/images/pages/${member?.images[0]?.image}`}
              alt={locale === 'kh' ? member.title_kh : member.title}
              className="h-30 w-30 rounded-full object-cover bg-secondary"
              width={120}
              height={120}
            />
            <h3 className={`mt-4 text-lg xl:text-xl font-semibold prose dark:prose-invert ck-content ${fontClass}`}>
              {locale === 'kh' ? (member.title_kh ?? member.title) : member.title}
            </h3>
            <p
              className="text-muted-foreground text-md prose dark:prose-invert ck-content"
              dangerouslySetInnerHTML={{
                __html:
                  locale === 'kh'
                    ? (member?.short_description_kh ?? member?.short_description)
                    : member?.short_description,
              }}
            ></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCampuseTeam;
