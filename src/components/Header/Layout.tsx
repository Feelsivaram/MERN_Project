import { type ReactNode, useState } from 'react';
import Sidebar from '../SideMenu/sideMenu';
import Header from './Header';

type LayoutProps = {
	children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	const [sidebarOpen, setSidebarOpen] = useState(true);

	return (
		<div className="bg-[#0d1117] min-h-screen">
			{/* Sidebar */}
			<Sidebar
				isOpen={sidebarOpen}
				toggleSidebar={() => setSidebarOpen(!sidebarOpen)}
			/>

			{/* Header */}
			<Header sidebarOpen={sidebarOpen} />

			{/* Main Content */}
			<main
				className={`
          pt-16
          transition-all
          duration-300
          ease-in-out
          h-screen
          overflow-hidden
          ${sidebarOpen ? 'ml-72' : 'ml-20'}
        `}
			>
				{/* Scrollable Area */}
				<div
					className="
            h-[calc(100vh-64px)]
            overflow-y-auto
            scroll-smooth
            p-6
          "
				>
					{children}
				</div>
			</main>
		</div>
	);
}
