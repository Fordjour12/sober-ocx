import Button from "@/components/Button";
import MultiLineTextInput from "@/components/MultiLineTextInput";
import { QuickSandBold } from "@/components/StyledText";
import { getStoreValue } from "@/hooks/secureStore.hooks";
import axios from "axios";
import { router } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function reason() {
	const [reason, setReason] = React.useState<string>("");



	const addReason = async (data: string) => {
		const storeData = await getStoreValue("OnBoardingID")
		const onboardingId = JSON.parse(String(storeData))

		try {
			const response = await axios.put(
				`http://192.168.54.242:3000/onboard/reason/${onboardingId}`,
				{
					reasonForSobriety: data
				}
			)
			console.log("response Data:", response.data)
			console.log("response Status:", response.status)


			if (response.status === 200) {
				router.push("/register")
			}

		} catch (error) {
			console.error(error)
		}
	}


	return (
		<SafeAreaView style={{ marginHorizontal: 16 }}>
			<QuickSandBold className="text-5xl my-[20%] tracking-wide">
				What drives your desire for sobriety?
			</QuickSandBold>
			<MultiLineTextInput value={reason} onChangeText={(text) => setReason(text)} />

			<View className="my-[40%]">
				<Button
					style={styles.btn}
					title="Continue"
					onPress={() => addReason(reason)}
				/>
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
