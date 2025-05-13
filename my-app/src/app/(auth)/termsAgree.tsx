import { View, StyleSheet, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, verticalScale } from "react-native-size-matters";
import imagePath from "@/src/constants/imagePath";

const TermsAgree = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to WhatsApp</Text>
        <Image source={imagePath.welcome} style={styles.imageStyle} />
      </View>
      <View style={styles.footer}>
        <Text style={styles.fromText}>From</Text>
        <Text style={styles.facebookText}>Facebook</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: verticalScale(84)
  },
  header: {
    alignItems: "center",
    gap: verticalScale(30)
  },
  footer: {
    alignItems: "center"
  },
  fromText: {
    fontSize: moderateScale(12),
    color: "#867373"
  },
  facebookText: {
    fontSize: moderateScale(14),
    color: "black",
    textTransform: "uppercase",
    fontWeight: 600
  },
  welcomeText: {
    fontSize: moderateScale(30),
    fontWeight: "bold",
    color: "black"
  },
  imageStyle: {

  }
});

export default TermsAgree;
