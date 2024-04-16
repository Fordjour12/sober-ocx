import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type ButtonProps = {
	title: string;
	onPress?: () => void;
	style?: object;
	className?: string;
};

const Button = ({ title, onPress, style, className }: ButtonProps) => {
	return (
		<TouchableOpacity
			style={[styles.button, style]}
			className={className}
			onPress={onPress}
		>
			<Text style={styles.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#007bff",
		borderRadius: 8,
		paddingVertical: 12,
		paddingHorizontal: 24,
		justifyContent: "center",
		alignItems: "center",
		elevation: 3, // Add elevation for Android shadow
	},
	buttonText: {
		color: "#ffffff",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default Button;
