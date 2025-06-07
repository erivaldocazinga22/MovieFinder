export interface Movie {
	id: number;
	title: string;
	overview: string;
	poster_path: string | null;
	backdrop_path: string | null;
	release_date: string;
	vote_average: number;
	vote_count: number;
	genre_ids: number[];
}

export interface Genre {
	id: number;
	name: string;
}

export interface ProductionCompany {
	id: number;
	name: string;
	logo_path: string | null;
	origin_country: string;
}

export interface MovieDetails extends Omit<Movie, "genre_ids"> {
	genres: Genre[];
	runtime: number;
	budget: number;
	revenue: number;
	tagline: string;
	original_language: string;
	production_companies: ProductionCompany[];
	homepage: string;
	imdb_id: string;
}
