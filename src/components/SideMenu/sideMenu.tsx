import { Home, LogOut, Mail, Menu, Settings, User } from 'lucide-react';
import { useState } from 'react';

export default function Sidebar() {
	const [open, setOpen] = useState(true);

	const menuItems = [
		{ title: 'Home', icon: <Home size={22} /> },
		{ title: 'Profile', icon: <User size={22} /> },
		{ title: 'Messages', icon: <Mail size={22} /> },
		{ title: 'Settings', icon: <Settings size={22} /> },
		{ title: 'Logout', icon: <LogOut size={22} /> },
	];

	return (
		<div className="flex h-screen bg-zinc-900">
			{/* Sidebar */}
			<div
				className={`bg-black text-white transition-all duration-300 ease-in-out
        ${open ? 'w-72' : 'w-20'}`}
			>
				{/* Header */}
				<div className="flex items-center justify-between p-5">
					{open && (
						<h1 className="text-xl font-bold whitespace-nowrap">
							Dashboard
						</h1>
					)}

					<button onClick={() => setOpen(!open)}>
						<Menu />
					</button>
				</div>

				{/* Menu */}
				<nav className="mt-8 space-y-2 px-2">
					{menuItems.map((item, index) => (
						<button
							key={index}
							className="flex w-full items-center gap-4 rounded-xl p-3 hover:bg-zinc-800 transition-all"
						>
							<span className="text-red-500 flex-shrink-0">
								{item.icon}
							</span>

							<span
								className={`overflow-hidden whitespace-nowrap transition-all duration-300
                ${open ? 'opacity-100' : 'w-0 opacity-0'}`}
							>
								{item.title}
							</span>
						</button>
					))}
				</nav>
			</div>

			{/* Main Content */}
			<div className="flex-1 p-8 text-white">
				<h1 className="text-3xl font-bold">Main Content</h1>
			</div>
		</div>
	);
}
