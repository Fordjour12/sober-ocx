import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React, { useEffect } from "react";

export const unstable_settings = {
	initialRouteName: "(root)",
};

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary,
} from "expo-router";

export default function AppLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
	});

	useEffect(() => {
		if (error) throw error;
	}, [error]);

	if (!loaded) {
		return null;
	}

	return (
		<Stack>
			<Stack.Screen name="(root)" />
			<Stack.Screen
				name="sign-in"
				options={{
					presentation: "modal",
				}}
			/>
		</Stack>
	);
}
