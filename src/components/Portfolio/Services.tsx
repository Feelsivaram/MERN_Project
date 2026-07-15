import { Code2, MonitorSmartphone, Server, Users } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import ServiceCard from './ServiceCard';

const icons = [
	<MonitorSmartphone size={28} />,
	<Server size={28} />,
	<Code2 size={28} />,
	<Users size={28} />,
];

export default function Services() {
	return (
		<Section id="services">
			<SectionTitle subtitle="Services" title="How I Can Help" />

			<div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
				{portfolio.services.map((service, index) => (
					<ServiceCard
						key={service.title}
						title={service.title}
						description={service.description}
						icon={icons[index]}
					/>
				))}
			</div>
		</Section>
	);
}
