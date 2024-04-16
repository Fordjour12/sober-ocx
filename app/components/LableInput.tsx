import { Text, View } from "@/components/Themed";
import React from "react";
import { StyleSheet, TextInput } from "react-native";

type LabelTextInputProps = {
	label: string;
	value?: string;
	onChangeText?: (text: string) => void;
	placeholder?: string;
	style?: object;
};

const LabelTextInput = ({
	label,
	value,
	onChangeText,
	placeholder,
	style,
}: LabelTextInputProps) => {
	return (
		<View style={[styles.container, style]}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				style={styles.input}
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 16,
	},
	label: {
		marginBottom: 8,
		fontWeight: "bold",
	},
	input: {
		height: 40,
		borderWidth: 1,
		borderColor: "#ccc",
		borderRadius: 8,
		paddingHorizontal: 10,
	},
});

export default LabelTextInput;
