import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
	return (
		<>
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
				<Footer />
			</div>
		</>
	);
}

export default App;
