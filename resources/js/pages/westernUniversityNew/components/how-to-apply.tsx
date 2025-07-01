import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const HowToApply = () => {
    return (
        <div className='space-y-4 mt-4'>
            <div className="w-full max-w-full">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" className="mt-0.5" />
            </div>
            <div className="w-full max-w-full  cursor-pointer">
                <Label htmlFor="picture">Attach CV</Label>
                <Input id="picture" type="file" className="pb-8 pl-1 file:py-0 cursor-pointer file:bg-primary/20 file:rounded-sm file:px-2" />
            </div>
            <div className="flex w-full flex-col gap-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Type your message here." />
            </div>
            <Button className='w-full'>Submit</Button>
        </div>
    );
};

export default HowToApply;
