import { createBrowserRouter, Navigate } from 'react-router-dom';

// Existing Pages
import Dashboard from '../components/Pages/Dashboard/dashboard';
import AuthLayout from '../Layouts/AuthLayout';
import MainLayout from '../Layouts/MainLayout';

// New Pages
import LandingPage from '../components/Pages/landingPage';
import NotFoundPage from '../components/Pages/NotFoundPage';
// import LoginPage from '../pages/Login/Login';
// import RegisterPage from '../pages/Register/Register';

export const router = createBrowserRouter([
	// Public Routes
	{
		element: <MainLayout />,
		children: [{ index: true, element: <LandingPage /> }],
	},
	// Authentication Routes
	{
		element: <AuthLayout />,
		children: [
			// { path: '/login', element: <LoginPage /> },
			// { path: '/register', element: <RegisterPage /> },
		],
	},
	// Dashboard
	{
		path: '/dashboard',
		element: <Dashboard />,
	},
	// Redirect Example
	{
		path: '/home',
		element: <Navigate to="/" replace />,
	},
	// 404
	{
		path: '*',
		element: <NotFoundPage />,
	},
]);
