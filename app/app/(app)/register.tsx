import { Text, View } from "@/components/Themed";
import { useSession } from "@/context/AuthContext";
import { router } from "expo-router";
import React, { useState } from "react";
import {
	SafeAreaView,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from "react-native";

export default function Register() {
	const { register } = useSession();

	const [username, setUsername] = useState<string>("");
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleRegisterAccount = async () => {
		try {
			const res = await register({ username, email, password });
			console.log(res);
		} catch (error) {
			console.error(error);
		}
	};

	const signInRedirect = () => {
		router.push("/sign-in");
		console.log("Pressed");
	};

	// const registerImageBackground = require("../../assets/images/registerImage.jpg");

	return (
		<SafeAreaView className="flex-1">
			<View className="my-4">
				<View className="my-4 border border-yellow-500">
					<Text>username:</Text>
					<TextInput
						value={username}
						onChangeText={(text) => setUsername(text)}
						className="text-white"
					/>
				</View>

				<View className="my-4 border border-yellow-500">
					<Text>email:</Text>
					<TextInput
						value={email}
						onChangeText={(text) => setEmail(text)}
						className="text-white"
					/>
				</View>

				<View className="border border-yellow-500">
					<Text>password:</Text>
					<TextInput
						value={password}
						onChangeText={(text) => setPassword(text)}
						className="text-white"
					/>
				</View>

				<TouchableOpacity
					onPress={handleRegisterAccount}
					className="border bg-teal-500 py-4 items-center my-4"
				>
					<Text>Create Account</Text>
				</TouchableOpacity>
			</View>

			<View className="flex-row gap-3">
				<Text>Have an Account</Text>
				<TouchableWithoutFeedback>
					<Text
						style={styles.btnSignIn}
						className="text-teal-500"
						onPress={signInRedirect}
					>
						Sign In
					</Text>
				</TouchableWithoutFeedback>
			</View>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	btnSignIn: {
		color: "teal",
	},
});
