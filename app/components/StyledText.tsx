import React from "react";
import { Text, type TextProps } from "./Themed";

export function MonoText(props: TextProps) {
	return <Text {...props} style={[props.style, { fontFamily: "SpaceMono" }]} />;
}

export function QuickSandRegularText(props: TextProps) {
	return (
		<Text
			{...props}
			style={[props.style, { fontFamily: "QuickSandRegular" }]}
		/>
	);
}

export function QuickSandSemiBoldText(props: TextProps) {
	return (
		<Text
			{...props}
			style={[props.style, { fontFamily: "QuickSandSemiBold" }]}
		/>
	);
}

export function QuickSandBoldText(props: TextProps) {
	return (
		<Text {...props} style={[props.style, { fontFamily: "QuickSandBold" }]} />
	);
}
