import { createBrowserRouter, Navigate } from 'react-router-dom';

import Dashboard from '../components/Pages/Dashboard/dashboard';
import LandingPage from '../components/Pages/LandingPage';
import LoginPage from '../components/Pages/Login/Login';
import NotFoundPage from '../components/Pages/NotFoundPage';
import RegisterPage from '../components/Pages/Register/Register';
import AuthLayout from '../Layouts/AuthLayout';
import MainLayout from '../Layouts/MainLayout';
import ProtectedRoute from '../routes/ProtectedRoute';
import PublicRoute from '../routes/PublicRoute';

export const router = createBrowserRouter([
	// Public Routes
	{
		element: <MainLayout />,
		children: [{ index: true, element: <LandingPage /> }],
	},
	// Authentication Routes
	{
		element: <PublicRoute />,
		children: [
			{
				element: <AuthLayout />,
				children: [
					{ path: '/login', element: <LoginPage /> },
					{ path: '/register', element: <RegisterPage /> },
				],
			},
		],
	},
	// Dashboard
	{
		element: <ProtectedRoute />,
		children: [
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
		],
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
