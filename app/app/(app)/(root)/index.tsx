import {
	QuickSandBold,
	QuickSandMedium,
	QuickSandRegular,
	QuicksandSemiBold,
} from "@/components/StyledText";
import { View } from "@/components/Themed";
import { useSession } from "@/context/AuthContext";
import { Link } from "expo-router";
import { ChevronRight, PlusCircleIcon } from "lucide-react-native";
import React from "react";
import { Pressable, ScrollView } from "react-native";

export default function Index() {
	const { signOut } = useSession();
	const day = 23;

	return (
		<ScrollView>
			<View className="py-6 pb-[9rem]">
				<QuickSandBold className="text-4xl">Hello Ralph,</QuickSandBold>
				<QuickSandRegular className="text-xl leading-loose">
					You are alcohol free for
				</QuickSandRegular>
			</View>

			<View className="flex-row justify-center">
				<QuickSandMedium className="text-12xl leading-extra-tight">
					{day}
				</QuickSandMedium>
				<QuickSandRegular className="text-2xl leading-relaxed">
					days
				</QuickSandRegular>
			</View>

			<View className="py-[5.5rem]">
				<QuickSandMedium className="text-3xl leading-relaxed">
					Being Sober from the past 23 days, 12 hour and 33 minutes
				</QuickSandMedium>
			</View>

			<View>
				<View>
					<QuickSandBold>My Sobriety Date</QuickSandBold>
					<QuickSandMedium>01 May 3032</QuickSandMedium>
				</View>

				<View>
					<QuickSandBold>Up Next</QuickSandBold>

					<View style={{ backgroundColor: "red" }} className="mx-4 rounded">
						<QuickSandBold>Daily Notes</QuickSandBold>
						<QuickSandRegular>
							Daily Notes can provide you with insights for staying engaged in
							your recovery.
						</QuickSandRegular>

						<View
							className="flex-row  gap-4"
							style={{ backgroundColor: "transparent" }}
						>
							<PlusCircleIcon color={"#fff"} />
							<QuickSandMedium>Add some Notes</QuickSandMedium>
						</View>
					</View>
				</View>

				<View>
					<QuicksandSemiBold>Lessons</QuicksandSemiBold>
					<Link asChild href={"/(app)/(root)/counseling"}>
						<Pressable>
							<View className="flex-row items-center justify-between">
								<View>
									<QuicksandSemiBold>Getting Sober</QuicksandSemiBold>
									<QuickSandMedium>Day Zero </QuickSandMedium>
								</View>
								<ChevronRight color={"#fff"} />
							</View>
						</Pressable>
					</Link>
				</View>

				<View style={{ backgroundColor: "red" }} className="mx-4 rounded">
					<QuickSandBold>Why I' doing this</QuickSandBold>
					<QuickSandRegular>
						I am doing this because I want to be a better person and I want best for my family.
						I want to be a better person and I want best for my family.
						and to be healthy and happy.
					</QuickSandRegular>

					<View
						className="flex-row gap-4"
						style={{ backgroundColor: "transparent" }}
					>
						<PlusCircleIcon color={"#fff"} />
						<QuickSandMedium>Add some Notes</QuickSandMedium>
					</View>
				</View>

			</View>

		</ScrollView >
	);
}
