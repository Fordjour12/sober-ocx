import Button from "@/components/Button";
import MultiLineTextInput from "@/components/MultiLineTextInput";
import { QuickSandBold } from "@/components/StyledText";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function reason() {
	return (
		<SafeAreaView style={{ marginHorizontal: 16 }}>
			<QuickSandBold className="text-5xl my-[20%] tracking-wide">
				What drives your desire for sobriety?
			</QuickSandBold>
			<MultiLineTextInput />

			<View className="my-[40%]">
				<Button style={styles.btn} title="Continue" onPress={() => {}} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	btn: {
		backgroundColor: "#f02e06",
		paddingVertical: 16,
		marginHorizontal: 16,
		marginTop: 16,
	},
});
