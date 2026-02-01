import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAttendance } from '../context/AttendanceContext.tsx';
const SelfiePreview = ({ route, navigation }: any) => {
  const { photo } = route.params;
  const [notes, setNotes] = useState('');
const { clockIn } = useAttendance();
  const now = new Date();
  const timeStamp = now.toLocaleString();

  return (
    <SafeAreaView style={styles.safe}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.back}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Selfie To Clock In</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {/* IMAGE CARD */}
        <View style={styles.card}>
          <Image source={{ uri: photo.uri }} style={styles.image} />

          {/* OVERLAY INFO */}
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>Lat : 10.0158</Text>
            <Text style={styles.overlayText}>Long : 76.3418</Text>
            <Text style={styles.overlayText}>{timeStamp}</Text>
          </View>

          {/* RETAKE */}
          <TouchableOpacity
            style={styles.retakeBtn}
            onPress={() => navigation.goBack()}
          >
            <Text style={styles.retakeText}>⟳ Retake Photo</Text>
          </TouchableOpacity>
        </View>

        {/* NOTES */}
        <Text style={styles.label}>Clock In Notes (Optional)</Text>
        <TextInput
          style={styles.input}
          placeholder="Clock-in Notes"
          value={notes}
          onChangeText={setNotes}
          multiline
        />
                {/* CLOCK IN */}
<TouchableOpacity
  style={styles.clockInBtn}
  onPress={() => {
    clockIn(photo.uri);
   navigation.reset({
            index: 0,
            routes: [{ name: 'AttendanceHome' }],
          });
  }}
>
  <Text style={styles.clockInText}>Clock In</Text>
</TouchableOpacity>

        {/* <TouchableOpacity style={styles.clockInBtn}>
          <Text style={styles.clockInText}>Clock In</Text>
        </TouchableOpacity> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SelfiePreview;
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F4F6FB',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    elevation: 4,
  },

  back: {
    fontSize: 26,
    fontWeight: '600',
  },

  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
  },

  container: {
    padding: 16,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
  },

  image: {
    width: '100%',
    height: 380,
  },

  overlay: {
    position: 'absolute',
    bottom: 80,
    left: 16,
  },

  overlayText: {
    color: '#fff',
    fontSize: 12,
    marginBottom: 4,
  },

  retakeBtn: {
    position: 'absolute',
    bottom: 16,
    alignSelf: 'center',
    backgroundColor: '#6C5CE7',
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 30,
  },

  retakeText: {
    color: '#fff',
    fontWeight: '700',
  },

  label: {
    marginBottom: 6,
    color: '#555',
    fontWeight: '600',
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,
    height: 100,
    textAlignVertical: 'top',
    marginBottom: 30,
  },

  clockInBtn: {
    backgroundColor: '#6C5CE7',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },

  clockInText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
