import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;
};

export default function OnboardingScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/onboarding.png')}
        style={styles.image}
      />

      <Text style={styles.title}>Welcome</Text>
      <Text style={styles.subtitle}>
        Manage everything in one place
      </Text>

      <TouchableOpacity
        style={styles.primaryBtn}
        onPress={() => navigation.navigate('Auth', { mode: 'signup' })}
      >
        <Text style={styles.btnText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryBtn}
        onPress={() => navigation.navigate('Auth', { mode: 'signin' })}
      >
        <Text style={styles.secondaryText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E2C',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  image: {
    width: 260,
    height: 260,
    resizeMode: 'contain',
    marginBottom: 40,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: '700',
  },
  subtitle: {
    color: '#B0B0C3',
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
  primaryBtn: {
    backgroundColor: '#6C63FF',
    width: '100%',
    padding: 15,
    borderRadius: 12,
    marginTop: 30,
  },
  btnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryBtn: {
    marginTop: 20,
  },
  secondaryText: {
    color: '#fff',
    fontSize: 14,
  },
});
