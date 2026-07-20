import { DEFAULT_TITLES, TOAST_CONFIG } from './toast.config';
import type { ToastInput, ToastItem, ToastVariant } from './toast.types';

export function generateToastId(): string {
	return crypto.randomUUID();
}

export function isToastString(input: ToastInput): input is string {
	return typeof input === 'string';
}

export function normalizeToast(
	variant: ToastVariant,
	input: ToastInput,
): ToastItem {
	if (isToastString(input)) {
		return {
			id: generateToastId(),
			variant,
			title: DEFAULT_TITLES[variant],
			description: input,
			duration: TOAST_CONFIG.duration,
		};
	}

	return {
		id: generateToastId(),
		variant,
		title: input.title,
		description: input.description,
		duration: input.duration ?? TOAST_CONFIG.duration,
	};
}
