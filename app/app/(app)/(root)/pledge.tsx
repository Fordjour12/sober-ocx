import { Text, View } from "@/components/Themed";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Two() {
	return (
		<SafeAreaView>
			<View>
				<View className="my-4">
					<Text className="text-3xl font-bold">Today's Pledge</Text>
					<Text>Clock count down</Text>
					<Text className="text-lg my-3">
						You have pledged to be alcohol free for the next 24 hours
					</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}
