import { Text, type TextProps } from "@/components/Themed";
import React from "react";

export function MonoText(props: TextProps) {
	return <Text {...props} style={[props.style, { fontFamily: "SpaceMono" }]} />;
}

export function QuickSandRegular(props: TextProps) {
	return (
		<Text
			{...props}
			style={[props.style, { fontFamily: "QuickSandRegular" }]}
		/>
	);
}

export function QuickSandBold(props: TextProps) {
	return (
		<Text {...props} style={[props.style, { fontFamily: "QuickSandBold" }]} />
	);
}

export function QuickSandMedium(props: TextProps) {
	return (
		<Text {...props} style={[props.style, { fontFamily: "QuickSandMedium" }]} />
	);
}

export function QuicksandSemiBold(props: TextProps) {
	return (
		<Text
			{...props}
			style={[props.style, { fontFamily: "QuicksandSemiBold" }]}
		/>
	);
}
