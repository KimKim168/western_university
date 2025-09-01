const MyHeroAdmissions = ({ admissions, locale }: { admissions: any }) => {
     const fontClass = locale === 'kh' ? 'font-kantumruy' : '';
    return (
        <div className="overflow-x-scroll mx-auto max-w-screen-2xl px-6 py-12 lg:px-16">
            <div
                className={`prose dark:prose-invert prose-th:dark:text-primary prose-td:dark:text-primary prose-td:dark:border-primary prose-tr:dark:border-primary prose-tr:dark:border prose-td:dark:border prose-table:dark:border-primary prose-img:dark:border-primary prose-hr:dark:border-primary prose-table:overflow-x-scroll prose-td:border prose-th:border max-w-none overflow-x-scroll ${fontClass}`}
                dangerouslySetInnerHTML={{ __html: locale === 'kh' ? (admissions?.long_description_kh ?? admissions?.long_description) : admissions?.long_description }}
            />
        </div>
    );
};

export default MyHeroAdmissions;
