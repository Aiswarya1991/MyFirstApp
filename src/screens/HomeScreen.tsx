import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={styles.container}>
          {/* HEADER */}
          <View style={styles.header}>
            <View style={styles.profileRow}>
              <Image
                source={require('../../assets/images/profile.png')}
                style={styles.profileImage}
              />
              <View>
                <View style={styles.nameRow}>
                  <Text style={styles.name}>Tonald Drump</Text>
                  <Text style={styles.verify}>✔</Text>
                </View>
                <Text style={styles.role}>Junior Full Stack Developer</Text>
              </View>
            </View>

            <View style={styles.headerIcons}>
              <TouchableOpacity style={styles.iconCircle}>
                <Image
                  source={require('../../assets/images/message.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.iconCircle}>
                <Image
                  source={require('../../assets/images/notification.png')}
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* BANNER */}
          <View style={styles.banner}>
            <View>
              <Text style={styles.bannerTitle}>My Work Summary</Text>
              <Text style={styles.bannerSub}>
                Today task & presence activity
              </Text>
            </View>
            <Image
              source={require('../../assets/images/camera.png')}
              style={styles.bannerImage}
            />
          </View>

          {/* TODAY MEETING */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Today Meeting</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>2</Text>
              </View>
            </View>
            <Text style={styles.cardSub}>Your schedule for the day</Text>

            <View style={styles.meetingItem}>
              <View style={styles.meetingLeft}>
                <View style={styles.meetingIcon}>
                  <Image
                    source={require('../../assets/images/video.png')}
                    style={styles.smallIcon}
                  />
                </View>
                <View>
                  <Text style={styles.meetingTitle}>Townhall Meeting</Text>
                  <View style={styles.avatarRow}>
                    <Image
                      source={require('../../assets/images/user1.png')}
                      style={styles.avatar}
                    />
                    <Image
                      source={require('../../assets/images/user2.png')}
                      style={styles.avatar}
                    />
                    <Image
                      source={require('../../assets/images/user3.png')}
                      style={styles.avatar}
                    />
                    <Text style={styles.plus}>+3</Text>
                  </View>
                </View>
              </View>

              <View style={styles.meetingRight}>
                <Text style={styles.time}>01:30 AM - 02:00 AM</Text>
                <TouchableOpacity style={styles.joinBtn}>
                  <Text style={styles.joinText}>Join Meet</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* TODAY TASK */}
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Today Task</Text>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>1</Text>
              </View>
            </View>
            <Text style={styles.cardSub}>
              The tasks assigned to you for today
            </Text>

            <View style={styles.taskItem}>
              <View style={styles.taskRow}>
                <View style={styles.taskIcon}>
                  <Image
                    source={require('../../assets/images/bolt.png')}
                    style={styles.smallIcon}
                  />
                </View>
                <Text style={styles.taskTitle}>
                  Wiring Dashboard Analytics
                </Text>
              </View>

              <View style={styles.taskStatusRow}>
                <View style={styles.status}>
                  <Text style={styles.statusText}>In Progress</Text>
                </View>
                <View style={[styles.status, styles.high]}>
                  <Text style={styles.statusText}>High</Text>
                </View>
              </View>

              <View style={styles.progressBar}>
                <View style={styles.progress} />
              </View>

              <View style={styles.taskFooter}>
                <View style={styles.avatarRow}>
                  <Image
                    source={require('../../assets/images/user1.png')}
                    style={styles.avatar}
                  />
                  <Image
                    source={require('../../assets/images/user2.png')}
                    style={styles.avatar}
                  />
                  <Image
                    source={require('../../assets/images/user3.png')}
                    style={styles.avatar}
                  />
                </View>

                <View style={styles.footerRight}>
                  <Text style={styles.footerText}>27 April</Text>
                  <Text style={styles.footerText}>💬 2</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>

        {/* BOTTOM TAB BAR */}
        <View style={styles.tabBar}>
          <Image source={require('../../assets/images/home.png')} style={styles.tabIcon} />
          <Image source={require('../../assets/images/calander.png')} style={styles.tabIcon} />
          <Image source={require('../../assets/images/note.png')} style={styles.tabIcon} />
          <Image source={require('../../assets/images/notice.png')} style={styles.tabIcon} />
          <Image source={require('../../assets/images/menu.png')} style={styles.tabIcon} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#F5F6FA' },
  container: { padding: 16, paddingBottom: 120 },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileRow: { flexDirection: 'row', alignItems: 'center' },
  profileImage: { width: 48, height: 48, borderRadius: 24, marginRight: 12 },
  nameRow: { flexDirection: 'row', alignItems: 'center' },
  name: { fontSize: 16, fontWeight: '700' },
  verify: { marginLeft: 6, color: '#6C5CE7' },
  role: { fontSize: 12, color: '#7A7A7A' },

  headerIcons: { flexDirection: 'row' },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 15,
    backgroundColor: '#EEF0FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
  },
  icon: { width: 18, height: 18, resizeMode: 'contain' },

  banner: {
    backgroundColor: '#6C5CE7',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bannerTitle: { color: '#fff', fontSize: 16, fontWeight: '700' },
  bannerSub: { color: '#E0DFFF', marginTop: 4 },
  bannerImage: { width: 80, height: 80, resizeMode: 'contain' },

  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginTop: 20,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center' },
  cardTitle: { fontSize: 16, fontWeight: '700' },
  badge: {
    backgroundColor: '#EEF0FF',
    marginLeft: 8,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  badgeText: { color: '#6C5CE7', fontWeight: '700' },
  cardSub: { color: '#999', marginTop: 4 },

  meetingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  meetingLeft: { flexDirection: 'row' },
  meetingIcon: {
    width: 36,
    height: 36,
    backgroundColor: '#EEF0FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  meetingTitle: { fontWeight: '600' },

  avatarRow: { flexDirection: 'row', marginTop: 6 },
  avatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: -8,
    borderWidth: 1,
    borderColor: '#fff',
  },
  plus: { marginLeft: 10, fontSize: 12 },

  meetingRight: { alignItems: 'flex-end' },
  time: { fontSize: 12, color: '#777' },
  joinBtn: {
    backgroundColor: '#6C5CE7',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 12,
    marginTop: 6,
  },
  joinText: { color: '#fff', fontSize: 12 },

  taskItem: {
    backgroundColor: '#FAFAFF',
    borderRadius: 14,
    padding: 14,
    marginTop: 16,
  },
  taskRow: { flexDirection: 'row', alignItems: 'center' },
  taskIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#EEF0FF',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  taskTitle: { fontWeight: '600' },

  taskStatusRow: { flexDirection: 'row', marginTop: 10 },
  status: {
    backgroundColor: '#EDEDED',
    borderRadius: 12,
    paddingHorizontal: 10,
    marginRight: 8,
  },
  high: { backgroundColor: '#FF6B6B' },
  statusText: { fontSize: 12, color: '#fff' },

  progressBar: {
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    marginTop: 10,
  },
  progress: {
    width: '70%',
    height: '100%',
    backgroundColor: '#6C5CE7',
  },

  taskFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  footerRight: { flexDirection: 'row' },
  footerText: { marginLeft: 10, fontSize: 12, color: '#777' },

  tabBar: {
    position: 'relative',
    bottom: 0,

    left: 0,
    right: 0,
    height: 70,
    backgroundColor: '#000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabIcon: { width: 30, height: 30, tintColor: '#fff' },

  smallIcon: { width: 20, height: 20 },
});
