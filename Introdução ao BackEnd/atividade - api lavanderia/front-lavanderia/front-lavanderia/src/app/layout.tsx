import ReduxProvider from "@/redux/providers";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Lavanderia Virtual",
	description: "Criada pela 13 edição da Growdev",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={roboto.className}>
				<ReduxProvider>{children}</ReduxProvider>
			</body>
		</html>
	);
}
