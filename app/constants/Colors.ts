const tintColorLight = "#f02e06";
// "#2f95dc";
const tintColorDark = "#9e1a0e";
// "#fff";
const tabIconDefaultColorLight = "#ff5722";
const tabIconDefaultColorDark = "c71e07";

const textDark = "#fff4ed";
const textLight = "#450805";

export default {
	light: {
		text: textLight || "#000",
		background: "#fff",
		tint: tintColorLight,
		tabIconDefault: tabIconDefaultColorLight,
		tabIconSelected: tintColorLight,
	},
	dark: {
		text: textDark || "#fff",
		background: "#000",
		tint: tintColorDark,
		tabIconDefault: tabIconDefaultColorDark,
		tabIconSelected: tintColorDark,
	},
};
