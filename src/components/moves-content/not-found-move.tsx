"use client";
import { Film } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";

export const NotFoundMovie = () => {
	const router = useRouter();
	const handleClean = () => {
		router.push("/");
	};
	return (
		<div className="text-center py-12">
			<Film className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
			<h3 className="text-xl font-semibold text-white mb-2">
				Nenhum filme encontrado
			</h3>
			<p className="text-neutral-400 mb-4">
				Tente buscar com outros termos
			</p>
			<Button
				onClick={handleClean}
				variant="outline"
				className="border-neutral-700 text-white hover:bg-neutral-800"
			>
				Ver Filmes Populares
			</Button>
		</div>
	);
};
