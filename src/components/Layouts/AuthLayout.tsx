import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
	return (
		<main className="min-h-screen bg-slate-950 text-white">
			<section className="flex min-h-screen items-center justify-center px-4 py-8">
				<Outlet />
			</section>
		</main>
	);
}
