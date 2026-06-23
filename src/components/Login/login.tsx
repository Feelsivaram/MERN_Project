import { useState } from 'react';

export default function LoginForm() {
	// 1. Manage form state
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [success, setSuccess] = useState('');

	// 2. Handle form submission
	const handleSubmit = (event: any) => {
		event.preventDefault(); // Prevents default page refresh
		setError('');
		setSuccess('');

		// Basic validation
		if (!email || !password) {
			setError('Please fill in all fields.');
			return;
		}

		// Mock API authentication check
		if (email === 'user@example.com' && password === 'password123') {
			setSuccess('Login successful!');
			console.log('Logged in successfully with:', { email });
		} else {
			setError('Invalid email or password.');
		}
	};

	return (
		<div style={styles.container}>
			<form onSubmit={handleSubmit} style={styles.form}>
				<h2 style={styles.heading}>Login</h2>

				{/* Display Error Message */}
				{error && <div style={styles.error}>{error}</div>}

				{/* Display Success Message */}
				{success && <div style={styles.success}>{success}</div>}

				<div style={styles.inputGroup}>
					<label htmlFor="email" style={styles.label}>
						Email Address
					</label>
					<input
						id="email"
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						style={styles.input}
						placeholder="user@example.com"
					/>
				</div>

				<div style={styles.inputGroup}>
					<label htmlFor="password" style={styles.label}>
						Password
					</label>
					<input
						id="password"
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						style={styles.input}
						placeholder="••••••••"
					/>
				</div>

				<button type="submit" style={styles.button}>
					Sign In
				</button>
			</form>
		</div>
	);
}

// Simple Inline CSS Styles
const styles: Record<string, React.CSSProperties> = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		backgroundColor: '#f5f5f5',
		fontFamily: 'Arial, sans-serif',
	},
	form: {
		backgroundColor: '#ffffff',
		padding: '30px',
		borderRadius: '8px',
		boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
		width: '100%',
		maxWidth: '400px',
	},
	heading: {
		marginBottom: '20px',
		textAlign: 'center',
		color: '#333',
	},
	inputGroup: {
		marginBottom: '15px',
	},
	label: {
		display: 'block',
		marginBottom: '5px',
		color: '#666',
		fontSize: '14px',
	},
	input: {
		width: '100%',
		padding: '10px',
		borderRadius: '4px',
		border: '1px solid #ccc',
		boxSizing: 'border-box',
		fontSize: '16px',
	},
	button: {
		width: '100%',
		padding: '12px',
		backgroundColor: '#007bff',
		color: 'white',
		border: 'none',
		borderRadius: '4px',
		fontSize: '16px',
		cursor: 'pointer',
		marginTop: '10px',
	},
	error: {
		color: '#721c24',
		backgroundColor: '#f8d7da',
		padding: '10px',
		borderRadius: '4px',
		marginBottom: '15px',
		fontSize: '14px',
		textAlign: 'center',
	},
	success: {
		color: '#155724',
		backgroundColor: '#d4edda',
		padding: '10px',
		borderRadius: '4px',
		marginBottom: '15px',
		fontSize: '14px',
		textAlign: 'center',
	},
};
