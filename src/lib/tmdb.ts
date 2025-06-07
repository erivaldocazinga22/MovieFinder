const BASE_URL = "https://api.themoviedb.org/3";

const DEMO_API_KEY = process.env.NEXT_PUBLIC_TMDB_API_KEY || "demo_key";

export async function searchMovies(query: string) {
	const response = await fetch(
		`${BASE_URL}/search/movie?api_key=${DEMO_API_KEY}&query=${encodeURIComponent(query)}&language=pt-BR`,
	);

	if (!response.ok) {
		throw new Error("Erro ao buscar filmes");
	}

	const data = await response.json();
	return data.results || [];
}

export async function getPopularMovies() {
	const response = await fetch(
		`${BASE_URL}/movie/popular?api_key=${DEMO_API_KEY}&language=pt-BR`,
	);

	if (!response.ok) {
		throw new Error("Erro ao carregar filmes populares");
	}

	const data = await response.json();
	return data.results || [];
}

export async function getMovieDetails(movieId: string) {
	const response = await fetch(
		`${BASE_URL}/movie/${movieId}?api_key=${DEMO_API_KEY}&language=pt-BR`,
	);

	if (!response.ok) {
		throw new Error("Erro ao carregar detalhes do filme");
	}

	return response.json();
}
