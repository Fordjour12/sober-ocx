import { Text, View } from "@/components/Themed";
import { useSession } from "@/context/AuthContext";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	const { signOut } = useSession();
	const day = 23;
	const hour = 29;
	const minutes = 32;
	const username = "Ralph";

	return (
		<SafeAreaView>
			<ScrollView className="my-4">
				<View>
					<Text className="text-4xl font-bold">Hello {username},</Text>
					<Text className="text-lg py-2">you are alcohol free for </Text>
				</View>
				<View className="mb-[100]">
					<View className="flex-row items-end my-[30] justify-center">
						<Text className="text-10xl font-bold">{day}</Text>
						<Text className="text-xl">days</Text>
					</View>
					<Text className="text-xl">Keep it up!</Text>
				</View>
				<View>
					<Text className="text-2xl">
						being sober for the past {day} days, {hour} hours and {minutes}{" "}
						minutes
					</Text>
				</View>

				<View className="my-6">
					<Text>My Sober start date</Text>
					<Text>01 May 2023</Text>
					<Text>2.45pm</Text>

					<Text>hours to next pledge </Text>
					{/* Make your pledge when your next pledge is due  */}
					<Text>My Next Pledge</Text>
				</View>

				<View>
					<Text>Motivation Bit</Text>
					<Text>
						Recovery is not a linear path—it's a journey filled with twists,
						turns, and unexpected challenges. There may be moments when you
						stumble, when you feel like giving up, but remember this: every
						setback is an opportunity to learn, grow, and emerge even stronger
						than before.
					</Text>
					<Text>- OpenAI</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
}
