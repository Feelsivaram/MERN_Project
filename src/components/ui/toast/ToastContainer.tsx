import ToastItem from './ToastItem';
import type { ToastItem as ToastItemType } from './toast.types';

interface ToastContainerProps {
	toasts: ToastItemType[];
	countdowns: Record<string, number>;
	onClose: (id: string) => void;
}

export default function ToastContainer({
	toasts,
	countdowns,
	onClose,
}: ToastContainerProps) {
	if (toasts.length === 0) {
		return null;
	}

	return (
		<section
			aria-label="Notifications"
			className=" fixed top-4 right-4 z-50 flex flex-col gap-3 w-[calc(100vw-2rem)] max-w-sm sm:top-6 sm:right-6 "
		>
			{toasts.map((toast) => (
				<ToastItem
					key={toast.id}
					toast={toast}
					countdown={countdowns[toast.id] ?? 5}
					onClose={onClose}
				/>
			))}
		</section>
	);
}
