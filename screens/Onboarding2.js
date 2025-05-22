import React from 'react';
import { View, Text, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Onboarding2({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={require('../assets/images/onboarding-img-2.png')} style={styles.logo} />
      <Text style={styles.title}>Where do you want to drive to?</Text>
      <Text style={styles.subtitle}>Let's make this your least expensive journey ever.</Text>
      <TouchableOpacity style={styles.button} onPress={() => {
    // No need to set hasLaunched again — already done
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  }}>
        <Text style={styles.buttontext}>Explore Rides Share</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: { width: 288, height: 263, marginBottom: 20 },
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
