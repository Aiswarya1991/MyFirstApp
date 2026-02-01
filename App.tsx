import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { AttendanceProvider } from './src/context/AttendanceContext';

export default function App() {
  return (
    <AttendanceProvider>
      <AppNavigator />
    </AttendanceProvider>
  );
}
