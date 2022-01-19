import React from 'react'
import { DetailCourseScreen, HomeCourseScreen } from '../../Screens';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator ();
const CourseStack = () =>{
    return (
      <Stack.Navigator screenOptions={{}} initialRouteName='homeCourse'>
        <Stack.Screen name="homeCourse" component={HomeCourseScreen} options={{}} />
        <Stack.Screen name = "detailsNumber" component={DetailCourseScreen} options={{}} />
      </Stack.Navigator>
    )
}

export default CourseStack;