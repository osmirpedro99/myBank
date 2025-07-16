import { Button } from "@/components/ui/button"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import * as React from "react"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"


export function NewCosts() {
    return (
        <Dialog>
            <form>
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
                <div className="grid gap-4">
                    <div className="grid gap-3">
                        <Label htmlFor="name-1">Name</Label>
                        <Input id="name-1" name="name" defaultValue="buy" />
                    </div>

                    <div className="grid gap-3 grid-cols-4">

                        <div className="grid gap-3">
                            <Label htmlFor="amount-1">Amount</Label>
                            <Input id="amount-1" name="amount" defaultValue="amount" />
                        </div>
                        
                        <div className="grid gap-3">
                            <Label htmlFor="payment-type-1">Select payment type: </Label>
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
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    );
}