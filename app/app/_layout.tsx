import "@/app/global.css";
import { SessionProvider } from "@/context/AuthContext";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider,
} from "@react-navigation/native";
import { Slot } from "expo-router";
import React from "react";
import { useColorScheme } from "react-native";

export default function RootLayout() {
	const colorScheme = useColorScheme();
	return (
		<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			<SessionProvider>
				<Slot />
			</SessionProvider>
		</ThemeProvider>
	);
}
