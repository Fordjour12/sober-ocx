import { CustomButton } from "@/components/customCmp/Button";
import { router } from "expo-router";
import React from "react";
import { Image, View, Text, ImageBackground, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AuthScreen() {
	const startBgImage = require("../../assets/images/jill-rects.png");

	const signInRedirect = () => {
		router.push("/sign-in")

		console.log("Pressed")
	}

	return (
		<ImageBackground source={startBgImage} resizeMode="contain" className="flex-1 w-full" >
			<SafeAreaView>
				<View className="mt-[23%]">
					<Text className="text-5xl text-purple-500 font-extrabold text-center w-full">
						Sober
					</Text>
				</View>


				<View className="mt-[38rem]">
					<CustomButton
						className="bg-purple-500"
						onPress={signInRedirect}
						Text={"Continue with Email"}
					/>
				</View>
			</SafeAreaView>
		</ImageBackground>

	);
}



