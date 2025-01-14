import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CitySelection from '../screens/CitySelection';
import UniversityList from '../screens/UniversityList';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator initialRouteName="CitySelection">
        <Stack.Screen name="CitySelection" component={CitySelection} />
        <Stack.Screen name="UniversityList" component={UniversityList} />
      </Stack.Navigator>
  );
}
