import { useSession } from "@/context/AuthContext";
import { Link, router } from "expo-router";
import React, { useState, useRef, useEffect } from "react";
import {
	Animated,
	ImageBackground,
	Pressable,
	StyleSheet,
	Text,
	View
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
		<ImageBackground source={SignInImageBackground} resizeMode="cover" style={{ flex: 1 }}>

			<View style={{ flex: 0.6 }} />
			<Animated.View
				style={[
					styles.infoContainer,
					{ transform: [{ translateY: infoTextPosition }] },
				]}
			>
				<Animated.Text style={[styles.infoHeader, { opacity: textOpacity }]}>
					Welcome,
				</Animated.Text>
				<Animated.Text style={[styles.infoText, { opacity: textOpacity }]}>
					Unlock the doors to fitness excellence! Verify or Create an account to
					join our dedicated team of health enthusiasts. Your journey to a
					healthier lifestyle begins now. Welcome aboard!
				</Animated.Text>
				<Animated.View style={{ opacity: buttonOpacity, marginVertical: 30 }}>
					<Link href="/" asChild>
						<Pressable>
							<Text >Continue</Text>
						</Pressable>
					</Link>
				</Animated.View>
			</Animated.View>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	infoContainer: {
		flex: 0.4,
		padding: 20,
		backgroundColor: "hsla(0 0% 100% / 0.8)",
	},
	infoHeader: {
		fontFamily: "Raleway-Bold",
		fontSize: 30,
		color: "#fff",
	},
	infoText: {
		fontFamily: "Roboto",
		fontSize: 17,
		color: "#fff",
		marginTop: 20,
	},
});
