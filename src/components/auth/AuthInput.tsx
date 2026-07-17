import type { InputHTMLAttributes } from 'react';

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
	error?: string;
}

export default function AuthInput({
	label,
	error,
	id,
	...props
}: AuthInputProps) {
	return (
		<div>
			<label htmlFor={id} className="mb-2 block text-sm font-medium">
				{label}
			</label>

			<input
				id={id}
				{...props}
				className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-indigo-500"
			/>

			{error && <p className="mt-2 text-sm text-red-400">{error}</p>}
		</div>
	);
}
