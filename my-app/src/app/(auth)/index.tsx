import { View, StyleSheet, Text, Image, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import imagePath from "@/src/constants/imagePath";
import { verticalScale, moderateScale } from "react-native-size-matters";
import { router } from "expo-router";

const Auth = () => {
  const [isLoading, setIsLoading] = useState(true);

  const navigateToWelcome = () => {
    router.push("/termsAgree");
  };

  const loadingTimeout = () => {
    setIsLoading(true);
    setTimeout(navigateToWelcome, 3000);
  };

  useEffect(() => {
    const timeout = setTimeout(loadingTimeout, 2000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}></View>
      <View style={styles.body}>
        <Image source={imagePath.logo} style={styles.logoStyle} />
        <Text style={styles.whatsAppText}>WhatsApp</Text>
      </View>
      <View style={styles.footer}>
        {isLoading ? (
          <>
            <ActivityIndicator size={moderateScale(40)} color={"#0ccc83"} />
            <Text style={styles.loadingText}>Loading...</Text>
          </>
        ) : (
          <>
            <Text style={styles.fromText}>From</Text>
            <Text style={styles.facebookText}>Facebook</Text>
          </>
        )}
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
    paddingVertical: verticalScale(50),
  },
  header: {},
  body: {
    alignItems: "center",
    gap: verticalScale(10),
  },
  footer: {
    alignItems: "center",
    height: verticalScale(50),
    justifyContent: "flex-end",
  },

  fromText: {
    fontSize: moderateScale(12),
    color: "#867373",
  },
  facebookText: {
    fontSize: moderateScale(15),
    color: "#000000",
  },
  logoStyle: {
    height: moderateScale(50),
    width: moderateScale(50),
    borderRadius: moderateScale(10),
  },
  whatsAppText: {
    fontSize: moderateScale(35),
    color: "#000000",
    fontWeight: "bold",
  },
  loadingText: {
    fontSize: moderateScale(18),
    color: "#00a884",
    fontWeight: "bold",
  },
});

export default Auth;
