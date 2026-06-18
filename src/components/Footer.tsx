// import { Github, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="px-4 pb-4 mt-10">
			<div className="mx-auto max-w-7xl">
				{/* Glass Container */}
				<div className="relative overflow-hidden rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-lg">
					{/* Glossy Overlay */}
					<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

					<div className="relative px-6 py-10">
						<div className="grid gap-10 md:grid-cols-4">
							{/* Brand */}
							<div>
								<h2 className="text-xl font-bold text-white">
									Logo
								</h2>
								<p className="mt-3 text-sm text-white/70">
									Building modern web experiences with React
									and Tailwind CSS.
								</p>
							</div>

							{/* Links */}
							<div>
								<h3 className="mb-4 font-semibold text-white">
									Quick Links
								</h3>

								<ul className="space-y-2 text-sm">
									<li>
										<a
											href="#"
											className="text-white/70 hover:text-white"
										>
											Home
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-white/70 hover:text-white"
										>
											About
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-white/70 hover:text-white"
										>
											Services
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-white/70 hover:text-white"
										>
											Contact
										</a>
									</li>
								</ul>
							</div>

							{/* Resources */}
							<div>
								<h3 className="mb-4 font-semibold text-white">
									Resources
								</h3>

								<ul className="space-y-2 text-sm">
									<li>
										<a
											href="#"
											className="text-white/70 hover:text-white"
										>
											Documentation
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-white/70 hover:text-white"
										>
											Blog
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-white/70 hover:text-white"
										>
											Privacy Policy
										</a>
									</li>
									<li>
										<a
											href="#"
											className="text-white/70 hover:text-white"
										>
											Terms
										</a>
									</li>
								</ul>
							</div>

							{/* Social */}
							<div>
								<h3 className="mb-4 font-semibold text-white">
									Follow Us
								</h3>

								{/* <div className="flex gap-3">
									<a
										href="#"
										className="rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
									>
										<Github size={18} />
									</a>

									<a
										href="#"
										className="rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
									>
										<Twitter size={18} />
									</a>

									<a
										href="#"
										className="rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
									>
										<Linkedin size={18} />
									</a>

									<a
										href="#"
										className="rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20"
									>
										<Instagram size={18} />
									</a>
								</div> */}
							</div>
						</div>

						{/* Bottom Bar */}
						<div className="mt-10 border-t border-white/10 pt-6">
							<div className="flex flex-col items-center justify-between gap-4 text-sm text-white/60 md:flex-row">
								<p>© 2026 Logo. All rights reserved.</p>

								<div className="flex gap-6">
									<a href="#" className="hover:text-white">
										Privacy
									</a>
									<a href="#" className="hover:text-white">
										Terms
									</a>
									<a href="#" className="hover:text-white">
										Cookies
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
