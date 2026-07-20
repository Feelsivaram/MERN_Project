import type { ToastVariant } from './toast.types';

export const TOAST_CONFIG = {
	duration: 5000,
	maxVisible: 3,
	pauseOnHover: true,
	position: 'top-right',
} as const;

export const DEFAULT_TITLES: Record<ToastVariant, string> = {
	success: 'Success',
	error: 'Error',
	warning: 'Warning',
	info: 'Information',
};
