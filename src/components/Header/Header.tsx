type HeaderProps = {
	sidebarOpen: boolean;
};

export default function Header({ sidebarOpen }: HeaderProps) {
	return (
		<header
			className={`fixed top-0 right-0 h-16 bg-[#161b22] border-b border-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out z-40 ${sidebarOpen ? 'left-60' : 'left-15'}`}
		>
			{/* Center Title */}
			<h1 className="text-xl font-semibold text-white tracking-wide">
				MERN Project
			</h1>

			{/* Optional Right Section */}
			<div className="absolute right-6 flex items-center gap-3">
				<div className="w-9 h-9 rounded-full bg-zinc-700" />
			</div>
		</header>
	);
}
