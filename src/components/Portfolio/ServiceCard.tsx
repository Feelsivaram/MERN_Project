import type { ReactNode } from 'react';
import Card from '../ui/Card';

interface ServiceCardProps {
	title: string;
	description: string;
	icon: ReactNode;
}

export default function ServiceCard({
	title,
	description,
	icon,
}: ServiceCardProps) {
	return (
		<Card className="group p-8">
			<div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white dark:bg-indigo-500/10 dark:text-indigo-400">
				{icon}
			</div>

			<h3 className="mt-6 text-2xl font-bold">{title}</h3>

			<p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">
				{description}
			</p>
		</Card>
	);
}
