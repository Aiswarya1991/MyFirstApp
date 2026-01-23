import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const LoginScreen = ({ navigation }: any) => {
  const [hide, setHide] = useState(true);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Sign In</Text>
        <Text style={styles.subtitle}>Sign in to my account</Text>

        <TextInput
          placeholder="Email"
          style={styles.input}
        />

        <TextInput
          placeholder="Password"
          secureTextEntry={hide}
          style={styles.input}
        />

        <TouchableOpacity
          onPress={() => setHide(!hide)}
        >
          <Text style={styles.hideText}>
            {hide ? 'Show Password' : 'Hide Password'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.replace('Home')}
        >
          <Text style={styles.loginText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B1D3C',
    justifyContent: 'flex-end',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    color: '#888',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
  },
  hideText: {
    color: '#6A4DFF',
    textAlign: 'right',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#6A4DFF',
    padding: 14,
    borderRadius: 25,
    marginTop: 10,
  },
  loginText: {
    color: '#FFF',
    textAlign: 'center',
    fontWeight: '600',
  },
});
