import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SignupScreen from './screens/SignupScreen';
import MoodTrackerScreen from './screens/MoodTrackerScreen';
import DietTrackerScreen from './screens/DietTrackerScreen';
// import DietTrackerScreen if it's a part of your screens

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignupScreen">
        <Stack.Screen name="Signup Screen" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MoodTracker" component={MoodTrackerScreen} />
        
        {/* Add DietTrackerScreen here if it's a part of your screens */}
        <Stack.Screen name="DietTracker" component={DietTrackerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
