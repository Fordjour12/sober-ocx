import React, { useEffect, useState } from "react";
import { Text, View } from "@/components/Themed";
import Pledge from "@/constants/pledgeData.json"
import { QuickSandBold } from "@/components/StyledText";

export default function pledge() {


	const [currentPledge, setCurrentPledge] = useState<string>(Pledge[0].pledge);
	const [pledgeIndex, setPledgeIndex] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setPledgeIndex((prevIndex) => {
				const newIndex = (prevIndex + 1) % Pledge.length;
				setCurrentPledge(Pledge[newIndex].pledge);
				return newIndex;
			})
		}, 5 * 60 * 1000); // 5 minutes

		return () => clearInterval(interval);

	}, [])

	return (
		<View className="flex-1 justify-center items-center">
			<QuickSandBold className="text-3xl p-4">{currentPledge}</QuickSandBold>
		</View>
	);
}
