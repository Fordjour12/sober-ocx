import { Stack } from "expo-router";
import React from "react";

export const unstable_settings = {
	initialRouteName: "(root)",
};

export default function AppLayout() {
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
