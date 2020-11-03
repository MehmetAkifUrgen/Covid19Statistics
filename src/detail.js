import React, { Component } from 'react'
import { Text, View,Image, StyleSheet ,StatusBar, ScrollView} from 'react-native'
import {
    AdMobBanner,
    AdMobInterstitial
  } from 'expo-ads-admob';




export default class Detail extends Component {
    
    constructor(props) {
        super(props);
        this.getAd();
      }
    
    getAd = async() =>{
        await AdMobInterstitial.setAdUnitID('ca-app-pub-7956816566156883/3073200997');
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true});
        await AdMobInterstitial.showAdAsync();
        
     }  
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
        var olumOrani= olu/topVaka;
        var iyiOrani=topIyi/topVaka;
        const date= new Date();
        return (
            
        <View style={styles.detailContainer} >
            <StatusBar backgroundColor='#14171A' barStyle='light-content' ></StatusBar>
            
            <View  style={styles.imageView }>
                <Image resizeMode="stretch"  defaultSource={require('../assets/covid.png')}   style={styles.image }         
                     source={{uri:`https://flag.muratoner.net/?country=${kodu}&width=720&height=1280&quality=100`}}></Image>
                <Text style={styles.textCountry}> | {ulke}-{kodu} |</Text>
                
            </View>
            <View style={styles.detail}>
                    <View style={styles.todayDetail}>
                        <Text style={styles.textGun}>TODAY</Text>
                        <Text style={styles.text}>Confirmed: {yeniVaka}</Text>
                        <Text style={styles.text}>Deathss: {yeniOlu}</Text>
                        <Text style={styles.text}>Recovered :{yeniIyi}</Text>
                    </View>
                    <Image style={styles.alert} source={require('../assets/alert.png')}></Image>
                    <View style={styles.todayDetail}>
                        <Text style={styles.textGun}>TOTAL</Text>
                        <Text style={styles.text}>Confirmed: {topVaka}</Text>
                        <Text style={styles.text}>Deaths: {olu}</Text>
                        <Text style={styles.text}>Recovered: {topIyi}</Text>
                        
                    </View>
                    
                    
                    
                    
            </View>
           
            <View style={styles.olumOran}>
                <Text style={{color:'#191414',fontSize:16}}>Death Rate: %{(olumOrani*100).toFixed(2)}</Text>
                
            </View>
            <View style={styles.iyiOran}>
                <Text style={{color:'#191414',fontSize:16}}>Recovery Rate: %{(iyiOrani*100).toFixed(2)}</Text>
            </View>           
            <Text style={styles.date}>{date.toDateString()}</Text>

            <AdMobBanner
                    bannerSize="fullBanner"
                    adUnitID="ca-app-pub-7956816566156883/3260246717" // Test ID, Replace with your-admob-unit-id
                    servePersonalizedAds // true or false
                    onDidFailToReceiveAdWithError={this.bannerError} />

            
        </View>
         
        )
    }
}
const styles=StyleSheet.create({
    detailContainer:{
        flex:1,     
        backgroundColor:'#14171A',     
        justifyContent:'center',
        alignItems:'center'
    },
    textCountry:{
        marginTop:'5%',
        
        fontSize:20,
        color:'#3a5aa2',        
        textDecorationLine:'underline',
        marginBottom:'5%',
        textAlign:'center',
        borderColor:'#1c3faa' ,
        
    },
    imageView:{
        
        width:'90%',
        height:'30%',
        marginBottom:'5%',
        marginHorizontal:'3%',
        backgroundColor:'#14171A',
        justifyContent:'center'
       
        
    },
    image:{         
        width:'100%',
        height:'100%',
       
        borderWidth:3,
        borderColor:'#657786'
    },
    detail:{       
        marginHorizontal:'5%',
        padding:20,
        flexDirection:'row',  
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#3A3A3A',   
        marginVertical:'5%',  
        borderRadius:30 ,
        
    },
    text:{
        paddingVertical:2.5,
        color:'#F4B400',
        fontSize:15,
        
        
    },
  
    
    date:{
        
        textAlign:'center',      
        fontSize:22,
        color:'#B4944A',
        marginTop:'5%',
        marginHorizontal:'20%',
        borderRadius:10,
        borderWidth:2,
        borderColor:'#3A3A3A',
        padding:5
       
    },
    todayDetail:{
        padding:3,
        width:'40%',
     
        borderWidth:2,
        borderColor:'#657786',
        borderRadius:10
    },
    textGun:{
        fontSize:16,
        textAlign:'center',
        color:'#DB4437',
        
        textDecorationLine:'underline',
    },
    alert:{
        width:50,
        height:50,
        marginHorizontal:'3%'
    },
    olumOran:{
        marginTop:'5%',
        alignItems:'center',
        marginHorizontal:'25%',
        backgroundColor:'#DB4437',
        padding:'1%',
        borderRadius:5
    },
    iyiOran:{
        alignItems:'center',
        marginHorizontal:'25%',
        backgroundColor:'#0F9D58',
        padding:'1%',
        borderRadius:5,
        marginTop:'5%'
        
    }
  
})