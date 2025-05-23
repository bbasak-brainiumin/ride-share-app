import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../components/Header'
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function Route() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
          <Header title="Route"
            left={<TouchableOpacity onPress={() => navigation.goBack()}><Image source={require('../assets/images/back-icon.png')} /></TouchableOpacity>}
          />
          <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
        >
          <ScrollView contentContainerStyle={styles.scrollContent} style={{ flex: 1 }}>
            <View style={styles.container}>
    
    
    
              
    
            </View>
          </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
  )
}
const styles = StyleSheet.create({})