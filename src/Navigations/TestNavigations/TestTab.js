import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeScreen, EnterDayScreen, AlertScreen, FlatListScreen, SectionListScreen, AnimateScreen} from './../../Components'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator ();
const StackHomeComponent = ()=>{
    return (
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} options ={{
            title:'Home'
          }  
          }/>
          <Stack.Screen name="enterDay" component={EnterDayScreen} />
      </Stack.Navigator>
    )
  }
  
  
  const StackTestComponent = ()=>{
    return (
      <Stack.Navigator initialRouteName='sectionlist'>
        <Stack.Screen name="flatlist" component={FlatListScreen} />
        <Stack.Screen name="sectionlist" component={SectionListScreen} />
      </Stack.Navigator>
    )
  }
  
const TestTab = () =>{
    return (
      <Tab.Navigator screenOptions={{headerShown:false}} > 
            <Tab.Screen name="homeTab" component={StackHomeComponent} options={{
              tabBarBadge:3,
              tabBarIcon:({focused})=>
              <Icon name="home" size={30} color={focused?'#FFD700':'black'} />
              }}/>
            <Tab.Screen name="testTab" component={StackTestComponent} options={{
               tabBarIcon: ({focused})=> 
               <Icon name="plus-square" size={30} color={focused?'#FFD700':'black'}/> ,
            }}/>
            <Tab.Screen name="newTab" component={StackTestComponent} options={{
               tabBarIcon: ({focused})=> 
               <Icon name="plus-square" size={30} color={focused?'#FFD700':'black'}/> ,
            }}/>
      </Tab.Navigator>
    )
  }

export default TestTab