import { portfolio } from '../../data/portfolio';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import SkillCard from './SkillCard';

export default function Skills() {
	return (
		<Section id="skills">
			<SectionTitle subtitle="Skills" title="Technologies I Work With" />

			<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
				{portfolio.skills.map((skill) => (
					<SkillCard
						key={skill.name}
						name={skill.name}
						level={skill.level}
					/>
				))}
			</div>
		</Section>
	);
}
