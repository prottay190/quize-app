import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../screen/home';
import Quize from '../screen/quize';
import Result from '../screen/result';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
      <Stack.Screen name="Quize" component={Quize} />
      <Stack.Screen name="Result" component={Result} />
   
    </Stack.Navigator>
  );
}

export default MyStack;