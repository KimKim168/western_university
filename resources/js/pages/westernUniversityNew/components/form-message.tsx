import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from '@inertiajs/react';
import { useState } from 'react';
import { toast } from 'sonner';

const FormMessage = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        phone: '',
        email: '',
        message: '',
    });
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        post('/submit-message', {
            preserveScroll: true,
            onSuccess: (page) => {
                if (page.props.flash?.success) {
                    toast.success('Success', {
                        description: page.props.flash.success,
                    });
                    setSuccessMessage(page.props.flash?.success);
                    reset();
                }
                if (page.props.flash?.error) {
                    toast.error('Error', {
                        description: page.props.flash.error,
                    });
                }
            },
            onError: () => {
                toast.error('Error', {
                    description: 'Failed to send message.',
                });
            },
        });
    };

    return (
        <form className="mt-10" onSubmit={handleSubmit}>
            <div className="grid gap-x-8 gap-y-5 md:grid-cols-2">
                <div className="col-span-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                        placeholder="Your full name"
                        id="name"
                        value={data.name}
                        onChange={(e) => setData('name', e.target.value)}
                        className="mt-1.5 h-11"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
                </div>

                <div className="col-span-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                        type="tel"
                        placeholder="Phone number"
                        id="phone"
                        value={data.phone}
                        onChange={(e) => setData('phone', e.target.value)}
                        className="mt-1.5 h-11"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-400">{errors.phone}</p>}
                </div>

                <div className="col-span-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        type="email"
                        placeholder="Email"
                        id="email"
                        value={data.email}
                        onChange={(e) => setData('email', e.target.value)}
                        className="mt-1.5 h-11"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
                </div>

                <div className="col-span-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                        id="message"
                        placeholder="Write your message here"
                        value={data.message}
                        onChange={(e) => setData('message', e.target.value)}
                        className="mt-1.5"
                        rows={6}
                    />
                    {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
                </div>
            </div>
            {successMessage && <p className="mt-2 text-center text-sm text-primary">{successMessage}</p>}
            {successMessage && <p className="mt-1 text-center text-sm text-primary">We will get back to you as soon as possible.</p>}

            <button
                type="submit"
                disabled={processing}
                className="group before:content[''] mt-8 after:content[''] relative h-12 w-60 origin-left overflow-hidden rounded-lg border bg-sky-800 p-3 text-left text-base font-bold text-gray-50 underline underline-offset-2 duration-500 before:absolute before:top-1 before:right-1 before:z-10 before:h-12 before:w-12 before:rounded-full before:bg-sky-400 before:blur-lg before:duration-500 group-hover:before:duration-500 after:absolute after:top-3 after:right-8 after:z-10 after:h-20 after:w-20 after:rounded-full after:bg-cyan-600 after:blur after:duration-500 group-hover:after:duration-1000 hover:border-sky-300 hover:bg-sky-300 hover:text-sky-900 hover:underline hover:decoration-2 hover:underline-offset-4 hover:duration-500 hover:before:top-8 hover:before:right-16 hover:before:-bottom-8 hover:before:blur-none hover:after:-right-2 hover:after:scale-150 hover:after:blur-none"
            >
                Send Message
            </button>
        </form>
    );
};

export default FormMessage;
