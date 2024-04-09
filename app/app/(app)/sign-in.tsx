import { Text, View } from "@/components/Themed";
import { useSession } from "@/context/AuthContext";
import { router } from "expo-router";
import React from "react";
import { TextInput } from "react-native";

export default function SignIn() {
	const { signIn } = useSession();
	return (
		<View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
			<Text
				className="text-3xl text-fuchsia-700"
				onPress={() => {
					signIn();
					// Navigate after signing in. You may want to tweak this to ensure sign-in is
					// successful before navigating.
					router.replace("/");
				}}
			>
				Sign In
			</Text>

			<TextInput className="border-red-500" placeholder="hello here" />
		</View>
	);
}
