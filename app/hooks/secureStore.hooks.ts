import * as SecureStore from "expo-secure-store";

export async function setStoreValue(key: string, value: string) {
	try {
		await SecureStore.setItemAsync(key, value);
		console.log("Value stored successfully");
	} catch (error) {
		console.log(error);
		console.log("Error storing value");
	}
}

export async function getStoreValue(key: any) {
	try {
		const result = await SecureStore.getItemAsync(key);
		if (result) {
			console.log(result);
			return result;
		} else {
			console.log("No value stored under that key");
		}
	} catch (error) {
		console.log(error);
		console.log("Error getting value");
	}
}

export async function deleteStoreValue(key: any) {
	try {
		await SecureStore.deleteItemAsync(key);
		console.log("Value deleted successfully");
	} catch (error) {
		console.log(error);
		console.log("Error deleting value");
	}
}
