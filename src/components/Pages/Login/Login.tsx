import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';
import type { LoginErrors, LoginFormData } from '../../../types/auth';
import AuthHeader from '../../auth/AuthHeader';
import AuthInput from '../../auth/AuthInput';
import PasswordField from '../../auth/PasswordField';
import SubmitButton from '../../auth/SubmitButton';

export default function LoginPage() {
	const navigate = useNavigate();

	const { login } = useAuth();

	const [formData, setFormData] = useState<LoginFormData>({
		email: '',
		password: '',
	});

	const [errors, setErrors] = useState<LoginErrors>({});

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

	const authenticateUser = async (): Promise<boolean> => {
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

			const success = await authenticateUser();

			if (success) {
				login({
					id: '1',
					name: 'John Doe',
					email: formData.email,
				});

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
				<AuthHeader
					title="Welcome Back"
					subtitle="Sign in to continue."
				/>
				<form onSubmit={handleSubmit} className="space-y-6">
					<AuthInput
						id="email"
						label="Email"
						type="email"
						value={formData.email}
						onChange={(event) =>
							setFormData((previous) => ({
								...previous,
								email: event.target.value,
							}))
						}
						error={errors.email}
					/>
					<PasswordField
						id="password"
						label="Password"
						value={formData.password}
						onChange={(event) =>
							setFormData((prev) => ({
								...prev,
								password: event.target.value,
							}))
						}
						error={errors.password}
					/>
					<SubmitButton
						loading={loading}
						text="Sign In"
						loadingText="Signing In..."
					/>
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
