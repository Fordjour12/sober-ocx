import Button from "@/components/Button";
import DateTimePicker from "@/components/DatePicker";
import { QuickSandBold } from "@/components/StyledText";
import { router } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SoberData() {
	return (
		<SafeAreaView>
			<QuickSandBold className="text-4xl my-[10%] mx-4 tracking-wide">
				When was your sober start date?
			</QuickSandBold>

			<DateTimePicker />
			<Button
				style={styles.btn}
				title="Next"
				onPress={() => {
					router.push("/reason");
				}}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		objectFit: "cover",
		overflow: "hidden",
	},
	btn: {
		backgroundColor: "#f02e06",
		paddingVertical: 16,
		marginHorizontal: 16,
		marginTop: "20%",
	},
});
