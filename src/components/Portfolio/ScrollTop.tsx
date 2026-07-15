import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ScrollTop() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		const listener = () => {
			setShow(window.scrollY > 500);
		};

		window.addEventListener('scroll', listener);

		return () => window.removeEventListener('scroll', listener);
	}, []);

	if (!show) return null;

	return (
		<button
			onClick={() =>
				window.scrollTo({
					top: 0,
					behavior: 'smooth',
				})
			}
			className="fixed bottom-8 right-8 z-50 rounded-full bg-indigo-600 p-4 text-white shadow-xl transition hover:scale-110"
			aria-label="Scroll to top"
		>
			<ArrowUp />
		</button>
	);
}
