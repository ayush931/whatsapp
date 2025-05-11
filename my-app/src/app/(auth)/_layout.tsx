import React from 'react'
import { Stack } from 'expo-router'

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='index' />
      <Stack.Screen name='termsAgree' />
      <Stack.Screen name='login' />
      <Stack.Screen name='verifyOtp' />
    </Stack>
  )
}

export default AuthLayout