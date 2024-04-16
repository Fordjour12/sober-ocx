import { Text, View } from "@/components/Themed";
import { router } from "expo-router";
import React from "react";
import { Button, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Two() {
	return (
		<SafeAreaView>
			<View>
				<Pressable
					onPress={() => {
						router.navigate("example");
					}}
				>
					<Text style={{ color: "teal", fontSize: 16, fontWeight: "bold" }}>
						Make Today's Pledge
					</Text>
				</Pressable>

				<View className="my-4">
					<Text className="text-3xl font-bold">Today's Pledge</Text>
					<Text>Clock count down</Text>
					<Text className="text-lg my-3">
						You have pledged to be alcohol free for the next 24 hours
					</Text>
				</View>

				<View>
					<Text>The Pledge:</Text>
					<Text>
						"I pledge to honor my journey of recovery today. I commit to taking
						positive steps towards healing, growth, and self-discovery. Today, I
						choose sobriety, strength, and self-care. I will embrace each moment
						with gratitude, courage, and resilience. I will remind myself of my
						worth, my potential, and the infinite possibilities that lie ahead.
						I pledge to be kind to myself, to seek support when needed, and to
						celebrate every small victory along the way. Today, I affirm my
						commitment to living a life of purpose, fulfillment, and joy. I am
						worthy. I am capable. I am enough."
					</Text>
				</View>

				{/* User Recorder his pledge */}
				<View className="my-4">
					<Text className="my-4">Recorder </Text>
					<Button title="save recording" />
				</View>

				<View>
					<Text>My Next Pledge</Text>
					<Text>Tomorrow</Text>
					<Text>2.45pm</Text>
				</View>
			</View>
		</SafeAreaView>
	);
}
