// import { LinearGradient } from "expo-linear-gradient";
// import React, { useEffect } from "react";
// import { StyleSheet, View } from "react-native";
// import Animated, {
// 	useAnimatedStyle,
// 	useSharedValue,
// 	withTiming,
// } from "react-native-reanimated";

// const App = () => {
// 	const progress = useSharedValue(0);

// 	useEffect(() => {
// 		progress.value = withTiming(1, { duration: 5000, loop: true });
// 	}, []);

// 	const animatedStyle = useAnimatedStyle(() => {
// 		return {
// 			opacity: progress.value,
// 		};
// 	});

// 	return (
// 		<View style={styles.container}>
// 			<LinearGradient
// 				colors={["rgba(255, 111, 55, 1)", "rgba(199, 30, 7, 1)"]}
// 				style={styles.gradient}
// 			/>
// 			<Animated.View style={[styles.gradient, animatedStyle]}>
// 				<LinearGradient
// 					colors={["rgba(255, 111, 55, 0)", "rgba(199, 30, 7, 0)"]}
// 					style={styles.gradient}
// 				/>
// 			</Animated.View>
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 	},
// 	gradient: {
// 		...StyleSheet.absoluteFillObject,
// 	},
// });

// export default App;

import React, { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Animated, {
	Easing,
	interpolateColor,
	useAnimatedStyle,
	useSharedValue,
	withRepeat,
	withTiming,
} from "react-native-reanimated";

const App = () => {
	const progress = useSharedValue(0);

	useEffect(() => {
		progress.value = withRepeat(
			withTiming(1, { duration: 1000, easing: Easing.linear }),
			-1,
			true,
		);
	}, [progress]);

	const startColor = "#ff6f37";
	const endColor = "#82bd69";

	const animatedStyle = useAnimatedStyle(() => {
		const interpolatedColor = interpolateColor(
			progress.value,
			[0, 1],
			[startColor, endColor],
		);

		return {
			backgroundColor: interpolatedColor,
			width: "100%",
			height: "100%",
		};
	});

	return (
		<View style={styles.container}>
			<Animated.View style={animatedStyle} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
export default App;
