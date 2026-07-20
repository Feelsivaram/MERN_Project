import {
	AlertCircle,
	AlertTriangle,
	CheckCircle2,
	Info,
	X,
} from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { TOAST_CONFIG } from './toast.config';
import type { ToastItem as ToastItemType } from './toast.types';

interface ToastItemProps {
	toast: ToastItemType;
	onClose: (id: string) => void;
}

const VARIANTS = {
	success: {
		icon: CheckCircle2,
		border: 'border-emerald-500',
		iconColor: 'text-emerald-500',
	},
	error: {
		icon: AlertCircle,
		border: 'border-red-500',
		iconColor: 'text-red-500',
	},
	warning: {
		icon: AlertTriangle,
		border: 'border-amber-500',
		iconColor: 'text-amber-500',
	},
	info: {
		icon: Info,
		border: 'border-sky-500',
		iconColor: 'text-sky-500',
	},
} as const;

export default function ToastItem({ toast, onClose }: ToastItemProps) {
	const variant = VARIANTS[toast.variant];
	const Icon = variant.icon;

	// -----------------------------------
	// Countdown State
	// -----------------------------------

	const [countdown, setCountdown] = useState(
		Math.ceil(toast.duration / 1000),
	);

	const [isPaused, setIsPaused] = useState(false);

	const intervalRef = useRef<number | null>(null);

	// -----------------------------------
	// Countdown Logic
	// -----------------------------------

	useEffect(() => {
		if (isPaused) return;

		intervalRef.current = window.setInterval(() => {
			setCountdown((previous) => {
				if (previous <= 1) {
					window.clearInterval(intervalRef.current!);
					onClose(toast.id);
					return 0;
				}

				return previous - 1;
			});
		}, 1000);

		return () => {
			if (intervalRef.current) {
				window.clearInterval(intervalRef.current);
			}
		};
	}, [isPaused, onClose, toast.id]);

	return (
		<article
			role={toast.variant === 'error' ? 'alert' : 'status'}
			aria-live={toast.variant === 'error' ? 'assertive' : 'polite'}
			onMouseEnter={() => {
				if (TOAST_CONFIG.pauseOnHover) {
					setIsPaused(true);
				}
			}}
			onMouseLeave={() => {
				if (TOAST_CONFIG.pauseOnHover) {
					setIsPaused(false);
				}
			}}
			className={`
        w-full
        rounded-2xl
        border-l-4
        ${variant.border}
        bg-white
        shadow-xl
        ring-1
        ring-slate-200
        dark:bg-slate-900
        dark:ring-slate-800
      `}
		>
			<div className="flex items-start gap-4 p-5">
				<Icon
					size={22}
					className={`mt-0.5 flex-shrink-0 ${variant.iconColor}`}
				/>

				<div className="min-w-0 flex-1">
					<h3 className="text-sm font-semibold text-slate-900 dark:text-white">
						{toast.title}
					</h3>

					{toast.description && (
						<p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-400">
							{toast.description}
						</p>
					)}
				</div>

				<div className="flex items-center gap-3">
					<span
						className="
              rounded-full
              bg-slate-100
              px-2.5
              py-1
              text-xs
              font-medium
              dark:bg-slate-800
            "
					>
						{countdown}s
					</span>

					<button
						type="button"
						onClick={() => onClose(toast.id)}
						className="
              rounded-lg
              p-1
              transition-colors
              hover:bg-slate-100
              dark:hover:bg-slate-800
            "
						aria-label="Close notification"
					>
						<X size={18} />
					</button>
				</div>
			</div>
		</article>
	);
}
