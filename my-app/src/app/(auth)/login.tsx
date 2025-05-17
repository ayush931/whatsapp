import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import ButtonComponent from "@/src/components/atoms/ButtonComponent";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";

const Login = () => {
  const onNextButtonClick = () => {
    router.push("/(auth)/verifyOtp")
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headingContainer}>
          <Text style={styles.heading}>Enter your Phone Number</Text>
          <Text style={styles.description}>
            WhatsApp will need to verify your Phone Number.
            <Text style={styles.linkDescription}> What&apos;s my number?</Text>
          </Text>
        </View>
        <View style={styles.inputMainContainer}>
          <View style={styles.dropDownContainer}>
            <View />
            <Text style={styles.dropDownTitle}>India</Text>
            <AntDesign
              name="caretdown"
              size={moderateScale(14)}
              color="black"
            />
          </View>
          <View style={styles.horizontalLine} />
          <View style={styles.inputContainer}>
            <View style={styles.countryCode}>
              <Text style={styles.countryCodeText}>+ 91</Text>
              <View style={styles.horizontalLine} />
            </View>
            <View style={{ gap:verticalScale(10), flex: 1 }}>
              <TextInput style={styles.input} placeholder="Enter your phone number" />
              <View style={styles.horizontalLine} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonComponent
          title="Next"
          style={{ paddingHorizontal: moderateScale(29) }}
          onPress={onNextButtonClick}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingVertical: verticalScale(50),
    alignItems: "center",
    paddingHorizontal: scale(40),
  },
  header: {
    gap: verticalScale(50),
  },
  footer: {},
  headingContainer: {
    gap: verticalScale(20),
  },
  inputMainContainer: {
  },
  inputContainer: {
    paddingVertical: verticalScale(12),
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(20)
  },
  heading: {
    fontSize: moderateScale(20),
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: moderateScale(13),
    fontWeight: "400",
    color: "black",
  },
  linkDescription: {
    color: "#002ac0",
  },
  horizontalLine: {
    width: "100%",
    height: verticalScale(1),
    backgroundColor: "#05aa82",
  },
  dropDownContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: moderateScale(10),
    paddingHorizontal: scale(20),
  },
  dropDownTitle: {
    fontSize: moderateScale(16),
    fontWeight: "500",
    color: "black",
  },
  countryCode: {
    gap: verticalScale(10),
    fontWeight: "500",
    color: "black"
  },
  input: {
    fontSize: moderateScale(16)
  },
  countryCodeText: {
    fontSize: moderateScale(14),
    fontWeight: "500",
    color: "black",
  },
});

export default Login;
