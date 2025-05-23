import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding1 from './screens/Onboarding1';
import Onboarding2 from './screens/Onboarding2';
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';
import Profile from './screens/Profile';
import Notifications from './screens/Notifications';
import { AuthProvider, useAuth } from './api/AuthContext';
import { View, ActivityIndicator } from 'react-native';
import Route from './screens/Route';

const Stack = createNativeStackNavigator();

// 👇 Move useAuth() into this component, wrapped by AuthProvider
function AppNavigator() {
  const { user, loading } = useAuth();
  const [firstLaunch, setFirstLaunch] = useState(true);

  useEffect(() => {
    // Uncomment this logic if needed
    // AsyncStorage.getItem('hasLaunched').then(value => {
    //   if (value === null) {
    //     AsyncStorage.setItem('hasLaunched', 'true');
    //     setFirstLaunch(true);
    //   } else {
    //     setFirstLaunch(false);
    //   }
    // });
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {user ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Route" component={Route} />
          </>
        ) : (
          <>
          {firstLaunch ? (
          <>
            <Stack.Screen name="Onboarding1" component={Onboarding1} />
            <Stack.Screen name="Onboarding2" component={Onboarding2} />
          </>
        ) : null}
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// 👇 Wrap AppNavigator inside AuthProvider
export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
  );
}
