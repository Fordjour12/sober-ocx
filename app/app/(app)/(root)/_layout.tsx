import { Text } from "@/components/Themed";
import { useSession } from "@/context/AuthContext";
import { Redirect, Stack } from "expo-router";
import React from "react";


export default function _layout() {
	const { session, isLoading } = useSession();




	if (isLoading) {
		// You can keep the splash screen open, or render a loading screen like we do here.
		return <Text>Loading...</Text>;
	}

	if (!session) {
		// Only require authentication within the (app) group's layout as users
		// need to be able to access the (auth) group and sign in again.
		// On web, static rendering will stop here as the user is not authenticated
		// in the headless Node process that the pages are rendered in.
		return <Redirect href="/sign-in" />;
	}

	return (
		<Stack>
			<Stack.Screen name="index" />
			<Stack.Screen name="two" />
		</Stack>
	);
}
