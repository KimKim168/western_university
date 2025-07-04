import { Link } from '@inertiajs/react';

const MyQuickLink = () => {
    return (
        <div className="flex flex-col gap-1">
            <Link href={'/'} className="text-muted-foreground hover:text-foreground dark:text-white dark:hover:underline transition-all underline-offset-4">
                Home
            </Link>
            <Link href={'/history_and_values'} className="text-muted-foreground hover:text-foreground dark:text-white dark:hover:underline transition-all underline-offset-4">
                History And Values
            </Link>
            <Link href={'/admissions'} className="text-muted-foreground hover:text-foreground dark:text-white dark:hover:underline transition-all underline-offset-4">
                Admissions
            </Link>
            <Link href={'/contact'} className="text-muted-foreground hover:text-foreground dark:text-white dark:hover:underline transition-all underline-offset-4">
                Contact
            </Link>
            <Link href="/job_opportunities" className="text-muted-foreground hover:text-foreground dark:text-white dark:hover:underline transition-all underline-offset-4">
                Job Opportunities
            </Link>
        </div>
    );
};

export default MyQuickLink;
