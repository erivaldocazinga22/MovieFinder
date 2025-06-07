import { Header } from "@/components/header";
import { InputSearch } from "@/components/input-search";
import { LoadingSpinner } from "@/components/loading-spinner";
import { MovieList } from "@/components/moves-content/movie-list";
import { Suspense } from "react";

export default async function HomePage({
	searchParams,
}: {
	searchParams: Promise<{ search?: string }>
}) {
	const params = await searchParams;
	const query = params?.search ?? "";
	
	return (
		<div className="min-h-screen space-y-4">
			<Header />
			<InputSearch />

			<main className="container mx-auto px-4 py-8">
				<Suspense
					fallback={
						<p className="text-white flex items-center gap-2">
							<LoadingSpinner />
							<span>A carregar...</span>
						</p>
					}
				>
					<MovieList query={query} />
				</Suspense>
			</main>
		</div>
	);
}
