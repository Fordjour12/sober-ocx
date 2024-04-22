import Button from "@/components/Button";
import { QuickSandBold, QuickSandRegular } from "@/components/StyledText";
import TextInputWithLabel from "@/components/TextInputWithLabel";
import { getStoreValue } from "@/hooks/secureStore.hooks";
import axios from "axios";
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
}

export default function register() {
	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [email, setEmail] = useState<string>("");


	const createNewUser = async ({ username, password, email }: RegisterUserProps) => {

		const onboardingId = JSON.parse(String(await getStoreValue("OnBoardingID")))

		try {
			const response = await axios.post(
				"http://192.168.104.242:3000/auth/register",
				{
					username,
					password,
					email
				},
				{
					headers: {
						"Content-Type": "multipart/form-data"
					}
				})

			if (response.status === 201) {
				console.log(response.data)
				await axios.put(
					`http://192.168.104.242:3000/${onboardingId}`, {
					userId: response.data.created[0].id
				}, {
					headers: {
						"Content-Type": "application/json"
					}
				})
			}

		} catch (error) {
			console.error(error)
		}
	}


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
