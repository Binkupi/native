import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListProduct from './../screen/ShowListProductPage/ListProduct'
import CreateProduct from './../screen/EditProductPage/CreateProduct'
import Home from './../StackNavigation'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator();
const TabNavigation =()=>{

      return (
        <Tab.Navigator initialRouteName="Home" >
            <Tab.Screen name="Home" component={Home} 
            options={{
                tabBarLabel:({focused, color})=>{
                    return focused?<Text style={{color:'#FFD700'}}>Home</Text>:null;
                },
                tabBarIcon: ({focused})=> (
                <Icon name="home" size={30} color={focused?'#FFD700':'black'} title="123"/> 
                )
                }}
            />
            <Tab.Screen name="CreateProduct" component={CreateProduct}
            options={{
                tabBarLabel:({focused, color})=>{
                    return focused?<Text style={{color:'#FFD700'}}>Create</Text>:null;
                },
                tabBarIcon: ({focused})=> 
                <Icon name="plus-square" size={30} color={focused?'#FFD700':'black'}/> ,
            }}/> 
        </Tab.Navigator>
      );
    }
    export default TabNavigation;