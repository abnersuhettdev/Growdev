import { FormLogin } from "@/components/myComponents/FormLogin";

export default function Home() {
	return (
		<main className="flex  min-h-screen flex-col items-center justify-between p-24 bg-gray-600 text-zinc-100">
			<FormLogin />
		</main>
	);
}
