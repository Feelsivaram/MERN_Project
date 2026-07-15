import './App.css';
import Navbar from './components/Header/Navbar';
import About from './components/Portfolio/About';
import Achievements from './components/Portfolio/Achivements';
import Experience from './components/Portfolio/Expirence';
import Hero from './components/Portfolio/Hero';
import Projects from './components/Portfolio/Projects';
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

				<Experience />

				<Projects />

				<Achievements />
			</main>
			{/* <Dashboard /> Need to navigate to dashboard */}
		</>
	);
}

export default App;
