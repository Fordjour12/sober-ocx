import Button from "@/components/Button";
import DateTimePicker from "@/components/DatePicker";
import { QuickSandBold } from "@/components/StyledText";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { getToday } from "react-native-modern-datepicker";
import axios from "axios";
import { getStoreValue, setStoreValue } from "@/hooks/secureStore.hooks";

export default function SoberData() {


	const Today = getToday();

	const [selectedDate, setSelectedDate] = useState<string>(Today);


	const addSoberDate = async (date: string) => {
		try {
			const response = await axios.post(
				"http://192.168.54.242:3000/onboard/reason",
				{
					soberDate: date
				},
				{
					headers: {
						"Content-Type": "application/json"
					}
				}
			)
			console.log(response.data)

			if (response.status === 200) {
				await setStoreValue("OnBoardingID", JSON.stringify(response.data.message[0].onboardingId))
				router.push("/reason")
			}
		}
		catch (error) {
			console.error(error)
		}
	}


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
