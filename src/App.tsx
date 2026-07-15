import './App.css';
import Navbar from './components/Header/Navbar';
import About from './components/Portfolio/About';
import Hero from './components/Portfolio/Hero';
import Services from './components/Portfolio/Services';
import Skills from './components/Portfolio/Skills';

function App() {
	return (
		<>
			<main className="min-h-screen bg-white text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white">
				<Navbar />

				<Hero />

				<About />

				<Skills />

				<Services />
			</main>
			{/* <Dashboard /> Need to navigate to dashboard */}
		</>
	);
}

export default App;
