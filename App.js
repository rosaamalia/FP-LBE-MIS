import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './app/screen/Home';
import NewestList from './app/screen/NewList';
import Detail from './app/screen/Detail';

const Stack = createStackNavigator();

export default function App(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
                <Stack.Screen name="NewestList" component={NewestList} options={{headerShown: false}}/>
                <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}