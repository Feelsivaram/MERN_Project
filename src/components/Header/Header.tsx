import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import getLoginDetails from '../Service/commonLogics';

getLoginDetails(); // calling common logics

export default function Header() {
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
							<Link
								to="/"
								className="text-white/90 transition hover:text-white"
							>
								Home
							</Link>
							<Link
								to="/about"
								className="text-white/90 transition hover:text-white"
							>
								About
							</Link>
							<Link
								to="/contact"
								className="text-white/90 transition hover:text-white"
							>
								Contact
							</Link>
							<Link
								to="/todo"
								className="text-white/90 transition hover:text-white"
							>
								ToDo
							</Link>

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
// import { useState } from 'react';

// export default function Header() {
// 	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

// 	return (
// 		<div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-500 selection:text-white">
// 			{/* Navigation */}
// 			<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
// 				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 					<div className="flex justify-between h-16 items-center">
// 						<div className="flex-shrink-0 flex items-center">
// 							<span className="text-2xl font-black tracking-tight text-indigo-600">
// 								⚡ CoreUI
// 							</span>
// 						</div>
// 						<div className="hidden md:flex space-x-8 font-medium text-slate-600">
// 							<a
// 								href="#features"
// 								className="hover:text-indigo-600 transition"
// 							>
// 								Features
// 							</a>
// 							<a
// 								href="#pricing"
// 								className="hover:text-indigo-600 transition"
// 							>
// 								Pricing
// 							</a>
// 							<a
// 								href="#testimonials"
// 								className="hover:text-indigo-600 transition"
// 							>
// 								Reviews
// 							</a>
// 						</div>
// 						<div className="hidden md:flex items-center">
// 							<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-medium shadow-sm hover:shadow transition">
// 								Get Started
// 							</button>
// 						</div>
// 						{/* Mobile Toggle */}
// 						<div className="md:hidden">
// 							<button
// 								onClick={() =>
// 									setMobileMenuOpen(!mobileMenuOpen)
// 								}
// 								className="p-2 text-slate-600"
// 							>
// 								<svg
// 									className="h-6 w-6"
// 									fill="none"
// 									viewBox="0 0 24 24"
// 									stroke="currentColor"
// 								>
// 									{mobileMenuOpen ? (
// 										<path
// 											strokeLinecap="round"
// 											strokeLinejoin="round"
// 											strokeWidth={2}
// 											d="M6 18L18 6M6 6l12 12"
// 										/>
// 									) : (
// 										<path
// 											strokeLinecap="round"
// 											strokeLinejoin="round"
// 											strokeWidth={2}
// 											d="M4 6h16M4 12h16M4 18h16"
// 										/>
// 									)}
// 								</svg>
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 				{/* Mobile Menu */}
// 				{mobileMenuOpen && (
// 					<div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-2">
// 						<a
// 							href="#features"
// 							className="block py-2 text-slate-600"
// 						>
// 							Features
// 						</a>
// 						<a
// 							href="#pricing"
// 							className="block py-2 text-slate-600"
// 						>
// 							Pricing
// 						</a>
// 						<a
// 							href="#testimonials"
// 							className="block py-2 text-slate-600"
// 						>
// 							Reviews
// 						</a>
// 						<button className="w-full bg-indigo-600 text-white py-2 rounded-lg font-medium">
// 							Get Started
// 						</button>
// 					</div>
// 				)}
// 			</nav>

// 			{/* Hero Section */}
// 			<header className="relative py-20 lg:py-32 overflow-hidden">
// 				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
// 					<h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900 max-w-3xl mx-auto leading-tight">
// 						Build your website{' '}
// 						<span className="text-indigo-600">10x faster</span>{' '}
// 						using React & Tailwind
// 					</h1>
// 					<p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto">
// 						Stop starting from scratch. Utilize conversion-optimized
// 						sections engineered to turn visitors into modern users.
// 					</p>
// 					<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
// 						<button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition transform hover:-translate-y-0.5">
// 							Start Free Trial
// 						</button>
// 						<button className="bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 px-8 py-4 rounded-xl font-semibold transition">
// 							Watch Demo
// 						</button>
// 					</div>
// 				</div>
// 			</header>

// 			{/* Features Grid */}
// 			<section
// 				id="features"
// 				className="py-20 bg-white border-y border-slate-200"
// 			>
// 				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// 					<div className="text-center max-w-3xl mx-auto mb-16">
// 						<h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
// 							Everything you need to scale
// 						</h2>
// 						<p className="mt-4 text-slate-600">
// 							Production-ready setups to keep your focus strictly
// 							on features.
// 						</p>
// 					</div>
// 					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// 						{[
// 							{
// 								title: 'Lightning Fast Performance',
// 								desc: 'Built with Vite & React for ultra-quick load times.',
// 							},
// 							{
// 								title: 'Fully Responsive',
// 								desc: 'Every view layout adapts dynamically to any device screen perfectly.',
// 							},
// 							{
// 								title: 'Component Driven',
// 								desc: 'Easily modularize blocks into clean, isolated components.',
// 							},
// 						].map((feat, idx) => (
// 							<div
// 								key={idx}
// 								className="p-8 rounded-2xl border border-slate-200 bg-slate-50 hover:shadow-md transition"
// 							>
// 								<div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold text-xl mb-6">
// 									{idx + 1}
// 								</div>
// 								<h3 className="text-xl font-bold text-slate-900 mb-2">
// 									{feat.title}
// 								</h3>
// 								<p className="text-slate-600 leading-relaxed">
// 									{feat.desc}
// 								</p>
// 							</div>
// 						))}
// 					</div>
// 				</div>
// 			</section>

// 			{/* Footer */}
// 			<footer className="bg-slate-900 text-slate-400 py-12">
// 				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:flex sm:justify-between items-center">
// 					<span className="text-xl font-bold text-white">
// 						⚡ CoreUI
// 					</span>
// 					<p className="mt-4 sm:mt-0 text-sm">
// 						&copy; 2026 CoreUI. All rights reserved.
// 					</p>
// 				</div>
// 			</footer>
// 		</div>
// 	);
// }
