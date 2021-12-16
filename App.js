import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './Navigation/Index';
import Home from './screen/home';
import Quize from './screen/quize';
import Result from './screen/result';

export default function App() {
  return (
      <NavigationContainer>
       <MyStack></MyStack>
      </NavigationContainer>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '30px'

  },
});
