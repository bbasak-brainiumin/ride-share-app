import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Onboarding1({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/onboarding-img-1.png')} style={styles.logo} />
      <Text style={styles.title}>Help us keep you safe from scams</Text>
      <Text style={styles.subtitle}>At Ride Share, we're working hard to make our platform as secure as it can be. But when scams do happen, we want you to know exactly how to avoid and report them. Follow our tips to help us keep you safe.</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Onboarding2')}>
        <Text style={styles.buttontext}>Next</Text>
        </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  logo: { width: 306, height: 257, marginBottom: 20 },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  title: { fontSize: 30, fontWeight: 400, marginBottom: 10, textAlign: 'center', color: '#5893D4' },
  subtitle: { fontSize: 16, color: '#000', lineHeight: 29, textAlign: 'center', marginBottom: 30 },
  button: {
    backgroundColor: '#5893D4',
    paddingVertical: 12,
    paddingHorizontal: 24,
    margin: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttontext: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
