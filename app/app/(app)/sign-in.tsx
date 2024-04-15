import { Text, View } from "@/components/Themed";
import { useSession } from "@/context/AuthContext";
import { router } from "expo-router";
import React, { useState } from "react";
import {
	StyleSheet,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignIn() {
	const { signIn } = useSession();

	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSignIn = async () => {
		try {
			const res = await signIn({ username, password });
			console.log(res);
			router.replace("/");
		} catch (error) {
			console.error(error);
		}
	};

	const signUpRedirect = () => {
		router.push("/register");
		console.log("Pressed");
	};
	// const SignInImageBackground = require("../../assets/images/pexels-vlad-chețan-2923156.jpg");

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
				<View className="border border-yellow-500">
					<Text>password:</Text>
					<TextInput
						value={password}
						onChangeText={(text) => setPassword(text)}
						className="text-white"
					/>
				</View>

				<TouchableOpacity
					onPress={handleSignIn}
					className="border bg-teal-500 py-4 items-center my-4"
				>
					<Text>Sign In</Text>
				</TouchableOpacity>
			</View>
			<View className="flex-row gap-3">
				<Text>Don't have an Account</Text>
				<TouchableWithoutFeedback>
					<Text
						style={styles.btnSignUp}
						className="text-teal-500"
						onPress={signUpRedirect}
					>
						Sign Up
					</Text>
				</TouchableWithoutFeedback>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	btnSignUp: {
		color: "teal",
	},
});
