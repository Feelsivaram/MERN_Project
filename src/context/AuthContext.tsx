import { createContext, useState, type ReactNode } from 'react';

import { getUser, removeUser, saveUser } from '../services/authStorage';
import type { AuthContextType } from '../types/auth';
import type { User } from '../types/user';

export const AuthContext = createContext<AuthContextType | null>(null);

interface Props {
	children: ReactNode;
}

export function AuthProvider({ children }: Props) {
	const [user, setUser] = useState<User | null>(() => getUser());

	function login(user: User) {
		saveUser(user);
		setUser(user);
	}

	function logout() {
		removeUser();
		setUser(null);
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				isAuthenticated: !!user,
				login,
				logout,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
