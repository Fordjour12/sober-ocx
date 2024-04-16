import { Text } from "@/components/Themed";
import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
	return (
		<SafeAreaView>
			<ScrollView>
				<View className="px-4 py-3 flex-row items-center gap-4 bg-purple-500">
					<View className="w-[100] h-[100] rounded-full bg-red-600" />
					<Text>profile</Text>
				</View>

				<View className="my-6">
					<Text>My Sober start date</Text>
					<Text>01 May 2023</Text>
					<Text>2.45pm</Text>
				</View>

				<Text>profile</Text>

				<View>
					<TouchableOpacity>
						<Text className="text-10xl">Sign Out</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
