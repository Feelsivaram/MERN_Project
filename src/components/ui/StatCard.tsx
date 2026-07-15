interface Props {
	value: string;
	label: string;
}

export default function StatCard({ value, label }: Props) {
	return (
		<div
			className="
      rounded-3xl
      border
      border-slate-200
      dark:border-slate-800
      bg-white
      dark:bg-slate-900
      p-8
      text-center
      shadow-md
      hover:shadow-xl
      transition
    "
		>
			<div className="text-5xl font-black text-indigo-600">{value}</div>

			<div className="mt-3 text-slate-500">{label}</div>
		</div>
	);
}
