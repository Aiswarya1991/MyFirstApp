import React, { useState, useMemo } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
  Image,
} from 'react-native';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const { height: SCREEN_HEIGHT } = Dimensions.get('window');

type User = {
  email: string;
  password: string;
};

const AuthScreen = ({ navigation, route }: any) => {
  const isSignupFromRoute = route?.params?.mode === 'signup';

  const [isSignup, setIsSignup] = useState(isSignupFromRoute || false);
  const [isEmployeeLogin, setIsEmployeeLogin] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [employeeId, setEmployeeId] = useState('');
  const [employeePassword, setEmployeePassword] = useState('');

  const [users, setUsers] = useState<User[]>([]);

  /* ---------------- VALIDATION ---------------- */

  const emailError = useMemo(() => {
    if (!email) return 'Email is required';
    if (!emailRegex.test(email)) return 'Enter valid email';
    return '';
  }, [email]);

  const passwordError = useMemo(() => {
    if (!password) return 'Password is required';
    if (password.length < 6) return 'Minimum 6 characters';
    return '';
  }, [password]);

  const confirmPasswordError = useMemo(() => {
    if (!isSignup) return '';
    if (confirmPassword !== password) return 'Passwords do not match';
    return '';
  }, [confirmPassword, password, isSignup]);

  const isFormValid = isEmployeeLogin
    ? employeeId.length > 0 && employeePassword.length > 0
    : !emailError && !passwordError && (!isSignup || !confirmPasswordError);

  /* ---------------- SUBMIT ---------------- */

  const handleSubmit = () => {
    if (isEmployeeLogin) {
      Alert.alert('Success', `Employee ${employeeId} signed in`);
      navigation.replace('Home');
      return;
    }

    if (isSignup) {
      const existingUser = users.find(u => u.email === email);
      if (existingUser) {
        Alert.alert('Error', 'Email already registered');
        return;
      }

      setUsers([...users, { email, password }]);
      Alert.alert('Success', 'Account created!');
      setIsSignup(false);
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      return;
    }

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      Alert.alert('Error', 'Invalid email or password');
      return;
    }

    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBackground} />

      <KeyboardAvoidingView
        style={styles.panel}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Text style={styles.title}>
          {isEmployeeLogin ? 'Employee Sign In' : isSignup ? 'Sign Up' : 'Sign In'}
        </Text>

        {!isEmployeeLogin ? (
          <>
            {/* EMAIL */}
            <View style={styles.inputRow}>
              <Image
                source={require('../../assets/images/email.png')}
                style={styles.iconLeft}
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
              />
            </View>
            {!!emailError && <Text style={styles.error}>{emailError}</Text>}

            {/* PASSWORD */}
            <View style={styles.inputRow}>
              <Image
                source={require('../../assets/images/password.png')}
                style={styles.iconLeft}
              />
              <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image
                  source={
                    showPassword
                      ? require('../../assets/images/eye.png')
                      : require('../../assets/images/eye.png')
                  }
                  style={styles.iconRight}
                />
              </TouchableOpacity>
            </View>
            {!!passwordError && <Text style={styles.error}>{passwordError}</Text>}

            {isSignup && (
              <>
                <View style={styles.inputRow}>
                  <Image
                    source={require('../../assets/images/password.png')}
                    style={styles.iconLeft}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                  />
                </View>
                {!!confirmPasswordError && (
                  <Text style={styles.error}>{confirmPasswordError}</Text>
                )}
              </>
            )}
          </>
        ) : (
          <>
            {/* EMPLOYEE ID */}
            <View style={styles.inputRow}>
              <Image
                source={require('../../assets/images/employeeid.png')}
                style={styles.iconLeft}
              />
              <TextInput
                style={styles.input}
                placeholder="MY Employee ID"
                value={employeeId}
                onChangeText={setEmployeeId}
              />
            </View>

            {/* EMPLOYEE PASSWORD */}
            <View style={styles.inputRow}>
              <Image
                source={require('../../assets/images/password.png')}
                style={styles.iconLeft}
              />
              <TextInput
                style={styles.input}
                placeholder="MY Password"
                value={employeePassword}
                onChangeText={setEmployeePassword}
                secureTextEntry
              />
            </View>
          </>
        )}

        <TouchableOpacity
          style={[styles.button, { opacity: isFormValid ? 1 : 0.5 }]}
          disabled={!isFormValid}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>
            {isEmployeeLogin ? 'Employee Sign In' : isSignup ? 'Sign Up' : 'Sign In'}
          </Text>
        </TouchableOpacity>

        {!isSignup && !isEmployeeLogin && (
          <>
            <View style={styles.orContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.line} />
            </View>

            <TouchableOpacity
              style={styles.altButton}
              onPress={() => setIsEmployeeLogin(true)}
            >
              <Text style={styles.altButtonText}>
                Sign In with Employee ID
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.altButton}>
              <Text style={styles.altButtonText}>
                Sign In with PHONE
              </Text>
            </TouchableOpacity>
          </>
        )}

        {isEmployeeLogin ? (
          <TouchableOpacity onPress={() => setIsEmployeeLogin(false)}>
            <Text style={styles.switchText}>Back to Email Sign In</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => setIsSignup(!isSignup)}>
            <Text style={styles.switchText}>
              {isSignup
                ? 'Already have an account? Sign In'
                : "Don't have an account? Sign Up"}
            </Text>
          </TouchableOpacity>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default AuthScreen;
const styles = StyleSheet.create({
  container: { flex: 1 },

  topBackground: {
    position: 'absolute',
    width: '100%',
    height: SCREEN_HEIGHT / 3,
    backgroundColor: '#7B61FF',
  },

  panel: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: (SCREEN_HEIGHT * 2) / 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
  },

  title: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 24,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginTop: 10,
  },

  input: {
    flex: 1,
    paddingVertical: 14,
  },

  iconLeft: {
    width: 20,
    height: 20,
    tintColor: '#7B61FF',
    marginRight: 10,
  },

  iconRight: {
    width: 20,
    height: 20,
    tintColor: '#7B61FF',
  },

  error: {
    color: '#FF4D4D',
    fontSize: 12,
    marginTop: 4,
  },

  button: {
    backgroundColor: '#7B61FF',
    padding: 16,
    borderRadius: 20,
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },

  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },

  line: { flex: 1, height: 1, backgroundColor: '#ccc' },

  orText: {
    marginHorizontal: 8,
    color: '#888',
    fontWeight: '600',
  },

  altButton: {
    borderWidth: 1,
    borderColor: '#7B61FF',
    borderRadius: 20,
    padding: 14,
    marginTop: 10,
  },

  altButtonText: {
    color: '#7B61FF',
    textAlign: 'center',
    fontWeight: '600',
  },

  switchText: {
    color: '#7B61FF',
    textAlign: 'center',
    marginTop: 20,
  },
});
