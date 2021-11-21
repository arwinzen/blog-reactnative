import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/containers/Login';
import Register from './src/containers/Register';
import Home from './src/containers/Home';
import BlogPost from './src/components/BlogPost/BlogPost';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{
            headerStyle: {
            backgroundColor: 'pink',
          },
          headerShown: false
        }} />
        <Stack.Screen 
          name="Register" 
          component={Register} 
          options = {{
          // headerBackVisible: false,
          headerShown: false
        }} />
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options = {{
            headerShown: false
          }}  
        />
        <Stack.Screen 
          name="BlogPost" 
          component={BlogPost}
          options = {{
            headerShown: false
          }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
    // <View styles={styles.container}>
    //   <Register />
    // </View>
  );
}

// styles need to be passed as an object; StyleSheet.create is not necessary 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
