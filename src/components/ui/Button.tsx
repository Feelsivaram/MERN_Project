import type { ReactNode } from 'react';

interface ButtonProps {
	children: ReactNode;
	href?: string;
	variant?: 'primary' | 'secondary' | 'outline';
	icon?: ReactNode;
	onClick?: () => void;
}

const variants = {
	primary:
		'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/30',

	secondary:
		'bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90',

	outline:
		'border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800',
};

export default function Button({
	children,
	href,
	variant = 'primary',
	icon,
	onClick,
}: ButtonProps) {
	const classes = `
    inline-flex
    items-center
    gap-2
    rounded-xl
    px-6
    py-3
    font-semibold
    transition-all
    duration-300
    ${variants[variant]}
  `;

	if (href) {
		return (
			<a href={href} className={classes}>
				{icon}
				{children}
			</a>
		);
	}

	return (
		<button onClick={onClick} className={classes}>
			{icon}
			{children}
		</button>
	);
}
