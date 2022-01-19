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
                            Bạn cảm thấy lo sợ trong những kì thi chấm offline? Bạn bình thường làm bài rất tốt nhưng khi chấm offline lại bị điểm kém vì sai những lỗi vớ vẩn? Bạn code sai một bài rất khó và debug mãi không được vì không có test sai? 
                            Tất cả những vấn đề đó sẽ được giải quyết đơn giản với một chương trình chấm bài tự động, giúp bạn tự kiểm tra bài mình và phát hiện test sai.
                            Bài viết này sẽ giới thiệu với bạn những bước cơ bản nhất để viết trình chấm - một kĩ thuật mà bạn nên thành thạo trước khi thi HSG.
                        </Text>
                    </View>
                </View>   
            )}
            keyExtractor={(item, index) => index}
            />
            <View style={{flexDirection:'row', justifyContent:'center'}}>
                <Button title="Chuyển sang FatList" onPress={()=>navigation.navigate('flatlist')} />
                <Button title="Go back home" onPress={()=>navigation.navigate('homeTab', {screen:'enterDay'})} />
            </View>
            

        </View>
    )
}
const styles = StyleSheet.create({
   
})
export default SectionListScreen;