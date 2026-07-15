import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
	const [dark, setDark] = useState(localStorage.theme === 'dark');

	useEffect(() => {
		if (dark) {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
		}
	}, [dark]);

	return (
		<button
			onClick={() => setDark(!dark)}
			className="rounded-xl border p-2"
			aria-label="Toggle theme"
		>
			{dark ? <Sun /> : <Moon />}
		</button>
	);
}
