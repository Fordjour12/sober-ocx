import React from "react";
import { Text, View } from "@/components/Themed";
import { TouchableOpacity } from "react-native";
import { QuickSandMedium } from "@/components/StyledText";



export default function profile() {
	return (
		<View>

			<View>
			</View>

			<View>

			</View>

			<View className="my-4">

				<TouchableOpacity style={{ backgroundColor: "gray" }} className="p-3 mx-3 my-4 rounded">
					<QuickSandMedium className="text-center text-lg"> Sign Out </QuickSandMedium>
				</TouchableOpacity>

				<TouchableOpacity style={{ backgroundColor: "red" }} className="p-3 mx-3 rounded">
					<QuickSandMedium className="text-center text-lg"> Delete Account </QuickSandMedium>
				</TouchableOpacity>
			</View>
		</View>
	);
}
