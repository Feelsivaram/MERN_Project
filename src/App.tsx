import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/Pages/About/about';
import Dashboard from './components/Pages/Dashboard/dashboard';
import NotFoundPage from './components/Pages/NotFoundPage';
import Search from './components/Pages/Search/search';

function App() {
	return (
		<>
			{/* <LoginForm /> */}
			<div className="bg-gradient-to-br">
				<Header />
				<h1>MERN React Application</h1>
				<div className="flex justify-center">
					<div className="p-8 rounded-xl shadow-lg">
						<span className="text-2xl font-bold text-gray-600">
							Tailwind is Working
						</span>
					</div>
				</div>

				<Routes>
					<Route path="/" element={<Search />} />
					<Route path="/about" element={<About />} />
					<Route path="/contact" element={<Dashboard />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
				<Footer />
			</div>
		</>
	);
}

export default App;
