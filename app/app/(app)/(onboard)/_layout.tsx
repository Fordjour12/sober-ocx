import { Stack } from "expo-router";
import React from "react";

export default function OnBoardLayout() {
	// React.useEffect(() => {
	// 	const checkOnboarding = async () => {
	// 		const date = await getStoreValue("Date");
	// 		const reasonAdded = await getStoreValue("reasonAdded");

	// 		if (!date && !reasonAdded) {
	// 			router.push("/(app)/(onboard)/");
	// 			return;
	// 		}

	// 		if (date && reasonAdded) {
	// 			router.push("/(app)/register");
	// 			return;
	// 		}

	// 		if (!date) {
	// 			router.push("/sober-date");
	// 			return;
	// 		}

	// 		if (!reasonAdded) {
	// 			router.push("/reason");
	// 			return;
	// 		}
	// 	};

	// 	checkOnboarding();
	// }, []);

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
