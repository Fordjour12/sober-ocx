import Button from "@/components/Button";
import DateTimePicker from "@/components/DatePicker";
import { QuickSandBold } from "@/components/StyledText";
import { setStoreValue } from "@/hooks/secureStore.hooks";
import { router } from "expo-router";
import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { getToday } from "react-native-modern-datepicker";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SoberData() {
	const Today = getToday();

	const [selectedDate, setSelectedDate] = useState<string>(Today);

	const addSoberDate = async (date: string) => {
		await setStoreValue("Date", date);
		router.replace("/reason");
	};

	return (
		<SafeAreaView>
			<QuickSandBold className="text-4xl my-[10%] mx-4 tracking-wide">
				When was your sober start date?
			</QuickSandBold>

			<DateTimePicker
				current={Today}
				selected={selectedDate}
				onDateChange={(date) => setSelectedDate(date)}
			/>

			<Button
				style={styles.btn}
				title="Next"
				onPress={() => addSoberDate(selectedDate)}
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
