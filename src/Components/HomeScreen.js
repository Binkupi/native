import React, {useState, useEffect} from 'react';
import {Text, Button,Image} from 'react-native-elements';
import {View, StyleSheet, Dimensions, ImageBackground,  TextInput} from 'react-native';
import birthdate from './../assets/birthdate.jpg'; 
import image from './../assets/1.png';
import input from './../assets/input.jpg';
import background from './../assets/background.jpg'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
const HomeScreen = (props) =>{
    const {navigation} = props;
    const [text, setText ] = useState('Bạn muốn hiển thị nó 123');
    useEffect(()=>{

    },[])
    const animationText = (text) =>{
        
    }
    return (
        <SafeAreaView>
        <View >
            <ImageBackground source={background} style={styles.container}>
                <View style={styles.textInput}>
                    <View style={styles.title}>
                        <Text style={{textAlign: 'center',fontSize:18}}>
                            Có một lời nhắn gửi yêu thương đến bạn
                        </Text>
                    </View>
                    <View>
                        <TextInput multiline numberOfLines={6} style={styles.input} value={text}/>
                    </View>
                    
                    <View style ={styles.imageContainer}>
                        <Image source={image} style={styles.image}/>
                    </View>
                   
                </View>
            </ImageBackground>
        </View>
        </SafeAreaView>
        
    )
}
const styles = StyleSheet.create({
    container:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        // backgroundColor:'red',
    },
    textInput:{
        // marginTop:20,
        marginTop: 60,
        marginRight: 10,
        marginLeft:10,
        height:300,
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 10,
        position:'relative'
        // ZIndex:1,

    },
    title: {
        marginTop:15
    },
    imageContainer:{
        width:70,
        height:70,
        position:'absolute',
        bottom:0,
        right:0,
        // ZIndex:100,
    },
    image :{
        width:'100%',
        height:'100%'
    },
    input :{
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 10,
        marginLeft:10,
        marginRight:10,
        marginTop:30

    }
    
})
export default HomeScreen;