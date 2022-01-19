/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
// React Native Navigation Drawer
// https://aboutreact.com/react-native-navigation-drawer/
  // import 'react-native-gesture-handler';
  import { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
 import React from 'react';
 import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
 import {HomeScreen, EnterDayScreen, AlertScreen, FlatListScreen, SectionListScreen, AnimateScreen} from './src/Components'
 import { NavigationContainer } from '@react-navigation/native';
//  import { createNativeStackNavigator } from '@react-navigation/native-stack';
//  import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//  import { createDrawerNavigator } from '@react-navigation/drawer';
 import Icon from 'react-native-vector-icons/FontAwesome5'
import {DrawerNavigations} from './src/Navigations'

 
 const App = () =>{
   return (
      <NavigationContainer>
        <DrawerNavigations />
      </NavigationContainer>
   )
 
 }
 
 export default App;