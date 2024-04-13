import { CustomButton } from "@/components/customCmp/Button";
import { router } from "expo-router";
import React from "react";
import { Image, View, Text, } from "react-native";



export default function AuthScreen() {
	const soberStart = require("../../assets/images/jill-rects.png");

	const signInRedirect = () => {
		router.push("/sign-in")

		console.log("Pressed")
	}

	return (
		<View className="flex-1 w-screen relative">
			<Image source={soberStart} resizeMode="cover" />
			<View className="absolute mt-10 flex-1">
				<Text className="text-6xl items-center text-yellow-400/60 text-center w-screen">
					Sober
				</Text>
				<View>
					<CustomButton onPress={signInRedirect} Text={"Continue with Email"} />
				</View>
			</View>
		</View>
	);
}



