import React,{useEffect} from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const HomeCourseScreen = (props) =>{

    const {navigation, route} = props;
    const moveToHome = () =>{
        navigation.push('homeCourse');
    }
    const changeContent = () =>{
        navigation.setParams({
            id:4,
            content:'Content has changed'
        })
    }
    useEffect(()=>{
        console.log('dang o detail')
    },[])
    return (
        <View style={styles.detailContainer}> 
            <Text>Details course screens</Text>
            <Text>Content: </Text>
            <View style={styles.buttonContainer}> 
                <Button style={styles.btn} title="ChangeContent" onPress={changeContent} color='pink'/> 
                <Button style={styles.btn} title="Back to Home" onPress={moveToHome}/>
            </View>
            
        </View>
    )
}

const styles= StyleSheet.create({
    detailContainer:{
        flex:1,
        justifyContent: 'center',
        alignItems:'center'
    },
    buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'100%'
    },
    btn:{
        width:'30%'
    }

})

export default HomeCourseScreen;