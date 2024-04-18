import Button from "@/components/Button";
import { QuickSandBold, QuickSandRegular } from "@/components/StyledText";
import TextInputWithLabel from "@/components/TextInputWithLabel";
import React, { useState } from "react";
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";

export default function register() {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [email, setEmail] = useState<string>("");

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			className="flex-1"
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<>
					<View className="flex-[0.5]" />
					<View className="flex-[0.7] px-4">
						<QuickSandBold className="text-5xl py-4">
							Create New Account
						</QuickSandBold>
						<QuickSandRegular className="text-xl pb-4">
							Please enter your details below
						</QuickSandRegular>

						<TextInputWithLabel
							label="Username"
							onChangeText={setUsername}
							placeholder="Username"
							value={username}
						/>
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

						<Button
							style={styles.btn}
							title="Create Account"
							onPress={() => {}}
						/>
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
