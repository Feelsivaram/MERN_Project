import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { LoginErrors, LoginFormData } from '../../../types/auth';

export default function LoginPage() {
	const navigate = useNavigate();

	const [formData, setFormData] = useState<LoginFormData>({
		email: '',
		password: '',
	});

	const [errors, setErrors] = useState<LoginErrors>({});

	const [showPassword, setShowPassword] = useState(false);
	const [loading, setLoading] = useState(false);

	const validateForm = (): boolean => {
		const validationErrors: LoginErrors = {};

		if (!formData.email.trim()) {
			validationErrors.email = 'Email is required.';
		} else if (
			!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
		) {
			validationErrors.email = 'Please enter a valid email address.';
		}

		if (!formData.password.trim()) {
			validationErrors.password = 'Password is required.';
		} else if (formData.password.length < 6) {
			validationErrors.password =
				'Password must contain at least 6 characters.';
		}

		setErrors(validationErrors);

		return Object.keys(validationErrors).length === 0;
	};

	const login = async (): Promise<boolean> => {
		return new Promise((resolve) => {
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

			const success = await login();

			if (success) {
				navigate('/dashboard', {
					replace: true,
				});
			}
		} finally {
			setLoading(false);
		}
	};

	return (
		<section className="w-full max-w-md">
			{/* Login Card goes here */}
			<div className="rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl backdrop-blur">
				<header className="mb-8 text-center">
					<h1 className="text-3xl font-bold tracking-tight">
						Welcome Back
					</h1>

					<p className="mt-2 text-sm text-slate-400">
						Sign in to continue.
					</p>
				</header>
				<form onSubmit={handleSubmit} className="space-y-6">
					<div>
						<label
							htmlFor="email"
							className="mb-2 block text-sm font-medium"
						>
							Email
						</label>

						<input
							id="email"
							type="email"
							autoComplete="email"
							value={formData.email}
							onChange={(e) =>
								setFormData((prev) => ({
									...prev,
									email: e.target.value,
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
						<div className="relative">
							<input
								id="password"
								type={showPassword ? 'text' : 'password'}
								autoComplete="current-password"
								value={formData.password}
								onChange={(event) =>
									setFormData((previous) => ({
										...previous,
										password: event.target.value,
									}))
								}
								className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 pr-12 outline-none transition focus:border-indigo-500"
							/>

							<button
								type="button"
								aria-label={
									showPassword
										? 'Hide password'
										: 'Show password'
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
						</div>

						{errors.password && (
							<p className="mt-2 text-sm text-red-400">
								{errors.password}
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
					<div className="flex items-center justify-between text-sm">
						<label className="flex items-center gap-2">
							<input type="checkbox" />
							Remember me
						</label>

						<button
							type="button"
							className="text-indigo-400 hover:text-indigo-300"
						>
							Forgot password?
						</button>
					</div>
					<p className="text-center text-sm text-slate-400">
						Don't have an account?
						<Link
							to="/register"
							className="ml-2 font-medium text-indigo-400 hover:text-indigo-300"
						>
							Create one
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
}
