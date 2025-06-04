import { usePage } from '@inertiajs/react';
import { HoverEffect } from './ui/card-hover-effect';

export function MyCareersCardHoverEffectDemo() {
const { careers } = usePage().props;

    return (
        <div className="mx-auto mt-10 max-w-screen-2xl">
            <h2 className="text-center text-3xl font-bold tracking-tight md:text-4xl">{careers?.title}</h2>
            <HoverEffect items={careers?.children} />
        </div>
    );
}
// export const projects = [
//     {
//         title: 'HR Recruitment Manager and Trainer  ',
//         description: 'Phnom Penh Thmey ',
//         link: 'https://stripe.com',
//     },
//     {
//         title: 'Netflix',
//         description:
//             'Phnom Penh Thmey ',
//         link: 'https://netflix.com',
//     },
//     {
//         title: 'Google',
//         description: 'Phnom Penh Thmey ',
//         link: 'https://google.com',
//     },
//     {
//         title: 'Meta',
//         description: "Phnom Penh Thmey ",
//         link: 'https://meta.com',
//     },
//     {
//         title: 'Amazon',
//         description: 'Phnom Penh Thmey ',
//         link: 'https://amazon.com',
//     },
//     {
//         title: 'Microsoft',
//         description:
//             'Phnom Penh Thmey ',
//         link: 'https://microsoft.com',
//     },
// ];
