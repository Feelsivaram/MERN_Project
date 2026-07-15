interface BadgeProps {
	text: string;
}

export default function Badge({ text }: BadgeProps) {
	return (
		<span
			className="
      inline-flex
      rounded-full
      bg-indigo-100
      dark:bg-indigo-500/20
      px-4
      py-1.5
      text-sm
      font-medium
      text-indigo-700
      dark:text-indigo-300
    "
		>
			{text}
		</span>
	);
}
