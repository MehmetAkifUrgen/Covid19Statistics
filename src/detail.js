import React, { Component } from 'react'
import { Text, View,Image, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';

export default class Detail extends Component {
    render() {
        const { navigate , push, goBack, getParam} = this.props.navigation
        
        const ulke = getParam('ulke');
        const kodu = getParam('kodu');
        const olu = getParam('olu');
        const yeniVaka = getParam('yeniVaka');
        const topVaka = getParam('topVaka');
        const yeniOlu = getParam('yeniOlu');
        const yeniIyi = getParam('yeniIyi');
        const topIyi = getParam('topIyi');
        return (
        <View style={styles.detailContainer} >
            <Image            
                npx style={styles.image } source={{uri:`http://flag.muratoner.net/?country=${kodu}&width=1080&height=1920&quality=100`}}></Image>
            <View style={styles.detail}>
                    
                    <Text style={styles.text}>Ülke (Country): {ulke}</Text>
                    <Text style={styles.text}>Ülke Kodu (Country Code):  {kodu}</Text>
                    <Text style={styles.text}>Yeni Vaka (New Confirmed):  {yeniVaka}</Text>
                    <Text style={styles.text}>Toplam Vaka (Total Confirmed):  {topVaka}</Text>
                    <Text style={styles.text}>Bugün Ölenler  (New Deaths):  {yeniOlu}</Text>
                    <Text style={styles.text}>Toplam Ölen Sayısı  (Total Deaths):  {olu}</Text>
                    <Text style={styles.text}>Bugün İyileşen Sayısı  (New Recovered):  {yeniIyi}</Text>
                    <Text style={styles.text}>Toplam İyileşen Sayısı  (Total Recovered):  {topIyi}</Text>
                    
            </View>
        </View>
        )
    }
}
const styles=StyleSheet.create({
    detailContainer:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    image:{
        position:'absolute',
        resizeMode:'stretch',        
        width:'100%',
        height:'100%',
        opacity:0.4,
    },
    detail:{       
        flexDirection:'column',
        alignItems:'flex-start',
        backgroundColor:'white',
        paddingHorizontal:2,
        marginHorizontal:2,
        opacity:0.8,
        borderRadius:5,
        borderColor:'grey',
        borderWidth:2
    },
    text:{
        color:'black',
        fontSize:15,
        fontWeight:'bold',
        
    },
    covid:{
        width:128,
        height:128,
        position:'absolute'
    }
  
})