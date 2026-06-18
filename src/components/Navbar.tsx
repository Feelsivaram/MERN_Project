import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	return (
		<nav className="sticky top-0 z-50 px-4 py-4">
			<div className="mx-auto max-w-7xl">
				{/* Glossy Container */}
				<div className="relative overflow-hidden rounded-2xl bg-white/10">
					{/* Glossy Highlight */}
					<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/25 via-white/5 to-transparent" />

					<div className="relative flex items-center justify-between px-6 py-4">
						{/* Logo */}
						<a href="/" className="text-xl font-bold text-white">
							Logo
						</a>

						{/* Desktop Menu */}
						<div className="hidden md:flex items-center gap-8">
							<a
								href="#"
								className="text-white/90 transition hover:text-white"
							>
								Home
							</a>
							<a
								href="#"
								className="text-white/90 transition hover:text-white"
							>
								About
							</a>
							<a
								href="#"
								className="text-white/90 transition hover:text-white"
							>
								Services
							</a>
							<a
								href="#"
								className="text-white/90 transition hover:text-white"
							>
								Contact
							</a>

							<button className="rounded-full bg-white/20 px-5 py-2 text-white backdrop-blur-md transition hover:bg-white/30">
								Get Started
							</button>
						</div>

						{/* Mobile Toggle */}
						<button
							onClick={() => setOpen(!open)}
							className="text-white md:hidden"
						>
							{open ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>

					{/* Mobile Menu */}
					<div
						className={`overflow-hidden transition-all duration-300 md:hidden ${
							open ? 'max-h-80' : 'max-h-0'
						}`}
					>
						<div className="border-t border-white/10 px-6 py-4">
							<div className="flex flex-col gap-4">
								<a href="#" className="text-white/90">
									Home
								</a>
								<a href="#" className="text-white/90">
									About
								</a>
								<a href="#" className="text-white/90">
									Services
								</a>
								<a href="#" className="text-white/90">
									Contact
								</a>

								<button className="mt-2 rounded-full bg-white/20 px-5 py-2 text-white backdrop-blur-md">
									Get Started
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
