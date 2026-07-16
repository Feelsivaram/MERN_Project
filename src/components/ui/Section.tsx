import type { ReactNode } from 'react';
import Container from './Container';

interface Props {
	id?: string;
	children: ReactNode;
}

export default function Section({ id, children }: Props) {
	return (
		<section id={id} className="py-10 lg:py-16">
			<Container>{children}</Container>
		</section>
	);
}
