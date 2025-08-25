
const MyClassSchedules = ({schedulesAndSubjects, locate}:{schedulesAndSubjects:any}) => {
  return (
    <div 
    className="
        prose
        max-w-screen-2xl
        mx-auto
        px-6
        lg:px-16
        dark:prose-invert
        dark:border-white
        prose-p:dark:text-white
        prose-a:dark:text-primary
        prose-li:dark:text-primary
        prose-strong:dark:text-primary
        prose-em:dark:text-primary
        prose-blockquote:dark:text-primary

        prose-h1:dark:text-primary
        prose-h2:dark:text-primary
        prose-h3:dark:text-primary
        prose-h4:dark:text-primary
        prose-h5:dark:text-primary
        prose-h6:dark:text-primary
        prose-headings:dark:text-primary

        prose-th:dark:text-primary
        prose-td:dark:text-primary
        prose-td:dark:border-primary
        prose-tr:dark:border-primary
        prose-tr:dark:border
        prose-td:dark:border
        prose-table:dark:border-primary
        prose-img:dark:border-primary
        prose-hr:dark:border-primary
        prose-td:border-primary
      "dangerouslySetInnerHTML={{__html: locate === 'kh' ? (schedulesAndSubjects?.long_description_kh ?? schedulesAndSubjects?.long_description) : schedulesAndSubjects?.long_description}}>
    </div>
  );
};

export default MyClassSchedules;
