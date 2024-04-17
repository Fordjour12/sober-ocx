import { View } from "@/components/Themed";
import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

const MultiLineTextInput = () => {
	const [text, setText] = useState("");
	const [value, onChangeText] = React.useState("Useless Multiline Placeholder");

	return (
		<View>
			<TextInput
				style={styles.input}
				multiline={true}
				numberOfLines={10} // Adjust as needed
				placeholder="Enter your text here..."
				value={text}
				onChangeText={(newText) => setText(newText)}
				className="placeholder-gray-900"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		backgroundColor: "#ff5722",
		borderWidth: 1,
		borderColor: "gray",
		borderRadius: 5,
		paddingHorizontal: 10,
		paddingTop: 10,
		color: "#fff4ed",
		textAlignVertical: "top",
	},
});

export default MultiLineTextInput;
