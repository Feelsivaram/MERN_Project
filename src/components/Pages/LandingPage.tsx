import Footer from '../Footer/Footer';
import Navbar from '../Header/Navbar';
import About from '../Portfolio/About';
import Achievements from '../Portfolio/Achivements';
import Contact from '../Portfolio/Contact';
import Experience from '../Portfolio/Expirence';
import Hero from '../Portfolio/Hero';
import Projects from '../Portfolio/Projects';
import ScrollProgress from '../Portfolio/ScrollProgress';
import ScrollTop from '../Portfolio/ScrollTop';
import Services from '../Portfolio/Services';
import Skills from '../Portfolio/Skills';

export default function LandingPage() {
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
		</>
	);
}
