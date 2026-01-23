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

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [employeeId, setEmployeeId] = useState('');
  const [employeePassword, setEmployeePassword] = useState('');

  const [users, setUsers] = useState<User[]>([]);

  // ---------- VALIDATION ----------
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

  const isFormValid =
    !emailError &&
    !passwordError &&
    (!isSignup || !confirmPasswordError);

  const handleSubmit = () => {
    if (!isFormValid) return;

    if (isSignup) {
      const existingUser = users.find(u => u.email === email);
      if (existingUser) {
        Alert.alert('Error', 'Email already registered');
        return;
      }

      setUsers([...users, { email, password }]);
      Alert.alert('Success', 'Account created!');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setIsSignup(false);
    } else {
      const user = users.find(u => u.email === email && u.password === password);
      if (!user) {
        Alert.alert('Error', 'Invalid email or password');
        return;
      }
      navigation.replace('Home');
    }
  };

  const handleEmployeeSignIn = () => {
    if (!employeeId || !employeePassword) {
      Alert.alert('Error', 'Employee ID and Password are required');
      return;
    }
    // Replace this with your employee authentication logic
    Alert.alert('Success', `Signed in as Employee ${employeeId}`);
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      {/* Top blue background */}
      <View style={styles.topBackground} />

      {/* Sliding panel */}
      <KeyboardAvoidingView
        style={styles.panel}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <Text style={styles.title}>
          {isSignup ? 'Sign Up' : 'Sign In'}
        </Text>

        {/* EMAIL */}
        <TextInput
          style={styles.inputEmail}
          placeholder="Email"
          placeholderTextColor="#888"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        {!!emailError && <Text style={styles.error}>{emailError}</Text>}

        {/* PASSWORD */}
        <View style={styles.passwordRow}>
          <TextInput
            style={styles.passwordInput}
            placeholder="Password"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Text style={styles.eye}>{showPassword ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
        {!!passwordError && <Text style={styles.error}>{passwordError}</Text>}

        {/* CONFIRM PASSWORD */}
        {isSignup && (
          <>
            <TextInput
              style={styles.passwordRow}
              placeholder="Confirm Password"
              placeholderTextColor="#888"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showPassword}
            />
            {!!confirmPasswordError && (
              <Text style={styles.error}>{confirmPasswordError}</Text>
            )}
          </>
        )}

        {/* SIGN UP / SIGN IN BUTTON */}
        <TouchableOpacity
          style={[styles.button, { opacity: isFormValid ? 1 : 0.5 }]}
          disabled={!isFormValid}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>
            {isSignup ? 'Sign Up' : 'Sign In'}
          </Text>
        </TouchableOpacity>
           {!isSignup && (
          <>
  

        {/* OR Separator */}
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.line} />
        </View>

        {/* EMPLOYEE ID SIGN IN */}
        <TextInput
          style={styles.input}
          placeholder="Sign In with Employee ID"
          placeholderTextColor="#7B61FF"
          value={employeeId}
          onChangeText={setEmployeeId}
        
        />
        <TextInput
          style={styles.input}
          placeholder="Sign In with Phone"
          placeholderTextColor="#7B61FF"
          value={employeePassword}
          onChangeText={setEmployeePassword}
          secureTextEntry
        />

       </>
        )}
        {/* SWITCH */}
        <TouchableOpacity onPress={() => setIsSignup(!isSignup)}>
          <Text style={styles.switchText}>
            {isSignup
              ? 'Already have an account? Sign In'
              : "Don't have an account? Sign Up"}
          </Text>
        </TouchableOpacity>
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
    height: SCREEN_HEIGHT / 2,
    backgroundColor: '#7B61FF',
  },
  panel: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: (SCREEN_HEIGHT *3) / 4,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    color: '#000',
    marginBottom: 24,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    borderWidth:1,
    borderColor:'#7B61FF',
    borderRadius: 20,
    textAlign:'center',
    padding: 14,
    marginTop: 10,
  },
   inputEmail: {
    backgroundColor: '#fff',
    borderWidth:1,
    borderColor:'#D3D3D3',
    borderRadius: 8,
    textAlign:'left',
    padding: 14,
    marginTop: 10,
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
        borderWidth:1,
    borderColor:'#D3D3D3',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginTop: 10,
    paddingHorizontal: 14,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 14,
    color: '#000',
  },
  eye: { fontSize: 18, color: '#000' },
  error: { color: '#FF4D4D', fontSize: 12, marginTop: 4 },
  button: {
    backgroundColor: '#7B61FF',
    padding: 16,
    borderRadius: 20,
    marginTop: 16,
  },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '600' },
  switchText: { color: '#7B61FF', textAlign: 'center', marginTop: 20 },

  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  line: { flex: 1, height: 1, backgroundColor: '#ccc' },
  orText: { marginHorizontal: 8, color: '#888', fontWeight: '600' },
});
