import { LoadingSpinner } from "@/components/loading-spinner";
import React from "react";

export default function LoadingPage() {
	return (
		<div className="h-screen flex items-center justify-center">
			<div className="flex items-center gap-2">
				<LoadingSpinner />
				<span>Carregando...</span>
			</div>
		</div>
	);
}
