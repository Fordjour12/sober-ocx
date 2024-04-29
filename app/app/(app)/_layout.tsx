import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import React, { useEffect } from "react";

export const unstable_settings = {
	initialRouteName: "(root)",
};

export {
	// Catch any errors thrown by the Layout component.
	ErrorBoundary
} from "expo-router";

export default function AppLayout() {
	const [loaded, error] = useFonts({
		SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
		QuickSandRegular: require("../../assets/fonts/Quicksand-Regular.ttf"),
		QuickSandBold: require("../../assets/fonts/Quicksand-Bold.ttf"),
		QuickSandMedium: require("../../assets/fonts/Quicksand-Medium.ttf"),
		QuicksandSemiBold: require("../../assets/fonts/Quicksand-SemiBold.ttf"),
		// QuickSandVariableFontW: require("../../assets/fonts/Quicksand-VariableFont_wght.ttf"),
	});

	useEffect(() => {
		if (error) throw error;
	}, [error]);

	if (!loaded) {
		return null;
	}

	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="(onboard)" />
			<Stack.Screen name="(root)" />
			<Stack.Screen
				name="sign-in"
				options={{
					presentation: "modal",
				}}
			/>
			<Stack.Screen
				name="register"
				options={{
					presentation: "modal",
				}}
			/>
		</Stack>
	);
}
