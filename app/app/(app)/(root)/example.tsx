import Button from "@/components/Button";
import LabelTextInput from "@/components/LableInput";
import { Text, View } from "@/components/Themed";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const DailyPledgeScreen = () => {
	// State to track whether the user has made the pledge for the day
	const [pledgeMade, setPledgeMade] = useState(false);

	// Function to handle when the user makes the pledge
	const handlePledge = () => {
		// Update state to indicate that the pledge has been made
		setPledgeMade(true);
		// You can also add functionality here to record the pledge in your database
	};

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Today's Pledge</Text>
			<Text style={styles.pledgeText}>
				"I pledge to honor my journey of recovery today. I commit to taking
				positive steps towards healing, growth, and self-discovery. Today, I
				choose sobriety, strength, and self-care. I will embrace each moment
				with gratitude, courage, and resilience. I will remind myself of my
				worth, my potential, and the infinite possibilities that lie ahead. I
				pledge to be kind to myself, to seek support when needed, and to
				celebrate every small victory along the way. Today, I affirm my
				commitment to living a life of purpose, fulfillment, and joy. I am
				worthy. I am capable. I am enough."
			</Text>
			{!pledgeMade ? (
				<TouchableOpacity style={styles.pledgeButton} onPress={handlePledge}>
					<Text style={styles.pledgeButtonText}>Make Today's Pledge</Text>
				</TouchableOpacity>
			) : (
				<Text style={styles.pledgeMadeText}>
					You've already made today's pledge. Keep up the great work!
				</Text>
			)}

			<Button title="Counseling" className="my-4" />
			<LabelTextInput
				style={{ width: "100%" }}
				label="Testing Mic"
				placeholder="Welcome to the input"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		paddingHorizontal: 20,
	},
	header: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
		textAlign: "center",
		color: "white",
	},
	pledgeText: {
		fontSize: 16,
		textAlign: "center",
		marginBottom: 20,
		color: "white",
	},
	pledgeButton: {
		backgroundColor: "#007AFF",
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderRadius: 8,
	},
	pledgeButtonText: {
		color: "#FFF",
		fontSize: 16,
		fontWeight: "bold",
	},
	pledgeMadeText: {
		fontSize: 16,
		textAlign: "center",
		marginTop: 20,
	},
});

export default DailyPledgeScreen;
