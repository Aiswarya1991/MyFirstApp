import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
  route: RouteProp<RootStackParamList, 'Auth'>;
  navigation: any;
};

export default function AuthScreen({ route, navigation }: Props) {
  const [mode, setMode] = useState(route.params.mode);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {mode === 'signin' ? 'Sign In' : 'Create Account'}
      </Text>

      <TextInput placeholder="Email" placeholderTextColor="#999" style={styles.input} />
      <TextInput placeholder="Password" placeholderTextColor="#999" style={styles.input} secureTextEntry />

      {mode === 'signup' && (
        <TextInput placeholder="Confirm Password" placeholderTextColor="#999" style={styles.input} />
      )}

      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => navigation.replace('Home')}
      >
        <Text style={styles.btnText}>
          {mode === 'signin' ? 'Sign In' : 'Sign Up'}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setMode(mode === 'signin' ? 'signup' : 'signin')}>
        <Text style={styles.switchText}>
          {mode === 'signin'
            ? "Don't have an account? Sign Up"
            : 'Already have an account? Sign In'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2C',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#2A2A3D',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  primaryBtn: {
    backgroundColor: '#6C63FF',
    padding: 15,
    borderRadius: 12,
    marginTop: 10,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  switchText: {
    color: '#B0B0C3',
    textAlign: 'center',
    marginTop: 20,
  },
});
