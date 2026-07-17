import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './app/router';

// function App() {
// 	return (
// 		<>
// 			<ScrollProgress />
// 			<main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
// 				<Navbar />

// 				<Hero />

// 				<About />

// 				<Skills />

// 				<Services />

// 				<Experience />

// 				<Projects />

// 				<Achievements />

// 				<Contact />

// 				<Footer />

// 				<ScrollTop />
// 			</main>
// 			{/*<Dashboard />*/} {/* Need to navigate to dashboard */}
// 		</>
// 	);
// }
// export default App;

export default function App() {
	return <RouterProvider router={router} />;
}
