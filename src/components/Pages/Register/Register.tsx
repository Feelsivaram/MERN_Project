import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { RegisterErrors, RegisterFormData } from '../../../types/auth';

export default function RegisterPage() {
	const navigate = useNavigate();

	const [formData, setFormData] = useState<RegisterFormData>({
		fullName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const [errors, setErrors] = useState<RegisterErrors>({});

	const [loading, setLoading] = useState(false);

	const [showPassword, setShowPassword] = useState(false);

	const [showConfirmPassword, setShowConfirmPassword] = useState(false);

	const validateForm = (): boolean => {
		const validationErrors: RegisterErrors = {};

		if (!formData.fullName.trim()) {
			validationErrors.fullName = 'Full name is required.';
		}

		if (!formData.email.trim()) {
			validationErrors.email = 'Email is required.';
		}

		if (formData.password.length < 6) {
			validationErrors.password =
				'Password must contain at least 6 characters.';
		}

		if (formData.confirmPassword !== formData.password) {
			validationErrors.confirmPassword = 'Passwords do not match.';
		}

		setErrors(validationErrors);

		return Object.keys(validationErrors).length === 0;
	};

	const register = async () => {
		return new Promise<boolean>((resolve) => {
			setTimeout(() => {
				resolve(true);
			}, 1500);
		});
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		if (!validateForm()) return;

		try {
			setLoading(true);

			const success = await register();

			if (success) {
				navigate('/login', {
					replace: true,
				});
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="w-full max-w-md">
			{/* Registration Card */}
			<div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl backdrop-blur">
				<header className="mb-8 text-center">
					<h1 className="text-3xl font-bold">Create Account</h1>

					<p className="mt-2 text-sm text-slate-400">
						Create your account to continue.
					</p>
				</header>
				<form onSubmit={handleSubmit} className="space-y-5">
					<div>
						<label
							htmlFor="fullName"
							className="mb-2 block text-sm font-medium"
						>
							Full Name
						</label>

						<input
							id="fullName"
							type="text"
							value={formData.fullName}
							onChange={(event) =>
								setFormData((previous) => ({
									...previous,
									fullName: event.target.value,
								}))
							}
							className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-indigo-500"
						/>

						{errors.fullName && (
							<p className="mt-2 text-sm text-red-400">
								{errors.fullName}
							</p>
						)}
					</div>
					<div>
						<label
							htmlFor="Email"
							className="mb-2 block text-sm font-medium"
						>
							Email
						</label>

						<input
							id="Email"
							type="email"
							value={formData.email}
							onChange={(event) =>
								setFormData((previous) => ({
									...previous,
									email: event.target.value,
								}))
							}
							className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-indigo-500"
						/>

						{errors.email && (
							<p className="mt-2 text-sm text-red-400">
								{errors.email}
							</p>
						)}
					</div>
					<div>
						<label
							htmlFor="password"
							className="mb-2 block text-sm font-medium"
						>
							Password
						</label>

						<input
							id="password"
							type="password"
							value={formData.password}
							onChange={(event) =>
								setFormData((previous) => ({
									...previous,
									password: event.target.value,
								}))
							}
							className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-indigo-500"
						/>

						<button
							type="button"
							aria-label={
								showPassword ? 'Hide password' : 'Show password'
							}
							onClick={() =>
								setShowPassword((previous) => !previous)
							}
							className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-white"
						>
							{showPassword ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 3l18 18M10.58 10.58A2 2 0 0012 14a2 2 0 001.42-.58M9.88 5.09A9.77 9.77 0 0112 5c5 0 9 7 9 7a16.06 16.06 0 01-4.35 4.95M6.1 6.1A15.03 15.03 0 003 12s4 7 9 7a8.96 8.96 0 003.17-.57"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M2.46 12C3.73 7.94 7.52 5 12 5s8.27 2.94 9.54 7c-1.27 4.06-5.06 7-9.54 7S3.73 16.06 2.46 12z"
									/>
								</svg>
							)}
						</button>
						{errors.password && (
							<p className="mt-2 text-sm text-red-400">
								{errors.password}
							</p>
						)}
					</div>
					<div>
						<label
							htmlFor="confirmPassword"
							className="mb-2 block text-sm font-medium"
						>
							Confirm Password
						</label>

						<input
							id="confirmPassword"
							type={showConfirmPassword ? 'text' : 'password'}
							value={formData.confirmPassword}
							onChange={(event) =>
								setFormData((previous) => ({
									...previous,
									confirmPassword: event.target.value,
								}))
							}
							className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 outline-none transition focus:border-indigo-500"
						/>

						<button
							type="button"
							aria-label={
								showPassword
									? 'Hide Confirm Password'
									: 'Show Confirm Password'
							}
							onClick={() =>
								setShowConfirmPassword((previous) => !previous)
							}
							className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-white"
						>
							{showPassword ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 3l18 18M10.58 10.58A2 2 0 0012 14a2 2 0 001.42-.58M9.88 5.09A9.77 9.77 0 0112 5c5 0 9 7 9 7a16.06 16.06 0 01-4.35 4.95M6.1 6.1A15.03 15.03 0 003 12s4 7 9 7a8.96 8.96 0 003.17-.57"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M2.46 12C3.73 7.94 7.52 5 12 5s8.27 2.94 9.54 7c-1.27 4.06-5.06 7-9.54 7S3.73 16.06 2.46 12z"
									/>
								</svg>
							)}
						</button>
						{errors.confirmPassword && (
							<p className="mt-2 text-sm text-red-400">
								{errors.confirmPassword}
							</p>
						)}
					</div>
					<button
						type="submit"
						disabled={loading}
						className="flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 font-semibold transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-60"
					>
						{loading ? (
							<>
								<svg
									className="mr-3 h-5 w-5 animate-spin"
									viewBox="0 0 24 24"
									fill="none"
								>
									<circle
										cx="12"
										cy="12"
										r="10"
										stroke="currentColor"
										strokeWidth="3"
										opacity="0.25"
									/>
									<path
										d="M22 12a10 10 0 00-10-10"
										stroke="currentColor"
										strokeWidth="3"
									/>
								</svg>
								Signing In...
							</>
						) : (
							'Sign In'
						)}
					</button>
					<p className="text-center text-sm text-slate-400">
						Already have an account?
						<Link
							to="/login"
							className="ml-2 font-medium text-indigo-400 hover:text-indigo-300"
						>
							Sign In
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
}
