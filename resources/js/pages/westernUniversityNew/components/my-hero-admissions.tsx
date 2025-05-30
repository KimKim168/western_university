const MyHeroAdmissions = ({ admissions }: { admissions: any }) => {
    return (
        <div className="mx-auto prose max-w-screen-2xl px-6 py-12 lg:px-16">
            <div className="prose prose-td:border prose-th:border max-w-none whitespace-pre-line" dangerouslySetInnerHTML={{ __html: admissions?.long_description }}>
            </div>
        </div>
    );
};

export default MyHeroAdmissions;