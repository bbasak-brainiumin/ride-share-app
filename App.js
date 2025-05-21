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

const Stack = createNativeStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(false);
  const [firstLaunch, setFirstLaunch] = useState(true);

  useEffect(() => {
    /*AsyncStorage.getItem('hasLaunched').then(value => {
      if (value === null) {
        AsyncStorage.setItem('hasLaunched', 'true');
        setFirstLaunch(true);
      } else {
        setFirstLaunch(false);
      }
      
    });*/
    setLoading(false);
  }, []);

  if (loading) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {firstLaunch ? (
          <>
            <Stack.Screen name="Onboarding1" component={Onboarding1} />
            <Stack.Screen name="Onboarding2" component={Onboarding2} />
          </>
        ) : null}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login } />
        <Stack.Screen name="Register" component={Register } />
        <Stack.Screen name="Profile" component={Profile } />
        <Stack.Screen name="Notifications" component={Notifications } />
      </Stack.Navigator>
    </NavigationContainer>
  );
}