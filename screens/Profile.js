import React from 'react'
import { Image, ScrollView, TouchableOpacity } from 'react-native'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import { useNavigation } from '@react-navigation/native'
import Footer from '../components/Footer';

export default function Profile() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
      
      <Header title="Profile" 
         left={<TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../assets/images/back-icon.png')} /></TouchableOpacity>} 
         end={<TouchableOpacity onPress={() => navigation.navigate('Notifications')}><Image source={require('../assets/images/notification-icon.png')} /></TouchableOpacity>}
      />
            <ScrollView contentContainerStyle={styles.scrollContent} style={{ flex: 1 }}>
    <View style={styles.profileQuickInfo}>
      <Image source={require('../assets/images/profile-img-dummy.png')} style={{ width: 60, height: 60, borderRadius: 50 }} />
      <View>
        <Text style={styles.profileName}>Raju Mondal</Text>
        <Text style={styles.profiletxt}>raju125@maillinator.com</Text>
        <Text style={styles.profiletxt}>0000000000</Text>
      </View>
      
    </View>
    <View style={styles.profileDetails}>
      <Text style={styles.profileDetailstxt}>Address</Text>
      <Text style={styles.profileDetailstxt}>My Orders</Text>
      <Text style={styles.profileDetailstxt}>My Rides</Text>
      <Text style={styles.profileDetailstxt}>Help</Text>
    </View>
    </ScrollView>
    <Footer />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  profileQuickInfo: {
    backgroundColor: '#EEEEEE', paddingTop:15, paddingBottom:15, marginTop: 20, width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10,
    paddingLeft: 15, paddingRight: 15, paddingTop: 15, paddingBottom: 15,
  },
  profileName: { fontSize: 16, fontWeight: 'bold', color: '#000', marginBottom: 2 },
  profiletxt: { fontSize: 14, color: '#000', marginBottom: 2 },  
  profileDetails: { paddingLeft: 15, paddingRight: 15, paddingTop: 15, paddingBottom: 15 },
  profileDetailstxt: { fontSize: 16, color: '#000', marginBottom: 10 },
})