import React from 'react';


import {NavigationContainer}from '@react-navigation/native';
import {createStackNavigator}from '@react-navigation/stack';
import Home from './screens/Home';
import List from './screens/List';
import AddItem from './screens/AddItem';
import Login from './screens/Login';

const Stack = createStackNavigator();


function App (){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" 
        component={Login}/>
        <Stack.Screen
          name="Home"
          component={Home}/>
        <Stack.Screen 
          name="List"
          component={List} />  
        <Stack.Screen
          name="AddItem"
          component={AddItem} />  
      </Stack.Navigator>
    </NavigationContainer>
   
  )
}



export default App;
