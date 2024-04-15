import { Text, View } from "@/components/Themed";
import { useSession } from "@/context/AuthContext";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	const { signOut } = useSession();
	const day = 23;
	const hour = 29;
	const minutes = 32;
	const username = "Ralph";

	return (
		<SafeAreaView>
			<View className="my-4">
				<View>
					<Text className="text-4xl font-bold">Hello {username},</Text>
					<Text className="text-lg py-2">you are alcohol free for </Text>
				</View>
				<View className="mb-[100]">
					<View className="flex-row items-end my-[30] justify-center">
						<Text className="text-10xl font-bold">{day}</Text>
						<Text className="text-lg">days</Text>
					</View>
					<Text className="text-lg">Keep it up!</Text>
				</View>
				<View>
					<Text className="text-2xl">
						being sober for the past {day} days, {hour} hours and {minutes}{" "}
						minutes
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}
