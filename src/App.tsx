import './App.css';
import LoginForm from './components/Login/login';

function App() {
	return (
		<>
			<LoginForm />
			{/* <div className="bg-gradient-to-br">
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
			</div> */}
		</>
	);
}

export default App;
