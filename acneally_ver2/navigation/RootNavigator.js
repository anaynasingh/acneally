import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../app/screens/HomeScreen';
import MoodTrackerScreen from '../app/screens/MoodTrackerScreen';
// Import other screens as needed
import DietTrackerScreen from '@/app/screens/DietTrackerScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="MoodTracker" component={MoodTrackerScreen} />
      <Stack.Screen name="DietTracker" component={DietTrackerScreen} />
      
      {/* Add other screens here */}
    </Stack.Navigator>
  );
}
