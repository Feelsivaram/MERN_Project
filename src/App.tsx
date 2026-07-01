import './App.css';
import Dashboard from './components/Pages/Dashboard/dashboard';

function App() {
	return (
		<>
			<Dashboard />
			{/* <LoginForm /> */}
			{/* <Sidebar /> */}
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
					<Route path="/todo" element={<ToDo />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
				<Footer />
			</div> */}
		</>
	);
}

export default App;
