import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const SelfieCamera = ({ navigation }: any) => {
  const openCamera = async () => {
    try {
      const result = await launchCamera({
        mediaType: 'photo',
        cameraType: 'front',
        quality: 0.8,
      });

      if (result.didCancel) {
        console.log('User cancelled camera');
        return;
      }

      if (result.errorCode) {
        Alert.alert('Camera Error', result.errorMessage || 'Unknown error');
        return;
      }

      if (result.assets && result.assets.length > 0) {
        navigation.replace('SelfiePreview', {
          photo: result.assets[0],
        });
      }
    } catch (err) {
      Alert.alert('Camera failed', 'Camera could not open');
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Take a Selfie</Text>

      <TouchableOpacity style={styles.btn} onPress={openCamera}>
        <Text style={styles.text}>Open Camera</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SelfieCamera;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
  },
  btn: {
    backgroundColor: '#6C5CE7',
    paddingHorizontal: 24,
    paddingVertical: 14,
    borderRadius: 30,
  },
  text: {
    color: '#fff',
    fontWeight: '700',
  },
});
