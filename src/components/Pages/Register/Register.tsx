import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import type { RegisterErrors, RegisterFormData } from '../../../types/auth';
import AuthHeader from '../../auth/AuthHeader';
import AuthInput from '../../auth/AuthInput';
import PasswordField from '../../auth/PasswordField';
import SubmitButton from '../../auth/SubmitButton';

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
				<AuthHeader
					title="Create Account"
					subtitle="Create your account."
				/>
				<form onSubmit={handleSubmit} className="space-y-5">
					<AuthInput
						id="fullName"
						label="Full Name"
						type="text"
						value={formData.fullName}
						onChange={(event) =>
							setFormData((previous) => ({
								...previous,
								fullName: event.target.value,
							}))
						}
						error={errors.fullName}
					/>

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

					<PasswordField
						id="confirmPassword"
						label="Confirm Password"
						value={formData.confirmPassword}
						onChange={(event) =>
							setFormData((prev) => ({
								...prev,
								confirmPassword: event.target.value,
							}))
						}
						error={errors.confirmPassword}
					/>
					<SubmitButton
						loading={loading}
						text="Create Account"
						loadingText="Creating Account..."
					/>
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
