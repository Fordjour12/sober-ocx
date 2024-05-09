import axios from "axios";
import React, {
	createContext,
	useContext,
	type PropsWithChildren,
} from "react";
import { useStorageState } from "./useStorageState";

type SignInRequest = {
	email: string;
	password: string;
};

type RegisterRequest = {
	username: string;
	password: string;
	email: string;
};

const AuthContext = createContext<{
	signIn: ({ email, password }: SignInRequest) => Promise<void>;
	register: ({ username, password, email }: RegisterRequest) => Promise<void>;
	signOut: () => void;
	session?: string | null;
	isLoading: boolean;
}>({
	signIn: () => Promise.resolve(),
	register: () => Promise.resolve(),
	signOut: () => null,
	session: null,
	isLoading: false,
});

export function useSession() {
	const value = useContext(AuthContext);
	if (process.env.NODE_ENV !== "production") {
		if (!value) {
			throw new Error(
				"useSession must be used/wrapped within a <SessionProvider/> ",
			);
		}
	}

	return value;
}

export function SessionProvider(props: PropsWithChildren) {
	const [[isLoading, session], setSession] = useStorageState("session");

	async function signIn({ email, password }: SignInRequest): Promise<void> {
		try {
			const response = await axios.post(
				"http://192.168.155.242:8080/api/v1/login-account",
				{
					email,
					password,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				},
			);

			const { data } = response;
			console.log(data.data.token);
			setSession(data.data.token);
			return data;
		} catch (error) {
			console.error(error);
		}
	}

	async function register({
		username,
		password,
		email,
	}: RegisterRequest): Promise<void> {
		try {
			const response = await axios.post(
				// NOTE: Add your API URL to .env file
				"http://192.104.242:3000/auth/register",
				{
					username,
					password,
					email,
				},
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				},
			);

			const { data } = response;
			setSession(data.token);
			return data;
		} catch (error) {
			console.error(error);
		}
	}

	function signOut(): void {
		setSession(null);
	}

	return (
		<AuthContext.Provider
			value={{
				signIn,
				register,
				signOut,
				session,
				isLoading,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
}
