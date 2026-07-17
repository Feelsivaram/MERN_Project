interface AuthHeaderProps {
	title: string;
	subtitle: string;
}

export default function AuthHeader({ title, subtitle }: AuthHeaderProps) {
	return (
		<header className="mb-8 text-center">
			<h1 className="text-3xl font-bold">{title}</h1>
			<p className="mt-2 text-sm text-slate-400">{subtitle}</p>
		</header>
	);
}
