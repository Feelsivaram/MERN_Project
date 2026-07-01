// export default function Dashboard() {
// 	return <h2>Dashboard Page rendered</h2>;
// }

import {
	FiClock,
	FiFolder,
	FiGitPullRequest,
	FiStar,
	FiTrendingUp,
	FiUsers,
} from 'react-icons/fi';
import Layout from '../../Header/Layout';

const repositories = [
	{
		name: 'Recruit-Pro',
		language: 'TypeScript',
		stars: 42,
		updated: '2 hours ago',
	},
	{
		name: 'GitHub-Clone',
		language: 'React',
		stars: 27,
		updated: 'Yesterday',
	},
	{
		name: 'Portfolio',
		language: 'Next.js',
		stars: 15,
		updated: '3 days ago',
	},
	{
		name: 'Node-API',
		language: 'Node.js',
		stars: 10,
		updated: 'Last week',
	},
];

const activities = [
	{
		title: 'Pull Request Merged',
		description: 'Feature authentication was merged.',
		icon: <FiGitPullRequest size={20} />,
	},
	{
		title: 'Repository Created',
		description: 'Created a new project called Recruit-Pro.',
		icon: <FiFolder size={20} />,
	},
	{
		title: 'New Star',
		description: 'Your repository received a new star.',
		icon: <FiStar size={20} />,
	},
];

const stats = [
	{
		title: 'Repositories',
		value: '24',
		icon: <FiFolder />,
	},
	{
		title: 'Stars',
		value: '138',
		icon: <FiStar />,
	},
	{
		title: 'Contributions',
		value: '945',
		icon: <FiTrendingUp />,
	},
	{
		title: 'Followers',
		value: '321',
		icon: <FiUsers />,
	},
];

export default function Dashboard() {
	return (
		<Layout>
			<div className="space-y-8">
				{/* Welcome */}
				<section className="rounded-xl border border-zinc-800 bg-[#161b22] p-8">
					<h2 className="text-3xl font-bold text-white">
						Welcome Back 👋
					</h2>

					<p className="mt-3 text-gray-400">
						Manage your repositories, activity, and projects from
						one dashboard.
					</p>
				</section>

				{/* Stats */}
				<section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
					{stats.map((item) => (
						<div
							key={item.title}
							className="rounded-xl border border-zinc-800 bg-[#161b22] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500"
						>
							<div className="flex items-center justify-between">
								<div className="text-gray-400">
									{item.title}
								</div>

								<div className="text-xl text-blue-400">
									{item.icon}
								</div>
							</div>

							<h3 className="mt-5 text-3xl font-bold">
								{item.value}
							</h3>
						</div>
					))}
				</section>

				{/* Main Grid */}
				<section className="grid gap-6 xl:grid-cols-3">
					{/* Repository List */}
					<div className="xl:col-span-2 rounded-xl border border-zinc-800 bg-[#161b22] p-6">
						<div className="mb-6 flex items-center justify-between">
							<h2 className="text-xl font-semibold">
								Your Repositories
							</h2>

							<button className="rounded-lg bg-blue-600 px-4 py-2 text-sm transition hover:bg-blue-500">
								New Repository
							</button>
						</div>

						<div className="space-y-4">
							{repositories.map((repo) => (
								<div
									key={repo.name}
									className="rounded-lg border border-zinc-800 p-5 transition-all duration-300 hover:border-blue-500 hover:bg-[#0d1117]"
								>
									<div className="flex items-center justify-between">
										<h3 className="font-semibold text-blue-400">
											{repo.name}
										</h3>

										<span className="rounded-full border border-zinc-700 px-3 py-1 text-xs">
											Public
										</span>
									</div>

									<div className="mt-4 flex flex-wrap items-center gap-5 text-sm text-gray-400">
										<span>{repo.language}</span>

										<span className="flex items-center gap-1">
											<FiStar />
											{repo.stars}
										</span>

										<span className="flex items-center gap-1">
											<FiClock />
											{repo.updated}
										</span>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Activity */}
					<div className="rounded-xl border border-zinc-800 bg-[#161b22] p-6">
						<h2 className="mb-6 text-xl font-semibold">
							Recent Activity
						</h2>

						<div className="space-y-5">
							{activities.map((activity, index) => (
								<div
									key={index}
									className="flex gap-4 rounded-lg border border-zinc-800 p-4 transition hover:border-blue-500"
								>
									<div className="mt-1 text-blue-400">
										{activity.icon}
									</div>

									<div>
										<h3 className="font-medium">
											{activity.title}
										</h3>

										<p className="mt-1 text-sm text-gray-400">
											{activity.description}
										</p>
									</div>
								</div>
							))}
						</div>

						{/* Quick Actions */}
						<div className="mt-8 rounded-lg border border-zinc-800 bg-[#0d1117] p-5">
							<h3 className="mb-4 font-semibold">
								Quick Actions
							</h3>

							<div className="space-y-3">
								<button className="w-full rounded-lg bg-zinc-800 py-2 transition hover:bg-zinc-700">
									Create Repository
								</button>

								<button className="w-full rounded-lg bg-zinc-800 py-2 transition hover:bg-zinc-700">
									Open Pull Request
								</button>

								<button className="w-full rounded-lg bg-zinc-800 py-2 transition hover:bg-zinc-700">
									View Issues
								</button>
							</div>
						</div>
					</div>
				</section>

				{/* Dummy Content for Scrolling */}
				<section className="space-y-5">
					<h2 className="text-2xl font-semibold">More Content</h2>

					{Array.from({ length: 12 }).map((_, index) => (
						<div
							key={index}
							className="rounded-xl border border-zinc-800 bg-[#161b22] p-6 transition hover:border-zinc-600"
						>
							<h3 className="text-lg font-semibold">
								Section {index + 1}
							</h3>

							<p className="mt-2 text-gray-400">
								This section exists to demonstrate smooth
								scrolling while keeping the sidebar and header
								fixed.
							</p>
						</div>
					))}
				</section>
			</div>
		</Layout>
	);
}
