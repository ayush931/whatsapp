import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const ButtonComponent = ({ title, onPress, style }: any) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, style]}
      activeOpacity={0.9}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#00a884",
    width: "100%",
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10),
    borderRadius: moderateScale(4),
    alignItems: "center",
  },
  buttonText: {
    fontSize: moderateScale(14),
    color: "white",
  },
});

export default ButtonComponent;
