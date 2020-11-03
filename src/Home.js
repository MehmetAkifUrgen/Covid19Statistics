import React, { Component } from 'react'
import { Text,TextInput, View ,StyleSheet,FlatList,Image,TouchableOpacity,StatusBar,ActivityIndicator} from 'react-native'
import axios from 'axios';
import * as SplashScreen from 'expo-splash-screen';
import {
  AdMobBanner
} from 'expo-ads-admob';


export default class Home extends Component {

  state={
    text:'',
    country:[],
    loading:true,
    allCountry:[]
  };
  componentDidMount(){
    SplashScreen.hideAsync();
    
    this.getCountry();
  }
  componentWillUnmount (){
    this.getCountry();
  }

  
  
  getCountry =async () =>{
    const {data : {Countries:country}} = await axios.get('https://api.covid19api.com/summary');
    
    this.setState({
      country,
      allCountry:country,
      loading:false,
      
    })
    
  }

  loading  =  () =>{
    return(
      <ActivityIndicator size="large" color="red"></ActivityIndicator>
    )
  }

  renderContactsItem = ({item, index}) => { 
    const { navigate , push, goBack} = this.props.navigation
    const ulke= item.Country
    const kodu= item.CountryCode
    const olu= item.TotalDeaths
    const yeniVaka=item.NewConfirmed
    const topVaka=item.TotalConfirmed
    const yeniOlu=item.NewDeaths
    const yeniIyi=item.NewRecovered
    const topIyi=item.TotalRecovered
    const oluOrani=olu/topVaka
    const tarih=item.Date
    return (
      
      <TouchableOpacity
        onPress={() => navigate('Detail' , {
            ulke,kodu,olu,yeniVaka,topVaka,yeniOlu,yeniIyi,topIyi,tarih
        })
      
      
       }
        style={styles.itemContainer}
        >
        <Image resizeMode="stretch"
            loadingIndicatorSource={require('../assets/alert.png')}
            onLoad={this.loading}
            style={{width:120,height:70, borderRadius:10,borderColor:'grey'}}
            source={{uri:`https://flag.muratoner.net/?country=${item.CountryCode}`}}/>
        <View style={styles.textContainer}>
          <Text style={styles.name}>
             {item.Country}
          </Text>
          <Text style={styles.oluOrani}>
          Death Rate: %{(oluOrani*100).toFixed(2)}
          </Text>
          
        </View>
      </TouchableOpacity>
     
    );
  };

  searchFilter = (text) => {
    const newData = this.state.allCountry.filter((item) => {
      const listItem = `${item.Country.toLowerCase()} ${item.CountryCode.toLowerCase()} `;

      return listItem.indexOf(text.toLowerCase()) > -1;
    });

    this.setState({
      country: newData,
    });
  };
  

 
  render() {
    const {text} = this.state;
    return (
      
        <View style={styles.container}>
            <StatusBar backgroundColor='#14171A' barStyle='light-content' ></StatusBar>
            
            <View style={styles.searchContainer}>
            
            <TextInput
      
              onChangeText={(text) => {
                this.setState({
                  text,
                });

                this.searchFilter(text);
              }}
              value={text}
              placeholder="Search..."
              placeholderTextColor='white'
              style={styles.searchInput}
            />
        </View>
        <FlatList 
          numColumns={2}
          contentContainerStyle={{ flexGrow:1}}
          
          ListFooterComponent={this.renderFooter}
          renderItem={this.renderContactsItem}
          keyExtractor={item => item.Slug}
          refreshing={true}
          data={this.state.country}
          
        />
        <AdMobBanner
            bannerSize="fullBanner"
            adUnitID="ca-app-pub-7956816566156883/8015779755"
            servePersonalizedAds 
            onDidFailToReceiveAdWithError={this.bannerError} />
      
			
    
    </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
    backgroundColor:'#14171A',
    flex:1,  
  },
  

  itemContainer: {
    flex:1,  
    marginLeft:10,
    marginRight:10,
    marginVertical:10,
    alignItems:'center', 
    
    paddingTop:10,
    backgroundColor:'#14171A',
      
    
      
  },
  
  textContainer: {
    justifyContent: 'space-around',
    marginHorizontal:20
  },
  name: {
    textAlign:'center',
    fontSize: 16,
    color:'#1DA1F2',
    fontWeight:'500',
    
  },
  searchContainer: {
    marginTop:10,
    marginHorizontal:30,
    
    fontSize:16,
  },
  searchInput: { 
    padding:10,
    fontSize: 16,
    backgroundColor: '#14171A',
    color:'white',
    borderWidth:2,
    borderRadius:10,
    borderColor:'grey',
    
  },
  oluOrani:{
    textAlign:'center',
    fontSize: 15,
    color:'#F4B400',
    fontWeight:'500',
    
  }

});

