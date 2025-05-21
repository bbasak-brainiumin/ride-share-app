import React, { useState } from 'react';
import { View, Image, TextInput, Button, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';

const Login = () => {

  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login button pressed');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
          <Header title="Login" 
                   left={<TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../assets/images/back-icon.png')} /></TouchableOpacity>} 
                />
                <ScrollView contentContainerStyle={styles.scrollContent} style={{ flex: 1 }}>
    <View style={styles.container}>
      <Image
        source={require('../logo.png')} // Replace with your logo
        style={styles.logo}
      />
      <Text style={styles.label}>Username or Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Username or Email"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />

      <Text style={styles.label}>Password: </Text>
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      
    </View>
    </ScrollView>
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

export default Login;
