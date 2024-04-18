import React from "react";
import { StyleSheet, TextInput, View, useColorScheme } from "react-native";
import { QuickSandMedium } from "./StyledText";

type TextInputWithLabelProps = {
	label: string;
	value: string;
	onChangeText: (text: string) => void;
	placeholder: string;
	style?: object;
};

const TextInputWithLabel = ({
	label,
	value,
	onChangeText,
	placeholder,
	style,
}: TextInputWithLabelProps) => {
	const scheme = useColorScheme();
	const placeholderTextColorOptions = scheme === "light" ? "#ccc" : "#ccc";

	return (
		<View style={[styles.container, style]}>
			<QuickSandMedium style={styles.label}>{label}</QuickSandMedium>
			<TextInput
				style={styles.input}
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}
				placeholderTextColor={placeholderTextColorOptions}
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
		paddingVertical: 10,
	},
});

export default TextInputWithLabel;
