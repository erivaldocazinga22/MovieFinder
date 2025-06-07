import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

interface ErrorMessageProps {
	message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
	return (
		<div className="container mx-auto px-4 py-8">
			<Alert className="bg-red-500/10 border-red-500/20 text-red-300 max-w-md mx-auto">
				<AlertCircle className="h-4 w-4" />
				<AlertDescription>{message}</AlertDescription>
			</Alert>
		</div>
	);
}
