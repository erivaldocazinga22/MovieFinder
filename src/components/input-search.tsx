"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useQueryState } from "nuqs";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export const InputSearch = () => {
	const [searchQuery, setSearchQuery] = useQueryState("search", {
		defaultValue: "",
	});
	const router = useRouter();

	const handleSearch = async (e: React.FormEvent) => {
		e.preventDefault();
		const query = searchQuery.trim();
		if (query) {
			router.push(`/?search=${encodeURIComponent(query)}`);
		} else {
			router.push("/");
		}
	};

	const handleClean = () => {
		router.push("/");
	};

	return (
		<form onSubmit={handleSearch} className="relative max-w-3xl mx-auto">
			<div className="relative">
				<Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
				<Input
					type="search"
					placeholder="Pesquisar por filmes..."
					className="pl-10 py-6 text-base"
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>
			<div className="absolute right-1 top-1/2 -translate-y-1/2 space-x-2">
				<Button
					type="submit"
					className=" rounded-sm bg-gradient-to-r from-red-600 via-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white"
				>
					Pesquisar
				</Button>
				{searchQuery.trim() && (
					<Button
						type="button"
						variant="outline"
						onClick={handleClean}
						className=" rounded-sm text-white"
					>
						Limpar
					</Button>
				)}
			</div>
		</form>
	);
};
