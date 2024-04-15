import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "../Themed";

type CustomButtonsProps = {
  Text: string;
  onPress: () => void;
  className?: string;
}

export function CustomButton(props: CustomButtonsProps) {

  return (
    <TouchableOpacity className={`py-4 rounded-xl ${props.className}`} onPress={props.onPress}>
      <Text style={styles.text} className="text-center font-bold">{props.Text}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

  text: {
    color: "#fff"
  }
})

