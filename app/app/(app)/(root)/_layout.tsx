import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import { useColorScheme } from "@/components/useColorScheme";
import Colors from "@/constants/Colors";
import { Tabs } from "expo-router";
import {
	CogIcon,
	FeatherIcon,
	GripVerticalIcon,
	MessageCircle,
} from "lucide-react-native";
// import * as SplashScreen from "expo-splash-screen";
import React from "react";

// Keep the splash screen visible while we fetch resources
// SplashScreen.preventAutoHideAsync();

export default function RootAppLayout() {
	// const { session, isLoading } = useSession();

	// console.log("session", session);
	// console.log("isLoading", isLoading);

	// if (!isLoading) {
	// 	// You can keep the splash screen open, or render a loading screen like we do here.
	// 	SplashScreen.hideAsync();
	// 	// return <Text>Loading.....</Text>;
	// 	console.log("isLoading for if is loading condition ", !isLoading);
	// }

	// if (!session) {
	// 	// Only require authentication within the (app) group's layout as users
	// 	// need to be able to access the (auth) group and sign in again.
	// 	// On web, static rendering will stop here as the user is not authenticated
	// 	// in the headless Node process that the pages are rendered in.
	// 	return <Redirect href="/sign-in" />;
	// }

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
			<Tabs.Screen
				name="index"
				options={{
					title: "Today",
					tabBarIcon: (props) => {
						return <GripVerticalIcon {...props} />;
					},
				}}
			/>
			<Tabs.Screen
				name="pledge"
				options={{
					title: "Pledge",
					tabBarIcon: (props) => {
						return <FeatherIcon {...props} />;
					},
				}}
			/>
			<Tabs.Screen
				name="counseling"
				options={{
					title: "Counseling",
					tabBarIcon: (props) => {
						return <MessageCircle {...props} />;
					},
				}}
			/>
			<Tabs.Screen
				name="profile"
				options={{
					title: "Profile",
					tabBarIcon: (props) => {
						return <CogIcon {...props} />;
					},
				}}
			/>
		</Tabs>
	);
}
