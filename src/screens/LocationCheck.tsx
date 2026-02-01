
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchCamera } from 'react-native-image-picker';

const LocationCheck = ({ navigation }: any) => {
  const currentTime = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
  });

  // ✅ OPEN CAMERA DIRECTLY
  const openCamera = async () => {
    const result = await launchCamera({
      cameraType: 'front',
      mediaType: 'photo',
      saveToPhotos: false,
    });

    if (result.didCancel) return;

    if (result.assets && result.assets.length > 0) {
      navigation.navigate('SelfiePreview', {
        photo: result.assets[0],
      });
    }
  };

  return (
    <SafeAreaView style={styles.safe}>
      {/* MAP BACKGROUND */}
      <View style={styles.mapContainer}>
        <Image
          source={require('../../assets/images/map_bg.png')}
          style={StyleSheet.absoluteFillObject}
        />

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.mapTitle}>Clock In Area</Text>

        <View style={styles.outerCircle}>
          <View style={styles.innerCircle}>
            <Image
              source={require('../../assets/images/user1.png')}
              style={styles.avatar}
            />
          </View>
        </View>
      </View>

      {/* CONTENT */}
      <View style={styles.content}>
        <View style={styles.infoBanner}>
          <View>
            <Text style={styles.infoTitle}>
              You are in the clock-in area!
            </Text>
            <Text style={styles.infoSub}>
              Now you can press clock in
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>MY PROFILE</Text>

        <View style={styles.profileCard}>
          <Image
            source={require('../../assets/images/user1.png')}
            style={styles.profileImg}
          />
          <View style={{ flex: 1 }}>
            <Text style={styles.name}>Tonald Drump ✔</Text>
            <Text style={styles.date}>Today</Text>
            <Text style={styles.location}>
              📍 Lat 10.0158 | Long 76.3418
            </Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>SCHEDULE</Text>

        <View style={styles.scheduleRow}>
          <View style={styles.scheduleBox}>
            <Text style={styles.scheduleLabel}>CLOCK IN</Text>
            <Text style={styles.scheduleTime}>{currentTime}</Text>
          </View>

          <View style={styles.scheduleBox}>
            <Text style={styles.scheduleLabel}>CLOCK OUT</Text>
            <Text style={styles.scheduleTime}>05:00 PM</Text>
          </View>
        </View>

        {/* ✅ DIRECT CAMERA OPEN */}
        <TouchableOpacity style={styles.selfieBtn} onPress={openCamera}>
          <Text style={styles.selfieText}>Selfie To Clock In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LocationCheck;

/* styles remain EXACTLY same as your code */


const styles = StyleSheet.create({
  safe: { flex: 1 },

  mapContainer: {
    height: 320,
  },

  mapTitle: {
    position: 'absolute',
    top: 50,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '700',
    backgroundColor: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },

  backBtn: {
    position: 'absolute',
    top: 45,
    left: 16,
    backgroundColor: '#fff',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },

  backArrow: { fontSize: 22 },

  outerCircle: {
    position: 'absolute',
    top: 80,
    alignSelf: 'center',
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 2,
    borderColor: '#6C5CE7',
    backgroundColor: 'rgba(108,92,231,0.15)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  innerCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#6C5CE7',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  content: {
    flex: 1,
    backgroundColor: '#F4F6FB',
    marginTop: -20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 16,
  },

  infoBanner: {
    backgroundColor: '#7B61FF',
    borderRadius: 14,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  infoTitle: { color: '#fff', fontWeight: '700' },
  infoSub: { color: '#E8E5FF', marginTop: 4 },
  infoIcon: { width: 40, height: 40 },

  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '700',
    color: '#999',
  },

  profileCard: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
  },

  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },

  name: { fontWeight: '700' },
  date: { fontSize: 12, color: '#777', marginTop: 4 },
  location: { fontSize: 12, marginTop: 4 },

  scheduleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  scheduleBox: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
  },

  scheduleLabel: { color: '#777', fontSize: 12 },
  scheduleTime: { fontSize: 22, fontWeight: '700', marginTop: 6 },

  selfieBtn: {
    marginTop: 24,
    backgroundColor: '#6C5CE7',
    paddingVertical: 16,
    borderRadius: 28,
    alignItems: 'center',
  },

  selfieText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
