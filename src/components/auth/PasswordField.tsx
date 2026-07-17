import type { InputHTMLAttributes } from 'react';
import { useState } from 'react';

interface PasswordFieldProps extends Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'type'
> {
	label: string;
	error?: string;
}

export default function PasswordField({
	label,
	error,
	id,
	...props
}: PasswordFieldProps) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div>
			<label htmlFor={id} className="mb-2 block text-sm font-medium">
				{label}
			</label>

			<div className="relative">
				<input
					id={id}
					type={showPassword ? 'text' : 'password'}
					{...props}
					className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 pr-12 outline-none transition focus:border-indigo-500"
				/>

				<button
					type="button"
					aria-label={
						showPassword ? 'Hide password' : 'Show password'
					}
					onClick={() => setShowPassword((prev) => !prev)}
					className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
				>
					{showPassword ? '🙈' : '👁'}
				</button>
			</div>

			{error && <p className="mt-2 text-sm text-red-400">{error}</p>}
		</div>
	);
}
