import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAttendance } from '../context/AttendanceContext.tsx';

const AttendanceHome = ({ navigation }: any) => {
  const { attendance, startBreak, endBreak, clockOut } =
    useAttendance();

  /* ---------- FORCE REFRESH EVERY MINUTE ---------- */
  const [, forceUpdate] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      forceUpdate(v => v + 1);
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  /* ---------- TIME CALCULATION ---------- */
  const calculateTodayHours = () => {
    if (!attendance.clockInTime) return '00:00 Hrs';

    const start = attendance.clockInTime;
    const end = attendance.clockOutTime
      ? attendance.clockOutTime
      : Date.now();

    let diff = end - start;
    diff -= attendance.totalBreakMinutes * 60000;

    if (diff < 0) diff = 0;

    const hrs = Math.floor(diff / 3600000);
    const mins = Math.floor(
      (diff % 3600000) / 60000
    );

    return `${String(hrs).padStart(2, '0')}:${String(
      mins
    ).padStart(2, '0')} Hrs`;
  };

  const todayHours = calculateTodayHours();
  const payPeriodHours = '08:00 Hrs';

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.time}>
            {new Date().toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </Text>

          <Text style={styles.title}>Let’s Clock-In!</Text>
          <Text style={styles.subTitle}>
            Don’t miss your clock in schedule
          </Text>

          <Image
            source={require('../../assets/images/hrm.png')}
            style={styles.clockImg}
          />
        </View>

        {/* SUMMARY CARD */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>
            Total Working Hour
          </Text>
          <Text style={styles.cardSub}>
            Paid Period 1 Sept 2024 - 30 Sept 2024
          </Text>

          {/* <Text style={styles.status}>
            Status: {attendance.status}
          </Text> */}

          <View style={styles.row}>
            <View style={styles.box}>
              <Text style={styles.boxLabel}>Today</Text>
              <Text style={styles.boxValue}>
                 {new Date().toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })+" Hrs"}
               
              </Text>
            </View>

            <View style={styles.box}>
              <Text style={styles.boxLabel}>
                This Pay Period
              </Text>
              <Text style={styles.boxValue}>
                {payPeriodHours}
              </Text>
            </View>
          </View>

          {/* ================= BUTTONS ================= */}

          {/* CLOCK IN */}
          {attendance.status === 'IDLE' && (
            <TouchableOpacity
              style={[styles.clockBtn, { marginTop: 20 }]}
              onPress={() =>
                navigation.navigate('LocationCheck')
              }
            >
              <Text style={styles.clockBtnText}>
                Clock In Now
              </Text>
            </TouchableOpacity>
          )}

          {/* BREAK + CLOCK OUT (SAME ROW) */}
          {(attendance.status === 'CLOCKED_IN' ||
            attendance.status === 'ON_BREAK') && (
            <View
              style={{
                marginTop: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <TouchableOpacity
                style={[
                  styles.clockBtn,
                  { width: '48%' },
                ]}
                onPress={() =>
                  attendance.status === 'CLOCKED_IN'
                    ? startBreak()
                    : endBreak()
                }
              >
                <Text style={styles.clockBtnText}>
                  {attendance.status === 'CLOCKED_IN'
                    ? 'Take a Break'
                    : 'Back to Work'}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.clockBtn,
                  {
                    width: '48%',
                    backgroundColor: '#000',
                  },
                ]}
                onPress={clockOut}
              >
                <Text style={styles.clockBtnText}>
                  Clock Out
                </Text>
              </TouchableOpacity>
            </View>
          )}

          {/* CLOCKED OUT */}
          {attendance.status === 'CLOCKED_OUT' && (
            <TouchableOpacity
              style={[
                styles.clockBtn,
                {
                  backgroundColor: '#B2BEC3',
                  marginTop: 20,
                },
              ]}
              disabled
            >
              <Text style={styles.clockBtnText}>
                Clocked Out
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* HISTORY (STATIC) */}
        {[27, 26, 25].map(day => (
          <View key={day} style={styles.historyCard}>
            <Text style={styles.date}>
              {day} September 2024
            </Text>

            <View style={styles.historyRow}>
              <View>
                <Text style={styles.historyLabel}>
                  Total Hours
                </Text>
                <Text style={styles.historyValue}>
                  08:00:00 hrs
                </Text>
              </View>

              <View>
                <Text style={styles.historyLabel}>
                  Clock in & Out
                </Text>
                <Text style={styles.historyValue}>
                  09:00 AM — 05:00 PM
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AttendanceHome;

/* ================= STYLES (UNCHANGED) ================= */

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#F4F6FB',
  },
  container: {
    paddingBottom: 120,
  },
  header: {
    backgroundColor: '#7B61FF',
    padding: 24,
    paddingTop: 50,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  time: {
    color: '#fff',
    opacity: 0.9,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 8,
  },
  subTitle: {
    color: '#E8E5FF',
    marginTop: 6,
  },
  clockImg: {
    position: 'absolute',
    right: 20,
    top: 60,
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },
  card: {
    backgroundColor: '#fff',
    margin: 16,
    borderRadius: 16,
    padding: 16,
    marginTop: -15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
  },
  cardSub: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
  status: {
    marginTop: 8,
    color: '#6C5CE7',
    fontWeight: '600',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  box: {
    width: '48%',
    backgroundColor: '#F4F6FB',
    borderRadius: 12,
    padding: 14,
  },
  boxLabel: {
    fontSize: 12,
    color: '#777',
  },
  boxValue: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 6,
  },
  clockBtn: {
    backgroundColor: '#6C5CE7',
    paddingVertical: 14,
    borderRadius: 28,
    alignItems: 'center',
  },
  clockBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  historyCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 14,
    borderRadius: 14,
    padding: 14,
  },
  date: {
    fontWeight: '600',
  },
  historyRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  historyLabel: {
    fontSize: 12,
    color: '#777',
  },
  historyValue: {
    fontWeight: '600',
    marginTop: 4,
  },
});
