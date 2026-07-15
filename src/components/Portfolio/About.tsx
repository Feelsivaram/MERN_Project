import { portfolio } from '../../data/portfolio';
import Badge from '../ui/Badge';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';

export default function About() {
	return (
		<Section id="about">
			<div className="grid gap-16 lg:grid-cols-2">
				<div>
					<SectionTitle
						subtitle="About"
						title={portfolio.about.title}
					/>

					<div className="space-y-6">
						{portfolio.about.description.map((paragraph) => (
							<p
								key={paragraph}
								className="text-lg leading-8 text-slate-600 dark:text-slate-400"
							>
								{paragraph}
							</p>
						))}
					</div>
				</div>

				<div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 p-10 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
					<h3 className="text-3xl font-bold">Core Technologies</h3>

					<div className="mt-10 flex flex-wrap gap-4">
						{portfolio.skills.slice(0, 12).map((skill) => (
							<Badge key={skill.name} text={skill.name} />
						))}
					</div>

					<div className="mt-12 grid grid-cols-2 gap-6">
						<div>
							<p className="text-5xl font-black text-indigo-600">
								11+
							</p>

							<span className="text-slate-500">
								Years Experience
							</span>
						</div>

						<div>
							<p className="text-5xl font-black text-indigo-600">
								40+
							</p>

							<span className="text-slate-500">
								Enterprise Projects
							</span>
						</div>

						<div>
							<p className="text-5xl font-black text-indigo-600">
								6+
							</p>

							<span className="text-slate-500">
								Organizations
							</span>
						</div>

						<div>
							<p className="text-5xl font-black text-indigo-600">
								100%
							</p>

							<span className="text-slate-500">Client Focus</span>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}
