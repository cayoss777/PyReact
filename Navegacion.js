import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Inicio from "./Pantalla/Inicio";
import Config from "./Pantalla/Config";
import Tres from "./Pantalla/Tres";
import Dos from "./Pantalla/Dos";

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
//Pantallas


//

const Stack = createBottomTabNavigator();

function MyTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Inicio" component={Inicio} />
      <Stack.Screen name="Dos" component={Dos} />
      <Stack.Screen name="Tres" component={Tres} />
      <Stack.Screen name="Config" component={Config} />
      
     
    </Stack.Navigator>
  );
}
export default function Navegacion(){
    return(
        <NavigationContainer
       >
            <MyTab/>
        </NavigationContainer>
    );
}