import { View, StyleSheet, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import imagePath from "@/src/constants/imagePath";
import ButtonComponent from "@/src/components/atoms/ButtonComponent";
import { router } from "expo-router";

const TermsAgree = () => {
  const onAgree = () => {
    router.push("/(auth)/login")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to WhatsApp</Text>
        <Image source={imagePath.welcome} style={styles.imageStyle} />
        <Text style={styles.descriptionText}>Read our <Text style={styles.linkText}>Privacy Policy</Text>. Tap <Text style={styles.linkText}>Agree and Continue</Text> to accept the Terms of Services.</Text>
        <View style={{ width: moderateScale(300) }}>
          <ButtonComponent title="Agree and Continue" onPress={onAgree} />
        </View>
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
    paddingVertical: verticalScale(84),
    paddingHorizontal: scale(30)
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
    color: "black",
    marginBottom: moderateScale(10)
  },
  imageStyle: {
    width: moderateScale(250),
    height: moderateScale(250),
    borderRadius: moderateScale(250)
  },
  descriptionText: {
    textAlign: "center",
    fontSize: moderateScale(13),
    color: "black"
  },
  linkText: {
    color: "#0c42cc"
  }
});

export default TermsAgree;
