import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {StatusBar} from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StarMap from './screens/StarMap';
import DaliyPic from './screens/DaliyPic' 
import SpaceCraft from './screens/SpaceCraft';
import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SpaceCraft" component={SpaceCraft} />
        <Stack.Screen name="StarMap" component={StarMap} />
        <Stack.Screen name="DailyPic" component={DaliyPic} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
});
