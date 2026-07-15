import type { ReactNode } from 'react';

interface Props {
	children: ReactNode;
	className?: string;
}

export default function Card({ children, className = '' }: Props) {
	return (
		<div
			className={`
      rounded-3xl
      border
      border-slate-200
      dark:border-slate-800
      bg-white/80
      dark:bg-slate-900/70
      backdrop-blur
      shadow-lg
      hover:-translate-y-1
      hover:shadow-2xl
      transition-all
      duration-300
      ${className}
    `}
		>
			{children}
		</div>
	);
}
