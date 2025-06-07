import type { Movie } from "@/types/movie";
import { Calendar, Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";

interface CardMovieProps {
	data: Movie;
}

export const CardMovie = ({ data: movie }: CardMovieProps) => {
	return (
		<Card className="group p-0 overflow-hidden cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-2xl bg-neutral-900 border-neutral-800 hover:border-red-600/50">
			<CardContent className="p-0">
				<div className="relative aspect-[2/3] overflow-hidden rounded-t-lg">
					<Image
						src={
							movie.poster_path
								? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
								: "/placeholder.jpg"
						}
						alt={movie.title}
						fill
						className="object-cover transition-transform duration-300 group-hover:scale-110"
						sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

					{movie.vote_average > 0 && (
						<Badge className="absolute top-2 right-2 bg-yellow-500/90 text-black font-semibold">
							<Star className="w-3 h-3 mr-1 fill-current" />
							{movie.vote_average.toFixed(1)}
						</Badge>
					)}
				</div>

				<div className="p-4">
					<h3 className="font-semibold text-white mb-2 line-clamp-1 group-hover:text-red-500 transition-colors">
						{movie.title}
					</h3>

					<div className="flex items-center gap-2 text-sm text-neutral-300">
						<Calendar className="w-4 h-4" />
						<span>
							{new Date(movie.release_date).getFullYear() ||
								"N/A"}
						</span>
					</div>
				</div>
			</CardContent>
		</Card>
	);
};
