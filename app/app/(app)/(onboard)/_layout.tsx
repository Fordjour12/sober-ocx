import { getStoreValue } from "@/hooks/secureStore.hooks";
import { Stack, router } from "expo-router";
import React from "react";

export default function OnBoardLayout() {

	React.useEffect(() => {

		const checkOnboarding = async () => {
			const onboardingId = await getStoreValue("OnBoardingID")
			const reasonAdded = await getStoreValue("reasonAdded")

			if (onboardingId && reasonAdded) {
				router.push("/register")
			} else if (!onboardingId) {
				router.push("/sober-date")
			} else if (!reasonAdded) {
				router.push("/reason")
			}
		}

		checkOnboarding()

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
