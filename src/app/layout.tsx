import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import "./globals.css";
import { NuqsAdapter } from "nuqs/adapters/next/app";

export const metadata: Metadata = {
	title: "MovieFinder - Estilo Netflix",
	description:
		"Busque e descubra informações detalhadas sobre seus filmes favoritos",
	icons: {
		icon: "/film.svg",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt" className="dark">
			<body>
				<NuqsAdapter>{children}</NuqsAdapter>
				<Analytics />
			</body>
		</html>
	);
}
