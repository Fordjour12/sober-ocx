import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../Themed";


type CustomButtonsProps = {
  Text: string;
  onPress: () => void;
}

export function CustomButton(props: CustomButtonsProps) {

  return (
    <TouchableOpacity className="bg-red-500 mx-4 p-3 rounded-lg" onPress={props.onPress}>
      <Text style={styles.text} className="text-center font-bold">{props.Text}</Text>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({

  text: {
    color: "#000"
  }
})

