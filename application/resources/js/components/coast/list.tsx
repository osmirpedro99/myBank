
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

import axios from 'axios';
import { Head } from '@inertiajs/react';
import React, { useEffect, useState } from 'react';


interface Cost {
    id: number;
    name: string;
    amount: number;
    paymentType	: string;
    quantity : string;
}

export function ListCosts() {
    const [costs, setCosts] = useState<Cost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchCosts = async () => {
        setLoading(true);
        setError(null); // Clear errors

        try {
            const response = await axios.get<Cost[]>(route('costs'));
            setCosts(response.data);
        } catch (err) {
            console.error("Erro ao carregar custos:", err);
            if (axios.isAxiosError(err) && err.response) {
                setError(`Falha ao carregar custos: ${err.response.status} - ${err.response.statusText}`);
            } else {
                setError("Falha ao carregar custos. Por favor, tente novamente.");
            }
        } finally {
            setLoading(false);
        }
    };

    // fetchCosts running when  the component is construct
    useEffect(() => {
        fetchCosts();
    }, []); // empty array [] ensures effect is executed at least once in the component construct 

    if (loading) {
        return (
            <div>
                <p>Loading costs...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <p className="text-red-500">{error}</p>
                <button onClick={fetchCosts}>Try again</button>
            </div>
        );
    }

    return (
        <div>
            {costs.length > 0 ? (
                <Table>
                    <TableCaption>A list of your costs.</TableCaption>
                    <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Cost</TableHead>
                        <TableHead>Payment type</TableHead>
                        <TableHead>Quantity</TableHead>
                        <TableHead className="text-right">Amount</TableHead>
                    </TableRow>
                    </TableHeader>
                    <TableBody>
                    {costs.map((cost) => (
                        <TableRow key={cost.name}>
                        <TableCell className="font-medium">{cost.name}</TableCell>
                        <TableCell>{cost.paymentType}</TableCell>
                        <TableCell>{cost.quantity}</TableCell>
                        <TableCell className="text-right">R$ {cost.amount}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                    <TableFooter>
                    <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">$2,500.00</TableCell>
                    </TableRow>
                    </TableFooter>
                </Table>
            ) : (
                <p>Not found costs!</p>
            )}
        </div>
    );
}