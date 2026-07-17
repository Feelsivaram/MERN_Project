import { createBrowserRouter, Navigate } from 'react-router-dom';

// Existing Pages
import Dashboard from '../components/Pages/Dashboard/dashboard';
import AuthLayout from '../Layouts/AuthLayout';
import MainLayout from '../Layouts/MainLayout';

// New Pages
import LandingPage from '../components/Pages/LandingPage';
import LoginPage from '../components/Pages/Login/Login';
import NotFoundPage from '../components/Pages/NotFoundPage';
import RegisterPage from '../components/Pages/Register/Register';

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
			{ path: '/login', element: <LoginPage /> },
			{ path: '/register', element: <RegisterPage /> },
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
