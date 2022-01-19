import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { CourseStack} from './../../Navigations'
import { DetailCourseScreen } from '../../Screens';
import TestTab from './../TestNavigations/TestTab';
import TestStack from './../StackNavigations'
import  CameraScreen from './../../Screens/CameraScreen'
const Drawer = createDrawerNavigator();
const DrawerNavigations = (props) =>{
    return (
        <Drawer.Navigator screenOptions={{}} initialRouteName='camera'>
          {/* <Drawer.Screen name="tabDrawer" component={TabTestComponent}/>
          <Drawer.Screen name="animateDrawer" component={AnimateScreen}/>
          <Drawer.Screen name="alertDrawer" component={AlertScreen}/> */}
          <Drawer.Screen name="courseDrawer" component ={CourseStack} />
          <Drawer.Screen name="testDrawer" component={DetailCourseScreen}/>
          <Drawer.Screen name="test02Drawer" component={TestTab}/>
          <Drawer.Screen name="test" component={TestStack}/>
          <Drawer.Screen name="camera" component={CameraScreen}/>
        </Drawer.Navigator>
    )
}

export default DrawerNavigations;