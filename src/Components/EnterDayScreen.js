import React, {useState} from 'react';
import {Text, Button, Input, Image, Tooltip,} from 'react-native-elements';
import {View, StyleSheet, Dimensions} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import imageOne from './../assets/1.png'; 
import imageTwo from './../assets/2.png'; 
import imageThree from './../assets/3.jpg'; 
import imageFour from './../assets/4.png'; 
import imageFive from './../assets/5.png'; 
import imageSix from './../assets/6.png'; 
// import imageSeven from './../assets/7.png'; 
import imageEight from './../assets/8.png'; 
import imageNine from './../assets/9.png'; 
import imageZero from './../assets/0.jpg'; 
const EnterDayScreen = (props) =>{
    const {navigation} = props;
    const [statusSwipe, setStatusSwipe] = useState(true);
    const [lstPassword, setLstPassword] = useState([]);
    const [valueInput,setValueInput] = useState('');
    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      };
    const onSwipeUp = (gestureState) => {
        console.log('có312')
        setStatusSwipe(true);
    }
    const onSwipeDown = (gestureState) => {
        console.log('có123');
        setStatusSwipe(true);
    }
    const onPress= (value) =>{
        console.log(value);
        if(lstPassword.length===0){
            if(value===0 || value >3){
                return;
            }
        }
        if(lstPassword.length===2){
            if(value >1){
                return;
            }
        }
        if(lstPassword.length===3){
            if(lstPassword[2]===1){
                if(value >2){
                    return;
                }
            } 
        }
        let list = [...lstPassword];
        list.push(value);
        setLstPassword(list);
        setValueInput(list.join(''));
        if(list.length === 4){
            navigation.navigate('home');
        }

    }
      
    return (
        <GestureRecognizer
        onSwipeUp={(state) => onSwipeUp(state)}
        onSwipeDown={(state) =>onSwipeDown(state)}
        config={config}
        style={{
          flex: 1,
        //   backgroundColor: this.state.backgroundColor
        }}
        >
        {
            statusSwipe?
             <View style={styles.container}>
             {/* <Tooltip popover={<Text>Mật khẩu sẽ là thông tin ngày tháng năm sinh của bạn.
                  Ví dụ ngày sinh của bạn là 20-11 tương ứng với 2011</Text>}>
                 <Text>Hướng dẫn</Text>
             </Tooltip> */}
             <View>
             
             </View>
             <View style={styles.test}>
             <View style={styles.containerInput}>
                 <Input
                     placeholder='Mật khẩu của bạn'
                     value={valueInput}
                     // leftIcon={
                     //     <Icon
                     //     name='user'
                     //     size={24}
                     //     color='black'
                     //     />
                     // }
                     />
             </View>
                 <View style= {styles.containerBottom}>
                     <View style={styles.containerBlock}>
                         <View style={styles.block}>
                             <Image
                                 source={imageOne} 
                                 style={styles.imageBlock}
                                 onPress={()=>{onPress(1)}}
                                 />
                         </View>
                         <View style={styles.block}>
                             <Image
                                 source={imageTwo} 
                                 style={styles.imageBlock}
                                 onPress={()=>{onPress(2)}}
                                 />
                         </View>
                         <View style={styles.block}>
                             <Image
                                 source={imageThree} 
                                 style={styles.imageBlock}
                                 onPress={()=>{onPress(3)}}
                                 />
                         </View> 
                     </View>
                     <View style={styles.containerBlock}>
                         <View style={styles.block}>
                             <Image
                                 source={imageFour} 
                                 style={styles.imageBlock}
                                 onPress={()=>{onPress(4)}}
                                 />
                         </View>
                         <View style={styles.block}>
                             <Image
                                 source={imageFive} 
                                 style={styles.imageBlock}
                                 onPress={()=>{onPress(5)}}
                                 />
                         </View>
                         <View style={styles.block}>
                             <Image
                                 source={imageSix} 
                                 style={styles.imageBlock}
                                 onPress={()=>{onPress(6)}}
                                 />
                         </View>
                     </View>
                     <View style={styles.containerBlock}>
                     <View style={styles.block}>
                             <Image
                                 source={imageZero} 
                                 style={styles.imageBlock}
                                 onPress={()=>{onPress(7)}}
                                 />
                         </View>
                         <View style={styles.block}>
                             <Image
                                 source={imageEight} 
                                 style={styles.imageBlock}
                                 onPress={()=>{onPress(8)}}
                                 />
                         </View>
                         <View style={styles.block}>
                             <Image
                                 source={imageNine} 
                                 style={styles.imageBlock}
                                 onPress={()=>{onPress(9)}}
                                 />
                         </View>
                     </View>
                 </View>
             </View>
             
 
             {/* <Text>This is my enter day screen</Text>
             <Button title="go to Home" onPress={()=>{
                 console.log('có');
                 navigation.navigate('home')
             }} /> */}
             
            </View>
            :<Text onPress={()=>{console.log('có');setStatusSwipe(true)}}>onSwipe callback received gesture: </Text>
        }
       
        
      </GestureRecognizer>
        
        
    )
}
const styles = StyleSheet.create({
    container:{
        position:'relative',
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    containerInput:{
        marginTop:30,
        marginBottom:50
    },
    test: {
        position:'absolute',
        width: Dimensions.get('window').width,
        bottom:100
        
    },
    containerBottom:{
        
        flexDirection: 'column',
        justifyContent:'space-around',
    },
    containerBlock: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom:10
    },
    block:{
        backgroundColor:'red',
        width: 120,
        height:120,
    },
    imageBlock:{
        width:'100%',
        height:'100%'
    }
})
export default EnterDayScreen;