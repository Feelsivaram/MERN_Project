import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import Button from '../ui/Button';
import Container from '../ui/Container';

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [dark, setDark] = useState(false);

	const links = ['About', 'Skills', 'Experience', 'Projects', 'Contact'];

	return (
		<header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/80 backdrop-blur-lg dark:border-slate-800 dark:bg-slate-950/80">
			<Container>
				<div className="flex h-20 items-center justify-between">
					<a href="#" className="text-2xl font-black tracking-tight">
						Siva<span className="text-indigo-600">.</span>
					</a>

					<nav className="hidden items-center gap-8 md:flex">
						{links.map((item) => (
							<a
								key={item}
								href={`#${item.toLowerCase()}`}
								className="text-sm font-medium text-slate-600 transition-colors hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
							>
								{item}
							</a>
						))}
					</nav>

					<div className="hidden items-center gap-3 md:flex">
						<button
							aria-label="Toggle dark mode"
							onClick={() => {
								setDark((prev) => !prev);
								document.documentElement.classList.toggle(
									'dark',
								);
							}}
							className="rounded-xl border border-slate-200 p-2 transition hover:bg-slate-100 dark:border-slate-700 dark:hover:bg-slate-800"
						>
							{dark ? <Sun size={18} /> : <Moon size={18} />}
						</button>

						<Button href="#contact">Hire Me</Button>
					</div>

					<button
						className="rounded-xl border border-slate-200 p-2 md:hidden dark:border-slate-700"
						onClick={() => setOpen((prev) => !prev)}
						aria-label="Toggle navigation"
					>
						{open ? <X size={22} /> : <Menu size={22} />}
					</button>
				</div>

				{open && (
					<nav className="flex flex-col gap-4 border-t border-slate-200 py-4 md:hidden dark:border-slate-800">
						{links.map((item) => (
							<a
								key={item}
								href={`#${item.toLowerCase()}`}
								className="text-sm font-medium"
								onClick={() => setOpen(false)}
							>
								{item}
							</a>
						))}

						<Button href="#contact">Hire Me</Button>
					</nav>
				)}
			</Container>
		</header>
	);
}
