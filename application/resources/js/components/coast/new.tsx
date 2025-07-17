import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
  
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { useState } from 'react';

type CostsForm = {
    name: string;
    amount: string;
    paymentType: number;
    quantity: number;
};


export function NewCosts() {
    
    const [open, setOpen] = useState(false);
    const { data, setData, post, processing, errors, reset } = useForm<Required<CostsForm>>({
        name: '' ,
        amount: '',
        paymentType: 1,
        quantity: 1,
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        console.log(e);
        post(route('add_cost'),{
            onSuccess: () => {
                reset(); // clear form
                setOpen(false); // Close dialog
                window.location.reload();
            },
            onError: (formErrors) => {
                console.error("Erros de validação:", formErrors);
            },
            onFinish: () => {
            },
        });
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <span>New costs</span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[825px]">
                <DialogHeader>
                    <DialogTitle>New costs</DialogTitle>
                    <DialogDescription>
                    Register your new costs
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={submit} id="new-costs-form">
                    <div className="grid gap-4">
                        <div className="grid gap-3">
                            <Label htmlFor="name-1">Name</Label>
                            <Input
                                id="name"
                                type="input"
                                required
                                autoFocus
                                tabIndex={1}
                                autoComplete="name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder="new costs"
                            />
                        </div>

                        <div className="grid gap-3 grid-cols-4">

                            <div className="grid gap-3">
                                <Label htmlFor="amount-1">Amount</Label>
                                <Input
                                    id="amount"
                                    type="input"
                                    required
                                    autoFocus
                                    tabIndex={1}
                                    autoComplete="amount"
                                    value={data.amount}
                                    onChange={(e) => setData('amount', e.target.value)}
                                    placeholder="amount"
                                />
                            </div>
                            
                            <div className="grid gap-3">
                                <Label htmlFor="paymentType-1">Select payment type: </Label>
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="1">A vista</SelectItem>
                                            <SelectItem value="2">Parcelado</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            
                            <div className="grid gap-3">
                                <Label htmlFor="quantity-1">Qauntity: </Label>
                                <Select>
                                    <SelectTrigger className="w-[180px]">
                                        <SelectValue placeholder="Select" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                        <SelectItem value="1">1</SelectItem>
                                        <SelectItem value="2">2</SelectItem>
                                        <SelectItem value="3">3</SelectItem>
                                        <SelectItem value="4">4</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>

                        </div>
                    </div>
                    <DialogFooter>
                        <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" disabled={processing}>Save changes</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}