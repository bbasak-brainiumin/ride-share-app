import { Link } from '@react-navigation/native';
import React from 'react';
import { FlatList, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import Footer from '../components/Footer';

export default function Home({ navigation }) {

    const DATA = [
        { id: '1', icon: 'home-outline', label: 'Form   -  To', value: 'London → Manchester' },
        { id: '2', icon: 'person-outline', label: 'Form   -  To', value: 'London → Manchester' },
        { id: '3', icon: 'settings-outline', label: 'Form   -  To', value: 'London → Manchester' },
    ];


    return (
        <ScrollView contentContainerStyle={styles.scrollContent} style={{ flex: 1 }}>
            <Image source={require('../assets/images/home-bg-curve.png')} style={styles.backgroundImage} />
            <Text style={styles.searchHeading}>Your pick of rides at low prices</Text>
            <View style={styles.searchwrap}>
                <View style={styles.searchInputBox}>
                <View style={styles.searchRow}>
                    <Image source={require('../assets/images/marker-icon.png')} style={styles.searchInpImg} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Leaving from'}
                        placeholderTextColor="#000"
                    />
                </View>
                <View style={styles.searchRow}>
                    <Image source={require('../assets/images/marker-icon.png')} style={styles.searchInpImg} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Going to'}
                        placeholderTextColor="#000"
                    />
                </View>
                <View style={styles.searchRow}>
                    <Image source={require('../assets/images/calender-icon.png')} style={styles.searchInpImg} />
                    <TextInput
                        style={styles.input}
                        placeholder={'Today'}
                        placeholderTextColor="#000"
                    />
                </View>
                <View style={styles.searchRow}>
                    <Image source={require('../assets/images/user-icon.png')} style={styles.searchInpImg} />
                    <TextInput
                        style={styles.inputEnd}
                        placeholder={'1 passenger'}
                        placeholderTextColor="#000"
                    />
                </View>
</View>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={styles.buttontext}>Search</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.secondHeading}>Where do you want a ride to?</Text>
            <View style={styles.ridelists}>
                <View style={styles.ridelist}>
                    <Image source={require('../assets/images/clock-icon.png')}  />
                    <View style={styles.rideinfo}>
                        <Text style={styles.ridelistTextLight}>Form - To</Text>
                        <Text style={styles.ridelistText}>London → Manchester</Text> 
                    </View>
                    
                </View>
                <View style={styles.ridelist}>
                    <Image source={require('../assets/images/clock-icon.png')}  />
                    <View style={styles.rideinfo}>
                        <Text style={styles.ridelistTextLight}>Form - To</Text>
                        <Text style={styles.ridelistText}>London → Manchester</Text> 
                    </View>
                    
                </View>
                <View style={styles.ridelist}>
                    <Image source={require('../assets/images/clock-icon.png')}  />
                    <View style={styles.rideinfo}>
                        <Text style={styles.ridelistTextLight}>Form - To</Text>
                        <Text style={styles.ridelistText}>London → Manchester</Text> 
                    </View>
                    
                </View>
            </View>
            <View style={styles.graygridsec}>
                <Text style={styles.secondHeading}>Our best selling bus routes </Text>
                <View style={styles.busRoutes}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
                        <Image source={require('../assets/images/bus-routes-1.png')}  />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
                        <Image source={require('../assets/images/bus-routes-1.png')}  />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
                        <Image source={require('../assets/images/bus-routes-1.png')}  />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
                        <Image source={require('../assets/images/bus-routes-1.png')}  />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
                        <Image source={require('../assets/images/bus-routes-1.png')}  />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => Linking.openURL('https://google.com')}>
                        <Image source={require('../assets/images/bus-routes-1.png')}  />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', marginTop: 20, padding: 20, gap: 20}}>
                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Text>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text>Register</Text>
                </TouchableOpacity>
            </View>
            <Footer />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    searchRow: { display: 'flex', flexDirection: 'row', width: '100%', marginBottom: 0 },
    homeContainer: { flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 80 },
    container: { flex: 1, justifyContent: 'flex-start', alignItems: 'center' },
    searchHeading: { fontSize: 20, fontWeight: 'bold', marginBottom: 5, color: '#fff' },
    text: { fontSize: 20 },
    input: {
        flex: 1,
        fontSize: 18,  paddingLeft: 45, paddingTop: 10, paddingBottom: 10, paddingRight: 10, borderBottomWidth: 1, borderBottomColor: '#DADADA',
    },
       inputEnd: {
        flex: 1,
        fontSize: 18,  paddingLeft: 45, paddingTop: 10, paddingBottom: 10, paddingRight: 10, borderBottomWidth: 0, borderBottomColor: '#DADADA',
    },
    searchwrap: { width: '100%', padding: 20 },
    button: {
        width: '100%',
        backgroundColor: '#5893D4',
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttontext: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    graygridsec: {backgroundColor: '#ddd', paddingTop:15, paddingBottom:15, marginTop: 20, width: '100%' },
     backgroundImage: {
    width: '100%',
    height: 200,
    position: 'absolute',
    top: 0
  },
  searchInpImg: {
    position: 'absolute',
    top: 15,
    left: 15,

  },
  searchInputBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    marginBottom: 10,
    backgroundColor: '#fff',
    paddingTop: 5, paddingBottom: 5,
    borderRadius: 10
  },
  scrollContent: {
    paddingTop: 80,
  paddingBottom: 40,
  alignItems: 'center',
  flexGrow: 1,
  },
  secondHeading: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'left',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 10
  },
  ridelists: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20
  },
  ridelist : {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 5,
    backgroundColor: '#fff',
    paddingTop: 8, paddingBottom: 8,
    borderRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    gap: 10,
    alignItems: 'center'
  },
  ridelistTextLight: {
    fontSize: 14,
    color: '#8F8F8F',
    textAlign: 'left',
    width: '100%',
  },
  ridelistText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'left',
    width: '100%',
  },
  busRoutes: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingLeft: 20,
    paddingRight: 20,
    gap: 10,
    flexWrap: 'wrap'
  }
});
