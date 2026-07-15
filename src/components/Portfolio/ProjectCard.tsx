import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types/portfolio';
import Badge from '../ui/Badge';
import Card from '../ui/Card';

interface Props {
	project: Project;
}

export default function ProjectCard({ project }: Props) {
	return (
		<Card className="overflow-hidden">
			<div className="aspect-video overflow-hidden bg-slate-100 dark:bg-slate-800">
				<img
					src={project.image}
					alt={project.title}
					className="h-full w-full object-cover transition duration-500 hover:scale-110"
				/>
			</div>

			<div className="p-8">
				<h3 className="text-2xl font-bold">{project.title}</h3>

				<p className="mt-4 text-slate-600 dark:text-slate-400">
					{project.description}
				</p>

				<div className="mt-6 flex flex-wrap gap-3">
					{project.technologies.map((tech) => (
						<Badge key={tech} text={tech} />
					))}
				</div>

				<button className="mt-8 flex items-center gap-2 font-semibold text-indigo-600">
					View Details
					<ArrowUpRight />
				</button>
			</div>
		</Card>
	);
}
