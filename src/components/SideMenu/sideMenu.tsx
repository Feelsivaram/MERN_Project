import {
	FiAlertCircle,
	FiBookOpen,
	FiCode,
	FiCompass,
	FiCpu,
	FiFolder,
	FiGitPullRequest,
	FiHome,
	FiMenu,
	FiMessageSquare,
	FiShoppingBag,
	FiX,
} from 'react-icons/fi';

type SidebarProps = {
	isOpen: boolean;
	toggleSidebar: () => void;
};

const menuItems = [
	{ name: 'Home', icon: <FiHome /> },
	{ name: 'All Issues', icon: <FiAlertCircle /> },
	{ name: 'Pull Requests', icon: <FiGitPullRequest /> },
	{ name: 'Projects', icon: <FiBookOpen /> },
	{ name: 'Repositories', icon: <FiFolder /> },
	{ name: 'Discussions', icon: <FiMessageSquare /> },
	{ name: 'Codespaces', icon: <FiCode /> },
	{ name: 'Copilot', icon: <FiCpu /> },
];

const exploreItems = [
	{ name: 'Explore', icon: <FiCompass /> },
	{ name: 'Marketplace', icon: <FiShoppingBag /> },
];

const repositories = [
	'MERN_Project',
	'git-course',
	'Recruit-Pro',
	'Angular_Practice',
	'Hello-World',
];

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
	return (
		<aside
			className={`fixed left-0 top-0 h-screen bg-black border-r border-gray-800 transition-all duration-300 ease-in-out z-50 ${isOpen ? 'w-60' : 'w-15'}`}
		>
			{/* Header */}
			<div className="relative flex items-center justify-center h-16 border-b border-gray-800">
				{/* Logo */}
				<div className="text-3xl">🐙</div>

				{/* Toggle Button */}
				<button
					onClick={toggleSidebar}
					className=" absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-zinc-800 hover:bg-zinc-700 flex items-center justify-center transition shadow-lg border border-zinc-700   "
				>
					{isOpen ? <FiX /> : <FiMenu />}
				</button>
			</div>

			{/* Sidebar Content */}
			<div className="h-[calc(100vh-64px)] overflow-y-auto px-3 py-4">
				{/* Main Menu */}
				<nav className="space-y-1">
					{menuItems.map((item) => (
						<button
							key={item.name}
							className={`flex items-center gap-4 w-full px-2 py-2 rounded-lg text-gray-300 hover:bg-zinc-900 hover:text-white transition-all duration-200 ${item.name === 'Repositories' ? 'bg-zinc-900 text-white' : ''}`}
						>
							<span className="text-xl">{item.icon}</span>

							{isOpen && (
								<span className="text-sm font-medium">
									{item.name}
								</span>
							)}
						</button>
					))}
				</nav>

				{/* Divider */}
				<div className="my-6 border-t border-gray-800"></div>

				{/* Explore */}
				{isOpen && (
					<p className="text-xs uppercase text-gray-500 px-2 mb-2 tracking-wider">
						Explore
					</p>
				)}

				<nav className="space-y-1">
					{exploreItems.map((item) => (
						<button
							key={item.name}
							className="flex items-center gap-4 w-full px-2 py-2 rounded-lg text-gray-300 hover:bg-zinc-900 hover:text-white transition-all"
						>
							<span className="text-xl">{item.icon}</span>

							{isOpen && (
								<span className="text-sm">{item.name}</span>
							)}
						</button>
					))}
				</nav>

				{/* Divider */}
				<div className="my-6 border-t border-gray-800"></div>

				{/* Top Repositories */}
				{isOpen && (
					<>
						<p className="text-xs uppercase text-gray-500 px-2 mb-3 tracking-wider">
							Top Repositories
						</p>

						<div className="space-y-2">
							{repositories.map((repo) => (
								<button
									key={repo}
									className="w-full text-left px-2 py-2 rounded-lg text-sm text-gray-400 hover:bg-zinc-900 hover:text-white transition"
								>
									{repo}
								</button>
							))}
						</div>
					</>
				)}
			</div>
		</aside>
	);
}
