export default function Footer() {
	return (
		<footer className="border-t border-slate-200 py-10 dark:border-slate-800">
			<div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-slate-500 md:flex-row">
				<p>
					© {new Date().getFullYear()} Siva Ram Sunnapu. All Rights
					Reserved.
				</p>

				<p>Built with React • TypeScript • Tailwind CSS</p>
			</div>
		</footer>
	);
}
