interface Props {
	title: string;
	subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: Props) {
	return (
		<div className="mb-16 max-w-3xl">
			<p className="text-indigo-600 font-semibold mb-3">{subtitle}</p>

			<h2
				className="
        text-4xl
        md:text-5xl
        font-black
        tracking-tight
      "
			>
				{title}
			</h2>
		</div>
	);
}
