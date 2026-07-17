export interface LoginFormData {
	email: string;
	password: string;
}

export interface LoginErrors {
	email?: string;
	password?: string;
}

export interface RegisterFormData {
	fullName: string;
	email: string;
	password: string;
	confirmPassword: string;
}

export interface RegisterErrors {
	fullName?: string;
	email?: string;
	password?: string;
	confirmPassword?: string;
}

import type { User } from './user';

export interface AuthContextType {
	user: User | null;
	isAuthenticated: boolean;
	login: (user: User) => void;
	logout: () => void;
}
