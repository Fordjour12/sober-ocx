import React from "react";
import { Text, View } from "@/components/Themed";
import Counselor from "@/constants/conselorsData.json"
import { ScrollView } from "react-native";
import { CircleUserRoundIcon } from "lucide-react-native";
import { QuickSandMedium, QuickSandRegular, QuicksandSemiBold } from "@/components/StyledText";

export default function counseling() {
	return (
		<ScrollView>
			<QuickSandMedium>The best counselors we have </QuickSandMedium>

			{
				Counselor.map((item, index) => {
					return (
						<View key={index}
							style={{ backgroundColor: "red" }}
							className="p-4 m-3 flex flex-row items-center gap-6 rounded">

							< CircleUserRoundIcon color={"#fff"} size={50} />
							<View style={{ backgroundColor: "transparent" }}>
								<QuicksandSemiBold className="text-xl py-2" >{item.name}</QuicksandSemiBold>
								<QuickSandRegular>{item.area_of_expertise}</QuickSandRegular>
							</View>
						</View>
					)
				})
			}


		</ScrollView>
	);
}
