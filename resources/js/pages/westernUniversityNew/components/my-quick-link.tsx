import { Link } from '@inertiajs/react';

const MyQuickLink = () => {
    return (
        <div className="flex flex-col">
            <Link href={'/'} className="text-muted-foreground hover:text-foreground dark:text-white">
                Home
            </Link>
            <Link href={'/history_and_values'} className="text-muted-foreground hover:text-foreground dark:text-white">
                History And Values
            </Link>
            <Link href={'/admissions'} className="text-muted-foreground hover:text-foreground dark:text-white">
                Admissions
            </Link>
            <Link href={'/contact'} className="text-muted-foreground hover:text-foreground dark:text-white">
                Contact
            </Link>
            <Link href="/contact#career" className="text-muted-foreground hover:text-foreground dark:text-white">
                Job Opportunities
            </Link>
        </div>
    );
};

export default MyQuickLink;
