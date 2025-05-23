import React from 'react'
import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';


export default function Footer() {
    const navigation = useNavigation();
  return (
    <View style={styles.footerMenuWrap}>
        <TouchableOpacity style={styles.footerColumn} onPress={() => navigation.navigate('Home')}>
            <Image source={require('../assets/images/home-icon.png')} style={styles.footerImg}  />
            <Text style={styles.footerText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerColumn} onPress={() => navigation.navigate('Route')}>
            <Image source={require('../assets/images/map-icon.png')} style={styles.footerImg}  />
            <Text style={styles.footerText}>Route</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerColumn} onPress={() => Linking.openURL('https://google.com')}>
            <Image source={require('../assets/images/bus-icon.png')} style={styles.footerImg}  />
            <Text style={styles.footerText}>Publish Ride</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerColumn} onPress={() => navigation.navigate('Profile')}>
            <Image source={require('../assets/images/user-footer-icon.png')} style={styles.footerImg}  />
            <Text style={styles.footerText}>Account</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    footerMenuWrap: { display: 'flex', flexDirection: 'row', justifyContent: 'space-between',  width: '100%', marginBottom: 0, backgroundColor: '#fff' },
    footerColumn: { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10 },
})