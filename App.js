import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Login from './src/containers/Login';
import Register from './src/containers/Register';
import Home from './src/containers/Home';
import BlogPost from './src/components/BlogPost/BlogPost';
import Contact from './src/containers/Contact/Contact';
import About from './src/containers/About/About';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./src/store/store";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNav(){
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home'){
          iconName = focused 
            ? 'home' 
            : 'home-outline';
        } else if (route.name === 'About'){
          iconName = focused
            ? 'person'
            : 'person-outline'
        } else if (route.name === 'Contact') {
          iconName = focused
            ? 'call-sharp'
            : 'call-outline'
        }

        return <Ionicons name={iconName} size={25} color={color} />
      },
    })}>
      <Tab.Screen name="Home" component={Home} options={{
        headerShown: false,
        // tabBarIcon: () => (
        //   <Ionicons name="md-home-outline" size={25} color="black" />
        // )
      }} />
      <Tab.Screen name="About" component={About} options={{
        headerShown: false
      }} />
      <Tab.Screen name="Contact" component={Contact} options={{
        headerShown: false
      }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
              name="TabNav" 
              component={TabNav} 
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
      </PersistGate>
    </Provider>
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
