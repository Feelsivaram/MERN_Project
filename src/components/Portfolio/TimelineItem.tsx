import { Briefcase, Calendar, MapPin } from 'lucide-react';
import type { Experience } from '../../types/portfolio';
import Card from '../ui/Card';

interface Props {
	item: Experience;
	reverse?: boolean;
}

export default function TimelineItem({ item, reverse }: Props) {
	return (
		<div
			className={`grid lg:grid-cols-2 gap-10 items-center ${
				reverse ? 'lg:[&>*:first-child]:order-2' : ''
			}`}
		>
			<Card className="p-8">
				<div className="flex items-center gap-3">
					<Briefcase className="text-indigo-600" />

					<h3 className="text-2xl font-bold">{item.role}</h3>
				</div>

				<h4 className="mt-3 text-xl font-semibold">{item.company}</h4>

				<div className="mt-6 flex flex-wrap gap-6 text-slate-500">
					<span className="flex items-center gap-2">
						<Calendar size={16} />

						{item.duration}
					</span>

					<span className="flex items-center gap-2">
						<MapPin size={16} />

						{item.location}
					</span>
				</div>

				<p className="mt-6 font-semibold">{item.project}</p>

				<ul className="mt-6 space-y-3">
					{item.description.map((point) => (
						<li key={point} className="flex gap-3">
							<span className="mt-2 h-2 w-2 rounded-full bg-indigo-600" />

							<span className="text-slate-600 dark:text-slate-400">
								{point}
							</span>
						</li>
					))}
				</ul>
			</Card>

			<div className="hidden lg:flex justify-center">
				<div className="h-72 w-1 rounded-full bg-gradient-to-b from-indigo-500 via-cyan-500 to-indigo-500" />
			</div>
		</div>
	);
}
