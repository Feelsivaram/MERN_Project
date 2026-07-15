import { GraduationCap, Trophy } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import Card from '../ui/Card';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function Achievements() {
	return (
		<Section>
			<SectionTitle subtitle="Highlights" title="Awards & Education" />

			<div className="grid gap-8 lg:grid-cols-2">
				<Card className="p-8">
					<div className="flex items-center gap-3">
						<Trophy className="text-yellow-500" />

						<h3 className="text-2xl font-bold">Achievements</h3>
					</div>

					<div className="mt-8 space-y-8">
						{portfolio.achievements.map((item) => (
							<div key={item.title}>
								<h4 className="font-bold">{item.title}</h4>

								<p className="text-indigo-600">
									{item.organization}
								</p>

								<p className="text-slate-500">{item.year}</p>

								<p className="mt-2 text-slate-600 dark:text-slate-400">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</Card>

				<Card className="p-8">
					<div className="flex items-center gap-3">
						<GraduationCap className="text-indigo-600" />

						<h3 className="text-2xl font-bold">Education</h3>
					</div>

					{portfolio.education.map((item) => (
						<div key={item.degree} className="mt-8">
							<h4 className="text-xl font-bold">{item.degree}</h4>

							<p className="mt-2">{item.specialization}</p>

							<p className="mt-2 text-slate-500">
								{item.college}
							</p>

							<p className="mt-2 font-semibold text-indigo-600">
								{item.year}
							</p>
						</div>
					))}
				</Card>
			</div>
		</Section>
	);
}
