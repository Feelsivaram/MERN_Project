import './App.css';
import Header from './components/Header';

function App() {
	return (
		<>
			<Header />
			<h1>MERN React Application</h1>
			<div className="flex justify-center">
				<div className="p-8 rounded-xl shadow-lg">
					<span className="text-2xl font-bold text-gray-600">
						Tailwind is Working
					</span>
				</div>
			</div>
		</>
	);
}

export default App;
