import type { User } from '../types/user';

const AUTH_USER_KEY = 'auth_user';

export function saveUser(user: User): void {
	localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
}

export function getUser(): User | null {
	const data = localStorage.getItem(AUTH_USER_KEY);

	if (!data) {
		return null;
	}

	try {
		return JSON.parse(data) as User;
	} catch {
		localStorage.removeItem(AUTH_USER_KEY);
		return null;
	}
}

export function removeUser(): void {
	localStorage.removeItem(AUTH_USER_KEY);
}
