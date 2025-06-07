import type { MovieDetails } from "@/types/movie";
import Image from "next/image";
import React from "react";
import { Card } from "../../../components/ui/card";

interface CardMovieDetailsProps {
	data: MovieDetails;
}

export const CardMovieDetails = ({ data: movie }: CardMovieDetailsProps) => {
	return (
		<Card className="overflow-hidden p-0 bg-white/10 backdrop-blur-sm border-white/20">
			<div className="relative aspect-[2/3]">
				<Image
					src={
						movie.poster_path
							? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
							: "/placeholder.jpg"
					}
					alt={movie.title}
					fill
					className="object-cover"
					sizes="(max-width: 768px) 300px, 400px"
				/>
			</div>
		</Card>
	);
};
