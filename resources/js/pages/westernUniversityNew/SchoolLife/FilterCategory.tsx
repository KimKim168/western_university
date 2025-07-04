import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { router, usePage } from '@inertiajs/react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
    category_code: z.string().optional(),
    status: z.string().optional(),
    sort_by: z.string().optional(),
});

import useTranslation from '@/hooks/use-translation';
export default function FilterCategory() {
    const { t } = useTranslation();
    const { postCategories } = usePage().props;

    const initialQueryParams = new URLSearchParams(window.location.search);
    const currentPath = window.location.pathname;

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            category_code: initialQueryParams.get('category_code') || '', // Ensure it's a string
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            const queryParams = new URLSearchParams(window.location.search);
            if (values.category_code) {
                queryParams.set('category_code', values.category_code);
            } else {
                queryParams.delete('category_code');
            }
            queryParams.set('page', '1');
            const queryParamsString = queryParams?.toString();
            router.get(currentPath + '?' + queryParamsString);
        } catch (error) {
            console.error('Form submission error', error);
        }
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                    control={form.control}
                    name="category_code"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn('h-12 w-full justify-between', !field.value && 'text-muted-foreground')}
                                        >
                                            {field.value ? postCategories.find((category) => category.code === field.value)?.name : 'All'}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search ..." />
                                        <CommandList>
                                            <CommandEmpty>No status found.</CommandEmpty>
                                            <CommandGroup>
                                                <CommandItem
                                                    value=""
                                                    onSelect={() => {
                                                        form.setValue('category_code', '');
                                                        form.handleSubmit(onSubmit)();
                                                    }}
                                                >
                                                    <Check className={cn('mr-2 h-4 w-4', '' === field.value ? 'opacity-100' : 'opacity-0')} />
                                                    All
                                                </CommandItem>
                                                {postCategories?.map((category) => (
                                                    <CommandItem
                                                        value={category.name}
                                                        key={category.code}
                                                        onSelect={() => {
                                                            form.setValue('category_code', category.code);
                                                            form.handleSubmit(onSubmit)();
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                'mr-2 h-4 w-4',
                                                                category.code === field.value ? 'opacity-100' : 'opacity-0',
                                                            )}
                                                        />
                                                        {category.name}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>

                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
    );
}
