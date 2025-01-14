import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';
import HomeScreen from './screens/HomeScreen';
import Login from './screens/Login';
import Signup from './screens/Signup';
import CitySelection from './screens/CitySelection';
import UniversityList from './screens/UniversityList';

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Track login state
  const [loading, setLoading] = useState(true); // For loading state during auth check

  useEffect(() => {
    // Check Firebase auth state on app launch
    const unsubscribe = auth().onAuthStateChanged((user) => {
      console.log("Auth state changed: ", user ? "Authenticated" : "Not Authenticated");
      if (user) {
        setIsAuthenticated(true); // User is logged in
      } else {
        setIsAuthenticated(false); // No user is logged in
      }
      setLoading(false); // Stop loading once auth state is determined
    });

    return unsubscribe; // Cleanup subscription on unmount
  }, []);

  if (loading) {
    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }
    
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isAuthenticated ? (
          <>
            {/* Main App Screens for authenticated users */}
            <Stack.Screen
              name="CitySelection"
              component={CitySelection}
              options={{ title: 'Select City' }}
            />
            <Stack.Screen
              name="UniversityList"
              component={UniversityList}
              options={{ title: 'Universities' }}
            />
          </>
        ) : (
          <>
            {/* Authentication Screens for unauthenticated users */}
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{ title: 'Welcome', headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ title: 'Log In' }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ title: 'Sign Up' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
