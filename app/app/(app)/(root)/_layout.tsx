import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";
import { useSession } from "@/context/AuthContext";
import { Redirect, Tabs } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import React from "react";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootAppLayout() {
	const { session, isLoading } = useSession();

	console.log("session", session);
	console.log("isLoading", isLoading);

	if (!isLoading) {
		// You can keep the splash screen open, or render a loading screen like we do here.
		SplashScreen.hideAsync();
		// return <Text>Loading.....</Text>;
		console.log("isLoading for if is loading condition ", !isLoading);
	}

	if (!session) {
		return <Redirect href="/auth" />;
	}

	const colorScheme = useColorScheme();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
				// Disable the static render of the header on web
				// to prevent a hydration error in React Navigation v6.
				headerShown: useClientOnlyValue(false, true),
			}}
		>
			<Tabs.Screen name="index" />
			<Tabs.Screen name="two" />
		</Tabs>
	);
}
