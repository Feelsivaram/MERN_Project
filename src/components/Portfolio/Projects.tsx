import { portfolio } from '../../data/portfolio';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from './ProjectCard';

export default function Projects() {
	return (
		<Section id="projects">
			<SectionTitle subtitle="Portfolio" title="Featured Projects" />

			<div className="grid gap-10 lg:grid-cols-3">
				{portfolio.projects.map((project) => (
					<ProjectCard key={project.title} project={project} />
				))}
			</div>
		</Section>
	);
}
