import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/OnboardingScreen';
import AuthScreen from '../screens/AuthScreen.tsx';
import HomeScreen from '../screens/HomeScreen';

export type RootStackParamList = {
  Onboarding: undefined;
  Auth: { mode: 'signin' | 'signup' };
  Home: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />

        <Stack.Screen
  name="Auth"
  component={AuthScreen}
  options={{
    headerShown: false,
    presentation: 'transparentModal',
    animation: 'slide_from_bottom',
  }}
/>

       
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
