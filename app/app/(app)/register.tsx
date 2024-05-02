import Button from "@/components/Button";
import { QuickSandBold, QuickSandRegular } from "@/components/StyledText";
import TextInputWithLabel from "@/components/TextInputWithLabel";
import {
	deleteStoreValue,
	getStoreValue,
	setStoreValue,
} from "@/hooks/secureStore.hooks";
import axios from "axios";
import { router } from "expo-router";
import React, { useState } from "react";
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	TouchableWithoutFeedback,
	View,
} from "react-native";

type RegisterUserProps = {
	username: string;
	password: string;
	email: string;
};

export default function register() {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [email, setEmail] = useState<string>("");

	const createNewUser = async ({
		username,
		password,
		email,
	}: RegisterUserProps) => {
		try {
			const response = await axios.post(
				"http://192.168.99.242:8083/api/v1/create-account",
				{
					username,
					password,
					email,
				},
				{
					headers: {
						"Content-Type": "application/json",
					},
				},
			);
			if (response.status === 200) {
				console.log(
					"userData => ",
					response.data.message.data.account.username,
				);
				await setStoreValue(
					"username",
					response.data.message.data.account.username,
				);

				try {
					const date = await getStoreValue("Date");
					const reasonAdded = await getStoreValue("reasonAdded");

					const res = await axios.post(
						"http://192.168.99.242:8083/api/v1/onboarding",
						{
							userId: response.data.message.data.id,
							sobriety: {
								reason: reasonAdded,
								soberDate: date,
							},
						},
						{
							headers: {
								"Content-Type": "application/json",
							},
						},
					);

					if (res.status === 200) {
						await deleteStoreValue("Date");
						await deleteStoreValue("reasonAdded");
					}

					console.log(res.data);
				} catch (error) {
					console.error(error);
				}
				router.replace("/(app)/(root)/");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			className="flex-1"
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<>
					<View className="flex-[0.2]" />
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
							onPress={() => createNewUser({ username, password, email })}
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
