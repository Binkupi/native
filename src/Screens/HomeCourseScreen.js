import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Button, Alert, FlatList, Image} from 'react-native';
import imageSix from './../assets/6.png'; 
const data=[
    {
        id: 1,
        title:'Số 1',
        content:'Đọc là một',
    },
    // {
    //     id: 2,
    //     title:'Số 2',
    //     content:'Đọc là hai',
    // },
    // {
    //     id: 3,
    //     title:'Số 3',
    //     content:'Đọc là ba',
    // },
    // {
    // id: 4,
    //     title:'Số 4',
    //     content:'Đọc là bốn',
    // },
    // {
    //     id: 5,
    //     title:'Số 5',
    //     content:'Đọc là năm',
    // }
       

]

const HomeCourseScreen = (props) =>{

    const {navigation} = props;

    const onMoveDetail = () =>{
        console.log('cos');
        navigation.navigate('detailsNumber',{
            id: 10,
            content:'This is content in detail screen'
        })
    }

    useEffect(() => {
        console.log('dang o home')
        
    }, [])

    return (
        <View style={styles.HomeContainer}>
            <FlatList data={data} keyExtractor={(item)=>item.id}
            renderItem={({item})=>{
                return (
                    <View style={styles.ItemContainer} onPress={onMoveDetail}>
                        <View >
                            <Image source={imageSix} />
                        </View>
                        <View style={styles.titleItem}>
                            <Text>{item.id} -{item.title}</Text>
                        </View>
                        
                    </View>
                ) 
            }}/>
            <Button title="test"  onPress={onMoveDetail}/>
        </View>
    )
}

const styles = StyleSheet.create({
    HomeContainer:{
        flex:1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    ButtonContainer:{
        flexDirection:'row',
        marginVertical:10,
        justifyContent:'space-around',
        width: '100%'
    },
    btnInfo:{
        width:'30%',
        marginRight:10,
    },
    ItemContainer:{
        height:200,
        width: '80%',
        position:'relative',
        marginVertical: 10,
        marginHorizontal:15
    },
    imageItem:{
        width:'100%',
        height:'100%'
    },
    titleItem:{
        position:'absolute',
        bottom:0,
        right: 0,
    }
})

export default HomeCourseScreen;