import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import OnboardingScreen from '../screens/OnboardingScreen';
import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/HomeScreen';
import AttendanceNavigator from './AttendanceNavigator';

/**
 * Root stack params
 */
export type RootStackParamList = {
  Onboarding: undefined;
  Auth: { mode: 'signin' | 'signup' };
  Home: undefined;
  Attendance: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* Onboarding */}
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
        />

        {/* Auth modal */}
        <Stack.Screen
          name="Auth"
          component={AuthScreen}
          options={{
            presentation: 'transparentModal',
            animation: 'slide_from_bottom',
          }}
        />

        {/* Home */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        {/* Attendance FLOW (Nested Navigator) */}
        <Stack.Screen
          name="Attendance"
          component={AttendanceNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
