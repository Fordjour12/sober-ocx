import Button from "@/components/Button";
import { QuickSandBold } from "@/components/StyledText";
import TextInputWithLabel from "@/components/TextInputWithLabel";
import { View } from "@/components/Themed";
import { useSession } from "@/context/AuthContext";
import { Link, router } from "expo-router";
import React, { useState, useRef, useEffect } from "react";
import {
	Keyboard,
	KeyboardAvoidingView,
	Platform,
	StyleSheet,
	TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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

	const infoTextPosition = useRef(new Animated.Value(500)).current; // initial position at the bottom
	const textOpacity = useRef(new Animated.Value(0)).current; // initial opacity: 0 (invisible)
	const buttonOpacity = useRef(new Animated.Value(0)).current; // initial opacity: 0 (invisible)


	useEffect(() => {
		Animated.sequence([
			Animated.timing(infoTextPosition, {
				toValue: 0, // final position at the top
				duration: 1000, // duration of animation
				useNativeDriver: true, // use native driver for better performance
			}),
			Animated.timing(textOpacity, {
				toValue: 1, // final opacity: 1 (visible)
				duration: 500, // duration of animation
				useNativeDriver: true, // use native driver for better performance
			}),
			Animated.timing(buttonOpacity, {
				toValue: 1, // final opacity: 1 (visible)
				duration: 500, // duration of animation
				useNativeDriver: true, // use native driver for better performance
			}),
		]).start();
	}, [textOpacity, infoTextPosition, buttonOpacity]);


	const SignInImageBackground = require("../../assets/images/pexels-vlad-chețan-2923156.jpg")

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
							label="Username"
							onChangeText={setUsername}
							placeholder="Username"
							value={username}
						/>
						<TextInputWithLabel
							label="Password"
							onChangeText={setPassword}
							placeholder="Password"
							value={password}
						/>

						<Button style={styles.btn} title="SignIn" onPress={() => {}} />
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
