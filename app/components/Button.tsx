import { Text } from "@/components/Themed";
import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

type ButtonProps = {
	title: string;
	onPress: () => void;
	style?: object;
};

const Button = ({ title, onPress, style }: ButtonProps) => {
	return (
		<TouchableOpacity style={[styles.button, style]} onPress={onPress}>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		// backgroundColor: "#007bff",
		borderRadius: 8,
		paddingVertical: 12,
		paddingHorizontal: 24,
		justifyContent: "center",
		alignItems: "center",
		elevation: 3, // Add elevation for Android shadow
	},
	buttonText: {
		color: "#fff4ed",
		fontSize: 16,
		fontFamily: "QuickSandBold",
		fontWeight: "bold",
	},
});

export default Button;
