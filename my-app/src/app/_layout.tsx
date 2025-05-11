import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Redirect, Stack } from "expo-router";

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [login, setLogin] = useState(false);
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      {login ? <Redirect href={"/(main)"} /> : <Redirect href={"/(auth)"} />}
    </>
  );
};

export default RootLayout;
