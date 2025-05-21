import React from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import Header from '../components/Header'
import { TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Footer from '../components/Footer'
import { useNavigation } from '@react-navigation/native'

export default function Notifications() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
          
          <Header title="Notification" 
             left={<TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../assets/images/back-icon.png')} /></TouchableOpacity>} 
          />
          <ScrollView contentContainerStyle={styles.scrollContent} style={{ flex: 1 }}>
        <View style={styles.notificationLists}>
          <Image source={require('../assets/images/notification-icon-2.png')} />
          <View>
            <Text style={styles.lightTxt}>Account Name</Text>
            <Text style={styles.boldTxt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </Text>
            <Text style={styles.lightTxt}>5s ago</Text>
          </View>
          
        </View>

        <View style={styles.notificationLists}>
          <Image source={require('../assets/images/notification-icon-2.png')} />
          <View>
            <Text style={styles.lightTxt}>Account Name</Text>
            <Text style={styles.boldTxt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </Text>
            <Text style={styles.lightTxt}>5s ago</Text>
          </View>
          
        </View>

        <View style={styles.notificationLists}>
          <Image source={require('../assets/images/notification-icon-2.png')} />
          <View>
            <Text style={styles.lightTxt}>Account Name</Text>
            <Text style={styles.boldTxt}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </Text>
            <Text style={styles.lightTxt}>5s ago</Text>
          </View>
          
        </View>
          </ScrollView>
          <Footer />
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  scrollContent : {
    padding: 15
  },
  notificationLists : {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 10,
    display: 'flex',
    gap: 10,
    flexDirection: 'row'
  },
  lightTxt : {
    fontSize: 13,
    color: '#C4C4C4',
    fontWeight: 'normal',
    fontStyle: 'italic',
    paddingRight: 10,
    width: '90%'
  }, 
  boldTxt : {
    fontSize: 14,
    color: '#000',
    paddingRight: 25,
    flex: 1
  }
})