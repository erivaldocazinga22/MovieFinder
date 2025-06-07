"use client";
import { CardMovieDetails } from "@/app/movie/_components/card-movie-details";
import { MovieDetailsSkeleton } from "@/app/movie/_components/movie-details-skeleton";
import { ErrorMessage } from "@/components/error-message";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { formatCurrency } from "@/lib/formatCurrency";
import { formatRuntime } from "@/lib/formatRuntime";
import { getMovieDetails } from "@/lib/tmdb";
import type { MovieDetails } from "@/types/movie";
import { ArrowLeft, Calendar, Clock, Globe, Star } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MovieDetailsPage() {
	const params = useParams();
	const router = useRouter();
	const [movie, setMovie] = useState<MovieDetails | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (params.id) {
			loadMovieDetails(params.id as string);
		}
	}, [params.id]);

	const loadMovieDetails = async (movieId: string) => {
		try {
			setLoading(true);
			setError(null);
			const movieData = await getMovieDetails(movieId);
			setMovie(movieData);
		} catch (err) {
			setError("Erro ao carregar detalhes do filme");
		} finally {
			setLoading(false);
		}
	};
	if (loading) {
		return <MovieDetailsSkeleton />;
	}
	if (error) return <ErrorMessage message={error} />;
	if (!movie) return <ErrorMessage message="Filme não encontrado" />;

	return (
		<div className="min-h-scree">
			<div className="relative">
				{movie.backdrop_path && (
					<div className="absolute inset-0 z-0">
						{loading ? (
							<Skeleton className="w-full h-full" />
						) : (
							<Image
								src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
								alt={movie.title}
								fill
								className="object-cover"
								priority
							/>
						)}
						<div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70" />
					</div>
				)}

				<div className="relative z-10 container mx-auto px-4 py-8">
					<Button
						onClick={() => router.back()}
						variant="outline"
						className="mb-6 border-neutral-700 text-white hover:bg-neutral-900"
					>
						<ArrowLeft className="w-4 h-4 mr-2" />
						Voltar
					</Button>

					<div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] gap-8">
						<div className="mx-auto md:mx-0">
							<CardMovieDetails data={movie} />
						</div>
						<div className="space-y-6">
							<div>
								<h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
									{movie.title}
								</h1>
								{movie.tagline && (
									<p className="text-xl text-neutral-500 italic mb-4">
										"{movie.tagline}"
									</p>
								)}
							</div>

							<div className="flex flex-wrap items-center gap-4">
								{movie.vote_average > 0 && (
									<Badge className="bg-yellow-500 text-black font-semibold text-lg px-3 py-1">
										<Star className="w-4 h-4 mr-1 fill-current" />
										{movie.vote_average.toFixed(1)}
									</Badge>
								)}

								<div className="flex items-center gap-2 text-neutral-300">
									<Calendar className="w-4 h-4" />
									<span>
										{new Date(
											movie.release_date,
										).getFullYear()}
									</span>
								</div>

								{movie.runtime > 0 && (
									<div className="flex items-center gap-2 text-neutral-300">
										<Clock className="w-4 h-4" />
										<span>
											{formatRuntime(movie.runtime)}
										</span>
									</div>
								)}

								{movie.original_language && (
									<div className="flex items-center gap-2 text-neutral-300">
										<Globe className="w-4 h-4" />
										<span>
											{movie.original_language.toUpperCase()}
										</span>
									</div>
								)}
							</div>

							{movie.genres.length > 0 && (
								<div className="flex flex-wrap gap-2">
									{movie.genres.map((genre) => (
										<Badge
											key={genre.id}
											variant="outline"
											className="border-red-500 text-red-500 bg-red-600/30"
										>
											{genre.name}
										</Badge>
									))}
								</div>
							)}

							{movie.overview && (
								<Card className="p-0 bg-neutral-950 border-neutral-900">
									<CardContent className="p-6">
										<h3 className="text-xl font-semibold text-white mb-3">
											Sinopse
										</h3>
										<p className="text-neutral-300 leading-relaxed">
											{movie.overview}
										</p>
									</CardContent>
								</Card>
							)}

							<div className="grid sm:grid-cols-2 gap-4">
								{movie.budget > 0 && (
									<Card className="p-0 bg-neutral-950 border-neutral-900">
										<CardContent className="p-4">
											<h4 className="font-semibold text-white mb-1">
												Orçamento
											</h4>
											<p className="text-neutral-300">
												{formatCurrency(movie.budget)}
											</p>
										</CardContent>
									</Card>
								)}

								{movie.revenue > 0 && (
									<Card className="p-0 bg-neutral-950 border-neutral-900">
										<CardContent className="p-4">
											<h4 className="font-semibold text-white mb-1">
												Bilheteria
											</h4>
											<p className="text-neutral-300">
												{formatCurrency(movie.revenue)}
											</p>
										</CardContent>
									</Card>
								)}

								{movie.production_companies.length > 0 && (
									<Card className="p-0 bg-neutral-950 border-neutral-900 sm:col-span-2">
										<CardContent className="p-4">
											<h4 className="font-semibold text-white mb-2">
												Produtoras
											</h4>
											<div className="flex flex-wrap gap-2">
												{movie.production_companies.map(
													(company) => (
														<Badge
															key={company.id}
															variant="secondary"
															className="bg-neutral-700 text-neutral-200"
														>
															{company.name}
														</Badge>
													),
												)}
											</div>
										</CardContent>
									</Card>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
