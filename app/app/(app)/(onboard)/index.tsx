import Button from "@/components/Button";
import { QuickSandBold, QuickSandMedium } from "@/components/StyledText";
import { View } from "@/components/Themed";
import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={{ flex: 1 }} />
			<View style={{ flex: 0.75 }}>
				<QuickSandBold className="text-6xl">Firstly, Congrats! </QuickSandBold>
				<QuickSandMedium className="text-xl leading-relaxed my-4">
					You've just embarked on a major milestone in your journey toward
					sobriety.
				</QuickSandMedium>
				<Button style={styles.btn} title="Continue" onPress={() => {}} />
			</View>
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
		marginTop: 16,
	},
});
