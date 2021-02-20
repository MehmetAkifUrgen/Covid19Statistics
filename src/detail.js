import React, { Component } from 'react'
import { Text, View,Image, StyleSheet ,StatusBar, ScrollView} from 'react-native'
import {
    AdMobBanner,
    AdMobInterstitial
  } from 'expo-ads-admob';
  import { Audio } from 'expo-av';



export default class Detail extends Component {
    
    
    playMusic = async () => {
        const { sound } = await Audio.Sound.createAsync(require('../assets/sounds/Turkey.mp3'),
         { shouldPlay: true });
        this.audioPlayer = sound;
      }
    
    stopMusic = async () => {
        await this.audioPlayer.stopAsync();
      }
      playMusics = async () => {
        const { sound } = await Audio.Sound.createAsync(require('../assets/sounds/america.mp3'),
         { shouldPlay: true });
        this.audioPlayer = sound;
      }
    
    stopMusics = async () => {
        await this.audioPlayer.stopAsync();
      }
    componentWillUnmount() {
        this.stopMusic();
        this.stopMusics();
    }
   
    
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
        const current = topVaka-(topIyi+olu)
        var coun=ulke
        
        if(coun=='Turkey'){
            this.playMusic()
        }
        if(coun=='United States of America'){
            this.playMusics()
        }
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
                        <Text style={styles.text}>Current: {current}</Text>
                        
                    </View>
                    
                    
                    
                    
            </View>
           
            <View style={styles.olumOran}>
                <Text style={{color:'white',fontSize:16}}>Death Rate: %{(olumOrani*100).toFixed(2)}</Text>
                
            </View>
            <View style={styles.iyiOran}>
                <Text style={{color:'white',fontSize:16}}>Recovery Rate: %{(iyiOrani*100).toFixed(2)}</Text>
            </View>           
            <Text style={styles.date}>{date.toDateString()}</Text>

            <AdMobBanner
                    style={{}}
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
        backgroundColor:'#ffdfb7',     
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center'
    },
    textCountry:{
        marginTop:'5%',
        
        fontSize:20,
        color:'white',        
        textDecorationLine:'underline',
        marginBottom:'5%',
        textAlign:'center',
        borderColor:'#2e5818' ,
        
    },
    imageView:{
        
        width:'90%',
        height:'30%',
        marginBottom:'5%',
        marginHorizontal:'3%',
        backgroundColor:'#200617',
        justifyContent:'center'
       
        
    },
    image:{         
        width:'100%',
        height:'100%',
        borderRadius:30
    },
    detail:{     
        width:'90%',
        height:'20%',  
        marginHorizontal:'5%',
        padding:20,
        flexDirection:'row',  
        alignItems:'center',
        justifyContent:'space-between',
        backgroundColor:'#7cfc80',   
        marginVertical:'5%',  
        borderRadius:30 ,
        
    },
    text:{
        paddingVertical:2.5,
        color:'black',
        fontSize:16,
        
        
    },
  
    
    date:{
        
        textAlign:'center',      
        fontSize:22,
        color:'white',
        marginTop:'5%',
        marginHorizontal:'20%',
        borderRadius:10,
        borderWidth:2,
        borderColor:'#a27e38',
        padding:5
       
    },
    todayDetail:{
        padding:3,
        width:'40%',
     
        borderWidth:2,
        borderColor:'#9e3712',
        borderRadius:10
    },
    textGun:{
        fontSize:16,
        textAlign:'center',
        color:'black',
        
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
        backgroundColor:'#740b37',
        padding:'1%',
        borderRadius:5
    },
    iyiOran:{
        alignItems:'center',
        marginHorizontal:'25%',
        backgroundColor:'#80a6ad',
        padding:'1%',
        borderRadius:5,
        marginTop:'5%'
        
    }
  
})