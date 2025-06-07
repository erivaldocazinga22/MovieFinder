import { ErrorMessage } from "@/components/error-message";
import { CardMovie } from "@/components/moves-content/card-film";
import { NotFoundMovie } from "@/components/moves-content/not-found-move";
import { getPopularMovies, searchMovies } from "@/lib/tmdb";
import type { Movie } from "@/types/movie";
import Link from "next/link";

export async function MovieList({ query }: { query: string }) {
	try {
		const movies: Movie[] = query.trim()
			? await searchMovies(query)
			: await getPopularMovies();

		if (movies.length === 0) {
			return <NotFoundMovie />;
		}

		return (
			<>
				<div className="mb-6">
					<h2 className="text-2xl font-semibold text-white mb-2">
						{query
							? `Resultados para "${query}"`
							: "Filmes Populares"}
					</h2>
					<p className="text-neutral-300">
						{query
							? `${movies.length} filmes encontrados`
							: "Descubra os filmes mais populares do momento"}
					</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
					{movies.map((movie) => (
						<Link key={movie.id} href={`/movie/${movie.id}`}>
							<CardMovie data={movie} />
						</Link>
					))}
				</div>
			</>
		);
	} catch (err) {
		return <ErrorMessage message="Erro ao carregar filmes." />;
	}
}
