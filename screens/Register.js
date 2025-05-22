import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, View, Image, TextInput, Button, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { register as registerAPI } from '../api/api';

const Register = () => {

  const navigation = useNavigation();
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [location, setLocation] = useState('');

  const handleLogin = async () => {
    // Add your login logic here

    try {
      const payload = {
        name: name,
        email: email,
        passwordHash: password,
        phone: phone,
        phone: phone,
        location: {
          type: "Point",
          coordinates: location.split(",")
        }
      };
      const res = await registerAPI(payload);
      Alert.alert('Registered Successfully');
      console.log(res.data, 'test5');

      navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });


    } catch (err) {
      console.log(err.response?.data);
      Alert.alert('Login Failed', err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title="Registration"
        left={<TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../assets/images/back-icon.png')} /></TouchableOpacity>}
      />
      <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollContent} style={{ flex: 1 }}>
        <View style={styles.container}>

          <Image
            source={require('../logo.png')} // Replace with your logo
            style={styles.logo}
          />
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={(text) => setname(text)}
          />

          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setemail(text)}
          />

          <Text style={styles.label}>Phone</Text>
          <TextInput
            style={styles.input}
            placeholder="Phone"
            value={phone}
            onChangeText={(text) => setPhone(text)}
          />

          <Text style={styles.label}>Password: </Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <Text style={styles.label}>Password: </Text>
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={cpassword}
            onChangeText={(text) => setCpassword(text)}
          />
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Latitude, Longitude"
            value={location}
            onChangeText={(text) => setLocation(text)}
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{ marginTop: 20 }} onPress={() => navigation.navigate('Login')}>
            <Text>If you have user. Please Login</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 126,
    height: 92,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    textAlign: 'left',
    width: '100%',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#DADADA',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
  },
  button: {
    backgroundColor: '#5893D4', // 💙 Blue background
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 2,
    width: '100%',
    textAlign: 'center'
  },
  buttonText: {
    color: '#fff',            // White text
    fontSize: 14,             // Font size
    fontWeight: 'bold',
    textAlign: 'center'
  },
});

export default Register;
