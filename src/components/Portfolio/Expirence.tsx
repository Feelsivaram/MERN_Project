import { portfolio } from '../../data/portfolio';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import TimelineItem from './TimelineItem';

export default function Experience() {
	return (
		<Section id="experience">
			<SectionTitle subtitle="Career" title="Professional Journey" />

			<div className="space-y-20">
				{portfolio.experience.map((job, index) => (
					<TimelineItem
						key={job.company}
						item={job}
						reverse={index % 2 === 1}
					/>
				))}
			</div>
		</Section>
	);
}
