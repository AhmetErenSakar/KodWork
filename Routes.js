import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from "react-redux";

import Icon from "react-native-vector-icons/MaterialCommunityIcons"

import Job from './src/components/Job/Job'
import Jobs from './src/components/Home/Jobs';
import { store } from './redux/Store';
import Favourities from './src/components/Favourities/Favourities';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();


function FavouritieScreen() {
  return (
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name='Favourities' component={Favourities} options={{ headerShown: false }} />
        <Stack.Screen name='Job2' component={Job} options={{ headerShown: false }} />
      </Stack.Navigator>
    </Provider>
  );
}

function JobsScreen() {
  return (
    <Provider store={store}>
      <Stack.Navigator>
        <Stack.Screen name='jobS' component={Jobs} options={{ headerShown: false }} />
        <Stack.Screen name='Job' component={Job} options={{ headerShown: false }} />
      </Stack.Navigator>
    </Provider>
  )
}



export default function Routes() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator >
          <Tab.Screen name="Jobs" component={JobsScreen} options={{
            headerTitleStyle: {
              marginLeft: 140,
              fontWeight: 'bold',
              fontSize: 26,
              color: 'red',
            },
            tabBarIcon: ({ color, size }) => (
              <Icon name="account" size={30} color="red" />
            )
          }} />
          <Tab.Screen name="Favorities" component={FavouritieScreen} options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="star" size={30} color="red" />
            ),
            headerTitleStyle: {
              marginLeft: 120,
              fontWeight: 'bold',
              fontSize: 26,
              color: 'red',
            }
          }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}