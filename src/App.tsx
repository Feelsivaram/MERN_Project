import './App.css';
// import Dashboard from './components/Pages/Dashboard/dashboard';
import Footer from './components/Footer/Footer';
import Navbar from './components/Header/Navbar';
import About from './components/Portfolio/About';
import Achievements from './components/Portfolio/Achivements';
import Contact from './components/Portfolio/Contact';
import Experience from './components/Portfolio/Expirence';
import Hero from './components/Portfolio/Hero';
import Projects from './components/Portfolio/Projects';
import ScrollProgress from './components/Portfolio/ScrollProgress';
import ScrollTop from './components/Portfolio/ScrollTop';
import Services from './components/Portfolio/Services';
import Skills from './components/Portfolio/Skills';

function App() {
	return (
		<>
			<ScrollProgress />
			<main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-white">
				<Navbar />

				<Hero />

				<About />

				<Skills />

				<Services />

				<Experience />

				<Projects />

				<Achievements />

				<Contact />

				<Footer />

				<ScrollTop />
			</main>
			{/*<Dashboard />*/} {/* Need to navigate to dashboard */}
		</>
	);
}

export default App;
