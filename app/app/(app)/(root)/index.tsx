import { Text, View } from "@/components/Themed";
import { useSession } from "@/context/AuthContext";
import React from "react";

export default function Index() {
	const { signOut } = useSession();
	const day = 23

	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text
				onPress={() => {
					// The `app/(app)/_layout.tsx` will redirect to the sign-in screen.
					signOut();
				}}
			>
				Sign Out
			</Text>

			<View>
				<Text>Hello Ralph,</Text>
				<Text>you are alcohol free {day} days </Text>
			</View>
		</View>
	);
}
