import Button from "@/components/Button";
import { QuickSandBold } from "@/components/StyledText";
import TextInputWithLabel from "@/components/TextInputWithLabel";
import { View } from "@/components/Themed";
import { useSession } from "@/context/AuthContext";
import React, { useState } from "react";
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	TouchableWithoutFeedback,
} from "react-native";

export default function SignIn() {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const { signIn } = useSession();

	const handleSignIn = async () => {
		const res = await signIn({ email, password });

		console.log(res);
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			className="flex-1"
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<>
					<View className="flex-[0.8]" />
					<View className="flex-[0.7] px-4">
						<QuickSandBold className="text-5xl py-4">Sign In</QuickSandBold>

						<TextInputWithLabel
							label="Email"
							onChangeText={setEmail}
							placeholder="Email"
							value={email}
						/>
						<TextInputWithLabel
							label="Password"
							onChangeText={setPassword}
							placeholder="Password"
							value={password}
						/>

						<Button style={styles.btn} title="SignIn" onPress={handleSignIn} />
					</View>
				</>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	btn: {
		backgroundColor: "#f02e06",
		paddingVertical: 16,
		marginHorizontal: 10,
		marginTop: 16,
	},
});
