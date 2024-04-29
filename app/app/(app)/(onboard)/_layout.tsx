import { getStoreValue } from "@/hooks/secureStore.hooks";
import { Stack, router } from "expo-router";
import React from "react";

export default function OnBoardLayout() {
	React.useEffect(() => {
		const checkOnboarding = async () => {
			const date = await getStoreValue("Date");
			const reasonAdded = await getStoreValue("reasonAdded");

			if (date && reasonAdded) {
				router.replace("/register");
			} else if (!date) {
				router.push("/sober-date");
			} else if (!reasonAdded) {
				router.push("/reason");
			}
		};

		checkOnboarding();
	}, []);

	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="index" />
		</Stack>
	);
}
