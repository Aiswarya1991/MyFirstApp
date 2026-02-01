import React from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';

export default function OnboardingScreen({ navigation }: any) {
  return (
    <ImageBackground
      source={require('../../assets/images/onboarding.png')}
      style={styles.background}
      resizeMode="cover"
    >
      {/* Top Section */}
      <View style={styles.topContainer}>
        {/* Stacked Images */}
        <View style={styles.imageStack}>
          <Image
            source={require('../../assets/images/image1.png')}
            style={styles.image1}
            resizeMode="contain"
          />
          <Image
            source={require('../../assets/images/image2.png')}
            style={styles.image2}
            resizeMode="contain"
          />
        </View>

        {/* TEXT (replacing image3 ONLY) */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            Navigate Your Work{'\n'}Journey Efficient & Easy
          </Text>

          <Text style={styles.subtitle}>
            Increase your work management & career{'\n'}
            development radically
          </Text>
        </View>
      </View>

      {/* Bottom Buttons */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.signUpBtn}
          onPress={() => navigation.navigate('Auth', { mode: 'signup' })}
        >
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signInBtn}
          onPress={() => navigation.navigate('Auth', { mode: 'signin' })}
        >
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 0,
  },

  topContainer: {
    alignItems: 'center',
    marginTop: 60,
  },

  imageStack: {
    position: 'relative',
    width: 300,
    height: 200,
    marginBottom: 20,
  },

  image1: {
    position: 'absolute',
    width:250,
    height: 400,
    top: 0,
    left: 0,
    alignContent: 'stretch',
  },

  image2: {
    position: 'relative',
    width: 300,
    height: 400,
    top: 140,
    left: 25,
  },

  /* ONLY NEW STYLES */
  textContainer: {
    width: 400,
    marginTop: 250, // SAME as image3 margin
    alignItems: 'center',
  },

  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },

  bottomContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },

  signUpBtn: {
    backgroundColor: '#6C63FF',
    paddingVertical: 16,
    borderRadius: 12,
    marginBottom: 16,
  },

  signUpText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },

  signInBtn: {
    borderWidth: 2,
    borderColor: '#6C63FF',
    paddingVertical: 16,
    borderRadius: 12,
  },

  signInText: {
    color: '#6C63FF',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
