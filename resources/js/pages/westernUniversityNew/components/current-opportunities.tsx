import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Link } from '@inertiajs/react';
import { PaperclipIcon } from 'lucide-react';
import HowToApply from './how-to-apply';

const data = [
    {
        id: 1,
        title: 'HR Recruitment Manager and Trainer',
        short_description: 'Lead recruitment efforts and deliver training programs to develop team capabilities.',
    },
    {
        id: 2,
        title: 'GEP Manager',
        short_description: 'Oversee education programs and coordinate resource distribution for effective learning.',
    },
    {
        id: 3,
        title: 'Customer Service Supervisor',
        short_description: 'Supervise support teams to ensure excellent service and strong stakeholder engagement.',
    },
    {
        id: 4,
        title: 'Teacher Assistants',
        short_description: 'Support classroom activities and assist lead teachers in delivering quality education.',
    },
    {
        id: 5,
        title: 'Nurse',
        short_description: 'Provide healthcare services and promote wellness among students and staff.',
    },
];

const CurrentOpportunities = () => {
    return (
        <div className="mx-auto mt-12 mb-20 flex max-w-screen-2xl flex-col items-start gap-12 px-6 xl:px-16 lg:flex-row">
            <div>
                <h2 className="text-3xl font-bold tracking-tight">Job Opportunities</h2>

                <div className="mt-4 space-y-4">
                    {data.map((item) => (
                        <Dialog>
                            <DialogTrigger asChild>
                                <Card
                                    key={item.id}
                                    className="bg-primary/10 flex cursor-pointer flex-row justify-between gap-0 overflow-hidden rounded-xl border border-none border-gray-200 px-4 shadow-none transition-all duration-300 hover:scale-105 sm:flex-row"
                                >
                                    {/* <CardHeader>
                                <div className="bg-primary/20 aspect-square w-20 shrink-0 rounded-lg lg:w-20" />
                            </CardHeader> */}

                                    <CardContent className="flex flex-col justify-center p-0">
                                        <h3 className="text-foreground line-clamp-2 text-lg leading-snug font-semibold tracking-tight lg:text-xl">
                                            {item.title}
                                        </h3>
                                        <p className="text-foreground mt-2 line-clamp-3 text-xs lg:text-sm">{item.short_description}</p>
                                    </CardContent>
                                    <Button size="sm">Apply Now</Button>
                                </Card>
                            </DialogTrigger>
                            <DialogContent
                                showCloseButton={true}
                                className="bg-background text-foreground min-w-[95%] gap-0 rounded-none p-0 sm:min-w-[95%]"
                            >
                                <DialogHeader>
                                    <DialogTitle className="hidden"></DialogTitle>
                                    <DialogDescription className="hidden"></DialogDescription>
                                </DialogHeader>
                                <div>
                                    <div>
                                        <h1 className="p-4 pb-0 text-xl font-bold">
                                            Position: <span className="text-primary">ELV Design Engineer</span>
                                        </h1>
                                    </div>
                                    <div className="text-foreground flex flex-col gap-4 p-2 lg:flex-row lg:p-4">
                                        <div className="w-full lg:flex-1">
                                            <div className="p-2 text-sm">
                                                <p>
                                                    Location: <strong>Phnom Penh, Cambodia</strong>
                                                </p>
                                                <p>
                                                    Industry: <strong>Technology (ELV Systems, Security & AV Solutions)</strong>
                                                </p>
                                                <p>
                                                    Budget: <strong>$0,000.00</strong>
                                                </p>
                                            </div>
                                            <div className="p-2 text-sm">
                                                <p className="text-lg font-bold">QUALIFICATIONS</p>
                                                <div>
                                                    <strong>Language Proficiency:</strong>
                                                    <p>• Preferably a local candidate with experience in Cambodia's ELV industry.</p>
                                                </div>
                                                <div>
                                                    <strong>Education:</strong>
                                                    <p>
                                                        • Degree in Electrical Engineering or a related field (Computer Engineering, AV, IT, or Sound
                                                        System Design).
                                                    </p>
                                                </div>
                                                <div>
                                                    <strong>Experience:</strong>
                                                    <p>• Minimum 5 years experience in designing one or more ELV systems is an asset.</p>
                                                </div>
                                            </div>
                                            <div className="p-2 text-sm">
                                                <p className="text-lg font-bold">SKILLS:</p>
                                                <div>
                                                    <strong>Language Proficiency:</strong>
                                                    <ul>
                                                        <li>• Proficiency in AutoCAD for system drawings and design.</li>
                                                        <li>• Strong knowledge of Microsoft Office Suite.</li>
                                                        <li>• Ability to speak, read, and write in English and Khmer.</li>
                                                        <li>• Excellent communication and problem-solving skills.</li>
                                                        <li>• Quick learner with a strong work ethic and integrity.</li>
                                                        <li>• Willingness to work overtime or on weekends based on project requirements.</li>
                                                        <li>• Detail-oriented and able to follow company procedures.</li>
                                                        <li>• Passion for continuous learning and upgrading technical skills.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="p-2 text-sm">
                                                <p className="text-lg font-bold">DUTIES & RESPONSIBILITIES:</p>
                                                <div>
                                                    <strong>Language Proficiency:</strong>
                                                    <ol>
                                                        <li>
                                                            1. System Design & Documentation
                                                            <ul>
                                                                <li>• Design and prepare BOQ and technical drawings for ELV systems.</li>
                                                                <li>
                                                                    • Ensure ELV system designs meet industry standards, safety regulations, and
                                                                    project specifications.
                                                                </li>
                                                                <li>
                                                                    • Maintain accurate documentation and ensure proper filing of all design records.
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            2. Project Coordination & Technical Support
                                                            <ul>
                                                                <li>
                                                                    • Collaborate with the purchasing team to source necessary components for ELV
                                                                    installations.
                                                                </li>
                                                                <li>
                                                                    • Provide technical guidance to sales, marketing, and installation teams when
                                                                    needed.
                                                                </li>
                                                                <li>
                                                                    • Conduct site inspections to verify that installations align with design plans.
                                                                </li>
                                                                <li>• Assist in troubleshooting and resolving ELV system issues.</li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            3. Knowledge Transfer & Team Training
                                                            <ul>
                                                                <li>• Design and prepare BOQ and technical drawings for ELV systems.</li>
                                                                <li>• Train installation teams on system designs and technical processes.</li>
                                                                <li>
                                                                    • Stay updated on the latest ELV technologies and industry trends to enhance
                                                                    project efficiency.
                                                                </li>
                                                            </ul>
                                                        </li>
                                                    </ol>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full space-y-4 lg:w-md">
                                            {/* <div className="w-full max-w-full">
                                                    <Label htmlFor="name">Name</Label>
                                                    <Input
                                                        id="name"
                                                        type="name"
                                                        placeholder="Name"
                                                        className="text-foreground w-full max-w-full rounded-none"
                                                    />
                                                </div> */}
                                            <div className="w-full max-w-full">
                                                <Label htmlFor="email">Position</Label>
                                                <Input
                                                    id="position"
                                                    type="position"
                                                    placeholder="Position"
                                                    disabled
                                                    value="ELV Design Engineer"
                                                    className="text-foreground dark:bg-primary/20 w-full max-w-full rounded-none disabled:opacity-80"
                                                />
                                            </div>
                                            <div className="w-full max-w-full">
                                                <Label htmlFor="email">Email</Label>
                                                <Input
                                                    id="email"
                                                    type="email"
                                                    placeholder="Email"
                                                    autoFocus={false}
                                                    className="text-foreground dark:bg-primary/20 w-full max-w-full rounded-none"
                                                />
                                            </div>
                                            <div className="w-full max-w-full">
                                                <Label htmlFor="message">Message</Label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="message"
                                                    autoFocus={false}
                                                    className="text-foreground dark:bg-primary/20 w-full max-w-full rounded-none"
                                                />
                                            </div>
                                            {/* <div className="w-full max-w-full">
                                                    <Label htmlFor="email">Phone number</Label>
                                                    <Input
                                                        id="phone"
                                                        type="phone"
                                                        placeholder="Phone"
                                                        className="text-foreground w-full max-w-full rounded-none"
                                                    />
                                                </div> */}
                                            <div className="flex w-full max-w-full justify-end gap-4">
                                                <Button variant="secondary" className="rounded-none">
                                                    <PaperclipIcon /> Attach CV
                                                </Button>
                                                <Button variant="secondary" className="rounded-none">
                                                    Apply
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
            <aside className="w-full shrink-0 lg:max-w-lg">
                {/* <Card className="bg-primary/10 mt-12 flex flex-col gap-0 overflow-hidden rounded-xl border border-none border-gray-200 px-6 shadow-none transition sm:flex-col">
                    <CardContent className="flex flex-col justify-center p-0">
                        <h3 className="text-foreground line-clamp-2 text-lg leading-snug font-semibold tracking-tight lg:text-xl">
                            Internships & Volunteering
                        </h3>
                        <p className="text-foreground mt-2 text-sm lg:text-base">
                            We offer hands-on opportunities for students and professionals to gain experience while contributing to meaningful work.
                        </p>
                    </CardContent>
                    <CardFooter className="mt-4 gap-4 px-0">
                        <Link href={`#`} prefetch>
                            <Button>Partner With Us</Button>
                        </Link>
                    </CardFooter>
                </Card> */}
                <h3 className="mt-10 text-3xl font-bold tracking-tight">How to Apply</h3>
                <HowToApply />
            </aside>
        </div>
    );
};

export default CurrentOpportunities;
