import type { ReactNode } from 'react';

interface AuthCardProps {
	children: ReactNode;
}

export default function AuthCard({ children }: AuthCardProps) {
	return (
		<div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl backdrop-blur">
			{children}
		</div>
	);
}
