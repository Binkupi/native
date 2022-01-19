import React, {useEffect, useState} from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation,useRoute, useFocusEffect, useIsFocused} from '@react-navigation/native';
import { Alert,Modal, Pressable, Button, Platform, SafeAreaView, StatusBar, StyleSheet, Text, View, Switch } from "react-native";
const ModalCustom = (props) => {
    const {modalVisible, setModalVisible} = props;
  return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
  );
};

const STYLES = ['default', 'dark-content', 'light-content'];
const TRANSITIONS = ['fade', 'slide', 'none'];
const Test01 = ( props) => {
    const [hidden, setHidden] = useState(false);
    const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
    const [statusBarTransition, setStatusBarTransition] = useState(TRANSITIONS[0]);
    const [isEnabled, setIsEnabled] = useState(false);
    const {navigation} = props;
    const changeStatusBarVisibility = () => setHidden(!hidden);

    const changeStatusBarStyle = () => {
      const styleId = STYLES.indexOf(statusBarStyle) + 1;
      if (styleId === STYLES.length) {
        setStatusBarStyle(STYLES[0]);
      } else {
        setStatusBarStyle(STYLES[styleId]);
      }
    };

    const changeStatusBarTransition = () => {
      const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
      if (transition === TRANSITIONS.length) {
        setStatusBarTransition(TRANSITIONS[0]);
      } else {
        setStatusBarTransition(TRANSITIONS[transition]);
      }
    };

    const onMove = () =>{
      navigation.navigate('test02',{
        screen:'test02'
      });
  }
    return (
      <SafeAreaView style={{flex:1}}>
        <StatusBar
          animated={true}
          backgroundColor="red"
          translucent={false}
          barStyle={statusBarStyle}
          showHideTransition={statusBarTransition}
          hidden={hidden}
        />
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
          <Text style={styles.textStyle}>
            StatusBar Visibility:{' '}
            {hidden ? 'Hidden' : 'Visible'}
          </Text>
          <Text style={styles.textStyle}>
            StatusBar Style:{' '}
            {statusBarStyle}
          </Text>
          {Platform.OS === 'ios' ? (
            <Text style={styles.textStyle}>
              StatusBar Transition:{' '}
              {statusBarTransition}
            </Text>
          ) : null}
          <View style={{alignItems: 'center'}}>
            {/* <Button
              title="Toggle StatusBar"
              onPress={changeStatusBarVisibility} /> */}
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={changeStatusBarVisibility}
              value={!hidden}
            />
            <View style={{width:'100%', flexDirection:'row', justifyContent:'space-around'}}>
              <Button
                title="Change StatusBar Style"
                onPress={changeStatusBarStyle}
                color={'red'}
              />
              <Button title="move to test02" onPress={onMove} />
            </View>

            {Platform.OS === 'ios' ? (
              <Button
                title="Change StatusBar Transition"
                onPress={changeStatusBarTransition}
              />
            ) : null}
          </View>
        </View>
      </SafeAreaView>
    );
}
const Test02 = ( props) => {

    useEffect(()=>{
        console.log('xin chào');
    })
    const navigation = useNavigation();
    const route = useRoute();
    const onMove = () =>{
        navigation.navigate('test03');
    }
    const onChange = () =>{
      navigation.setOptions({
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })
    }
    return (
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
            <Text style={{color:'black', fontSize:20}}>Test02</Text>
            {/* <Text>{route.params.info}</Text> */}
            <View style={{width:'100%',flexDirection:'row', justifyContent:'space-around'}}>
              <Button title="move to test03" onPress={onMove} color="red"/>
              <Button title="change title" onPress={onChange} />
            </View>
            
        </View>
    )
}

const Test03 = ( props) => {
    const {navigation} = props;
    const onGoBack = () =>{
        navigation.reset({
            index:0,
            routes:[{name:'test01'},{name:'test02'}]
        })
    }
    return (
        <View style={{flex:1,justifyContent: 'center',alignItems: 'center'}}>
            <Text>Test03</Text>
            <Button title="move to test03" onPress={onGoBack} />
        </View>
    )
}

const stack = createNativeStackNavigator();
const NavigationStack = (props) =>{

    return (
        <stack.Navigator screenOptions={
            {   animationEnabled:false,
                gestureEnabled:false,
                headerBackTitle:'Đẹp trai',
                headerBackTitleVisible: true,
                headerTruncatedBackTitle:'go'
            }}
            >
            <stack.Screen name="test01" component={Test01}
            options={()=>({
                title:'Screen test',
                headerRight: () => (
                    <Button title="alert" onPress={() => Alert.alert('Info','Quốc quá đẹp trai')} style={{width:30}}/>
                  ),
                headerStyle: { backgroundColor: 'black' },
                headerTintColor: 'white',
                
                })
            }/>
            <stack.Screen name="test02" component={Test02}
            options={({route})=>({ 
              //  title: route.params.info
            })}
            />
            <stack.Screen name="test03" component={Test03}/>
        </stack.Navigator>
    )

}

export default  NavigationStack ;
const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
    },
    modalView: {
        width:300,
        margin: 20,
        backgroundColor: "white",
        borderRadius: 50,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "black",
      fontWeight: "bold",
      textAlign: "center",
      marginVertical:10
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

