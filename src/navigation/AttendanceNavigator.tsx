import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AttendanceHome from '../screens/AttendanceHome';
import LocationCheck from '../screens/LocationCheck';
import SelfieCamera from '../screens/SelfieCamera';
import SelfiePreview from '../screens/SelfiePreview';

export type AttendanceStackParamList = {
  AttendanceHome: undefined;
  LocationCheck: undefined;
  SelfieCamera: undefined;
  SelfiePreview: undefined;
};

const Stack = createNativeStackNavigator<AttendanceStackParamList>();

export default function AttendanceNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="AttendanceHome"
        component={AttendanceHome}
      />
      <Stack.Screen
        name="LocationCheck"
        component={LocationCheck}
      />
      <Stack.Screen
        name="SelfieCamera"
        component={SelfieCamera}
      />
      <Stack.Screen
        name="SelfiePreview"
        component={SelfiePreview}
      />
    </Stack.Navigator>
  );
}
