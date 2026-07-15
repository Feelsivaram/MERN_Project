import { ArrowRight, Download, Mail } from 'lucide-react';
import { portfolio } from '../../data/portfolio';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Container from '../ui/Container';
import StatCard from '../ui/StatCard';

export default function Hero() {
	const { hero, socials } = portfolio;

	return (
		<section className="relative overflow-hidden">
			{/* Background */}

			<div className="absolute inset-0 -z-20">
				<div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-indigo-500/20 blur-[120px]" />

				<div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px]" />
			</div>

			<Container>
				<div className="grid min-h-[90vh] items-center gap-20 py-20 lg:grid-cols-2">
					{/* LEFT */}

					<div>
						<Badge text="Available for Full Time Opportunities" />

						<h1 className="mt-8 text-5xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl">
							Hi, I'm
							<span className="block text-indigo-600">
								{hero.name}
							</span>
						</h1>

						<h2 className="mt-6 text-2xl font-semibold text-slate-700 dark:text-slate-300">
							{hero.designation}
						</h2>

						<p className="mt-8 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-400">
							{hero.subtitle}
						</p>

						{/* CTA */}

						<div className="mt-10 flex flex-wrap gap-4">
							<Button
								href="#projects"
								icon={<ArrowRight size={18} />}
							>
								View Projects
							</Button>

							<Button
								variant="outline"
								href={hero.resume}
								icon={<Download size={18} />}
							>
								Download Resume
							</Button>
						</div>

						{/* SOCIAL */}

						<div className="mt-12 flex gap-5">
							{socials.map((item) => {
								const Icon = Mail;

								return (
									<a
										key={item.name}
										href={item.url}
										className="rounded-xl border border-slate-200 p-3 transition hover:-translate-y-1 hover:bg-indigo-600 hover:text-white dark:border-slate-700"
									>
										<Icon size={20} />
									</a>
								);
							})}
						</div>
					</div>

					{/* RIGHT */}

					<div className="relative mx-auto w-full max-w-lg">
						{/* Main Card */}

						<div className="relative rounded-[40px] border border-slate-200 bg-white p-8 shadow-2xl dark:border-slate-800 dark:bg-slate-900">
							<img
								src={hero.profileImage}
								alt={hero.name}
								className="aspect-square w-full rounded-3xl object-cover"
							/>
						</div>

						{/* Floating Cards */}

						<div className="absolute -left-10 top-10 rounded-2xl bg-white p-4 shadow-xl dark:bg-slate-900">
							<p className="text-sm text-slate-500">Experience</p>

							<h3 className="text-3xl font-black">
								{hero.years}
							</h3>
						</div>

						<div className="absolute -right-8 top-24 rounded-full bg-indigo-600 px-5 py-3 font-semibold text-white shadow-xl">
							React
						</div>

						<div className="absolute right-0 bottom-32 rounded-full bg-cyan-500 px-5 py-3 font-semibold text-white shadow-xl">
							Angular
						</div>

						<div className="absolute left-4 bottom-16 rounded-full bg-emerald-500 px-5 py-3 font-semibold text-white shadow-xl">
							Node.js
						</div>
					</div>
				</div>

				{/* STATS */}

				<div className="grid gap-6 pb-24 md:grid-cols-2 xl:grid-cols-4">
					<StatCard value="11+" label="Years Experience" />

					<StatCard value="40+" label="Projects Delivered" />

					<StatCard value="6+" label="Organizations" />

					<StatCard value="100%" label="Commitment" />
				</div>
			</Container>
		</section>
	);
}
