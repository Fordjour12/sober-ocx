//import { Text, View } from "@/components/Themed";
import { useSession } from "@/context/AuthContext";
import { router } from "expo-router";
import React, { useState } from "react";
import {
	Image,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
	Text,
	ImageBackground
} from "react-native";

export default function SignIn() {
	const { signIn } = useSession();

	const [username, setUsername] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	console.log(username, password);

	const handleSignIn = async () => {
		try {
			const res = await signIn({ username, password });
			console.log(res);
			router.replace("/");
		} catch (error) {
			console.error(error);
		}
	};

	const GoBackHandler = () => {
		router.back()
		console.log("Can go back")
	}

	const SignInImageBackground = require("../../assets/images/pexels-vlad-chețan-2923156.jpg")

	return (
		<ImageBackground source={SignInImageBackground} resizeMode="cover" className="flex-1" />

	)
}



{/*
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss}> /*}
				{/*	<View className="mt-40">
					<View className="py-4">
						<Text>Username:</Text>
						<TextInput
							id="username"
							placeholder="username"
							className="text-gray-300 placeholder:text-gray-400 border border-gray-500 p-3 rounded-xl mt-3"
							value={username}
							onChangeText={(text) => setUsername(text)}
						/>
					</View>

					<View className="py-4">
						<Text>Password:</Text>
						<TextInput
							id="password"
							placeholder="password"
							className="text-gray-300 placeholder:text-gray-400 border border-gray-500 p-3 rounded-xl mt-3"
							secureTextEntry
							value={password}
							onChangeText={(text) => setPassword(text)}
						/>
					</View>

					<TouchableOpacity
						onPress={handleSignIn}
						className="items-center bg-red-950/40 py-3 rounded-xl mt-4"
					>
						<Text>Submit</Text>
					</TouchableOpacity>

					<View className="flex-row py-3">
						<Text>Don't have Account </Text>
						<TouchableWithoutFeedback>
							<Text>Sign Up</Text>
						</TouchableWithoutFeedback>
					</View>
				</View> */}
{/*
			</TouchableWithoutFeedback>
			<TouchableOpacity onPress={GoBackHandler}>
				<Text>Back </Text>
			</TouchableOpacity>
			
	</KeyboardAvoidingView >
*/}
