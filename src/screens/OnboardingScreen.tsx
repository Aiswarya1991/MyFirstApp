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
      source={require('../../assets/images/onboarding.png')} // background image
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

        {/* Image 3 below stacked images */}
        <Image
          source={require('../../assets/images/image3.png')}
          style={styles.image3}
          resizeMode="contain"
        />
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
    justifyContent: 'space-between', // space top and bottom
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
    width: 300,
    height: 400,
    top: 0,
    left: 0,
    alignContent:'stretch',
  },
  image2: {
    position: 'relative',
    width: 300,
    height: 400,

    top: 25,
    left: 25,
  },
  image3: {
    width: 400, // adjust width as needed
    height: 100, // adjust height as needed
    marginTop: 150,
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
