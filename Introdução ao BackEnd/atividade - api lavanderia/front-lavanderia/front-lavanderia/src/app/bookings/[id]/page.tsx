import { Button } from "@/components/ui/button";

interface BookingDetalheProps {
	params: { id: string };
}

export default function BookingDetalhe(props: BookingDetalheProps) {
	return (
		<main className="flex  min-h-screen flex-col items-center justify-between p-24">
			<h1 className="hover:text-red-400 text-xl hover:text-3xl">
				{props.params.id}
			</h1>
			<Button>detalhes</Button>
		</main>
	);
}
