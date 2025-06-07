import { Film } from "lucide-react";
import React from "react";

export const Header = () => {
	return (
		<header className="sticky top-0 z-50 px-4 md:px-0 w-full border-b border-dashed border-border/40 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-transparent">
			<div className="container mx-auto h-16 flex items-center justify-between">
				<div className="flex items-center gap-3">
					<Film className="w-8 h-8 text-red-600" />
					<h1 className="text-3xl font-bold text-white">
						MovieFinder
					</h1>
				</div>
			</div>
		</header>
	);
};
