import Card from '../ui/Card';

interface SkillCardProps {
	name: string;
	level: number;
}

export default function SkillCard({ name, level }: SkillCardProps) {
	return (
		<Card className="p-6">
			<div className="flex items-center justify-between">
				<span className="font-semibold">{name}</span>

				<span className="text-indigo-600 font-bold">{level}%</span>
			</div>

			<div className="mt-4 h-3 rounded-full bg-slate-200 dark:bg-slate-800">
				<div
					className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 transition-all duration-700"
					style={{ width: `${level}%` }}
				/>
			</div>
		</Card>
	);
}
