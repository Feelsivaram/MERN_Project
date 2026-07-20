export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface ToastOptions {
	title: string;
	description?: string;
	duration?: number;
}

export type ToastInput = string | ToastOptions;

export interface ToastItem {
	id: string;
	variant: ToastVariant;
	title: string;
	description?: string;
	duration: number;
}
