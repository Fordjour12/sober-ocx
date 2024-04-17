import { View } from "@/components/Themed";
import React from "react";
import { useColorScheme } from "react-native";
import DatePicker, { getToday } from "react-native-modern-datepicker";

export default function DateTimePicker() {
	const scheme = useColorScheme(); // Get the current color scheme ('light' or 'dark')
	const TodayDate = getToday(); // Get the current date

	// Set the colors based on the color scheme
	const options =
		scheme === "light"
			? {
					backgroundColor: "#090C08",
					textHeaderColor: "#FFA25B",
					textDefaultColor: "#F6E7C1",
					selectedTextColor: "#fff",
					mainColor: "#F4722B",
					textSecondaryColor: "#D6C7A1",
					borderColor: "rgba(122, 146, 165, 0.1)",
				}
			: {
					backgroundColor: "#ff5722",
					textHeaderColor: "#fff4ed",
					textDefaultColor: "#fff4ed",
					selectedTextColor: "#fff4ed",
					mainColor: "#450805",
					textSecondaryColor: "#fff4ed",
					borderColor: "rgba(0, 0, 0, 0.1)",
				};

	return (
		<View className="mx-4">
			<DatePicker
				options={options}
				current={TodayDate}
				selected={TodayDate}
				mode="calendar"
				minuteInterval={30}
				style={{ borderRadius: 10 }}
			/>
		</View>
	);
}
