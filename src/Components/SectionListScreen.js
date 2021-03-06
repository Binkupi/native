import React, {useState} from 'react';
import {Text, Button, Input, Image, Tooltip,} from 'react-native-elements';
import {View, StyleSheet, Dimensions, SectionList} from 'react-native';
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
// const listData = [
//     {
//         image:imageOne,
//     },
//     {
//         image:imageTwo,
//     },
//     {
//         image:imageThree,
//     },
//     {
//         image:imageFour,
//     },
//     {
//         image:imageFive,
//     },
//     {
//         image:imageSix,
//     },
//     {
//         image:imageEight,
//     },
//     {
//         image:imageNine,
//     },
//     {
//         image:imageZero,
//     },
// ]
const listData=[
    {
        title:5, 
        data:[{
            key:1
        },
        {
            key:2
        },
        {
            key:4
        },
        {
            key:5
        },]
    },
    {
        title:10, 
        data:[{
            key:6
        },
        {
            key:7
        },
        {
            key:8
        },
        {
            key:9
        },]
    },
    
]
const SectionListScreen = (props) =>{
    const {navigation} = props;
    console.log('image', listData)
    return (
        <View style={{ flex:1, paddingTop:30, paddingLeft:10, paddingRight:10}}>
            <SectionList
            sections={listData} 
            renderSectionHeader={({section})=>
                <Text style={styles.sectionHeader}>{section.title}</Text>
            }
            
            renderItem={({item, index})=>(
                <View style={ {flex:1,height:300}}> 
                 <Text>Page {index}</Text>
                    <Text>Text {item.key}</Text>
                    <View>
                        <Text>
                            B???n c???m th???y lo s??? trong nh???ng k?? thi ch???m offline? B???n b??nh th?????ng l??m b??i r???t t???t nh??ng khi ch???m offline l???i b??? ??i???m k??m v?? sai nh???ng l???i v??? v???n? B???n code sai m???t b??i r???t kh?? v?? debug m??i kh??ng ???????c v?? kh??ng c?? test sai? 
                            T???t c??? nh???ng v???n ????? ???? s??? ???????c gi???i quy???t ????n gi???n v???i m???t ch????ng tr??nh ch???m b??i t??? ?????ng, gi??p b???n t??? ki???m tra b??i m??nh v?? ph??t hi???n test sai.
                            B??i vi???t n??y s??? gi???i thi???u v???i b???n nh???ng b?????c c?? b???n nh???t ????? vi???t tr??nh ch???m - m???t k?? thu???t m?? b???n n??n th??nh th???o tr?????c khi thi HSG.
                        </Text>
                    </View>
                </View>   
            )}
            keyExtractor={(item, index) => index}
            />
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Button title="Chuy???n sang FatList" onPress={()=>navigation.navigate('flatlist')} />
                <Button title="Go back home" onPress={()=>navigation.navigate('homeTab', {screen:'enterDay'})} />
            </View>
            

        </View>
    )
}
const styles = StyleSheet.create({
   
})
export default SectionListScreen;