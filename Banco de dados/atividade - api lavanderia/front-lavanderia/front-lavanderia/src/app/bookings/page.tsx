"use client";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { decrement, increment } from "@/redux/store/modules/contadorSlice";

export default function Bookings() {
	const counter = useAppSelector((state) => state.counter.value);
	const dispatch = useAppDispatch();

	function incrementar() {
		dispatch(increment());
	}

	function decrementar() {
		dispatch(decrement());
	}
	return (
		<main className="flex  min-h-screen items-center justify-between p-24">
			<h1 className="hover:text-red-400 text-xl hover:text-3xl">Hello World</h1>
			<Button className="bg-yellow-500" onClick={incrementar}>
				Adicionar
			</Button>
			<span>{counter}</span>
			<Button onClick={decrementar}>Diminuir</Button>
		</main>
	);
}
