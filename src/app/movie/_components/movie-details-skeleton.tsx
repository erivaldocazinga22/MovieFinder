import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function MovieDetailsSkeleton() {
	return (
		<div className="min-h-screen">
			<div className="relative">
				{/* Backdrop */}
				<Skeleton className="absolute inset-0 h-[400px] w-full z-0" />
				<div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black/70" />

				{/* Content */}
				<div className="relative z-10 container mx-auto px-4 py-8">
					<Skeleton className="h-10 w-24 mb-6" />

					<div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] gap-8">
						{/* Poster */}
						<Skeleton className="w-full h-[500px] rounded-lg" />

						{/* Content */}
						<div className="space-y-6 w-full">
							{/* Título e tagline */}
							<div className="space-y-2">
								<Skeleton className="h-10 w-2/3" />
								<Skeleton className="h-6 w-1/2" />
							</div>

							{/* Meta info */}
							<div className="flex flex-wrap gap-4">
								<Skeleton className="h-6 w-12 rounded-full" />
								<Skeleton className="h-6 w-10 rounded-full" />
								<Skeleton className="h-6 w-14 rounded-full" />
								<Skeleton className="h-6 w-10 rounded-full" />
							</div>

							{/* Géneros */}
							<div className="flex gap-2">
								<Skeleton className="h-6 w-16 rounded-full" />
								<Skeleton className="h-6 w-14 rounded-full" />
								<Skeleton className="h-6 w-20 rounded-full" />
							</div>

							{/* Sinopse */}
							<Card className="bg-neutral-950 border-neutral-900">
								<CardContent className="p-6 space-y-3">
									<Skeleton className="h-6 w-32" />
									<Skeleton className="h-4 w-full" />
									<Skeleton className="h-4 w-full" />
									<Skeleton className="h-4 w-5/6" />
								</CardContent>
							</Card>

							{/* Budget & Revenue */}
							<div className="grid sm:grid-cols-2 gap-4">
								<Card className="bg-neutral-950 border-neutral-900">
									<CardContent className="p-4 space-y-2">
										<Skeleton className="h-4 w-24" />
										<Skeleton className="h-4 w-32" />
									</CardContent>
								</Card>
								<Card className="bg-neutral-950 border-neutral-900">
									<CardContent className="p-4 space-y-2">
										<Skeleton className="h-4 w-24" />
										<Skeleton className="h-4 w-32" />
									</CardContent>
								</Card>

								{/* Produtoras */}
								<Card className="sm:col-span-2 bg-neutral-950 border-neutral-900">
									<CardContent className="p-4 space-y-2">
										<Skeleton className="h-4 w-32" />
										<div className="flex gap-2">
											<Skeleton className="h-6 w-20 rounded-full" />
											<Skeleton className="h-6 w-24 rounded-full" />
											<Skeleton className="h-6 w-16 rounded-full" />
										</div>
									</CardContent>
								</Card>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
