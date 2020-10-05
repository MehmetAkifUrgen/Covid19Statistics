import React, { Component } from 'react'
<<<<<<< HEAD
import { Text,TextInput, View ,StyleSheet,FlatList,Image,TouchableOpacity,ActivityIndicator,StatusBar, SnapshotViewIOS} from 'react-native'
=======
import { Text,TextInput, View ,StyleSheet,FlatList,Image,TouchableOpacity,ActivityIndicator} from 'react-native'
>>>>>>> c18df8a084cc3ec8aa722466a54e947f202c10fb
import axios from 'axios';


export default class Home extends Component {

  state={
    text:'',
    country:[],
    loading:true,
    allCountry:[]
  };
  componentDidMount(){
    this.getCountry();
<<<<<<< HEAD
    this.renderFooter();
  }


  
  
  getCountry =async () =>{
    const {data : {Countries:country}} = await axios.get('https://api.covid19api.com/summary');
    
    this.setState({
      country,
      allCountry:country,
      loading:false,
      
    })
    
  }
  renderContactsItem = ({item, index}) => { 
=======
  }
  
  getCountry =async () =>{
    const {data : {Countries:country}} = await axios.get('https://api.covid19api.com/summary');
    this.setState({
      country,
      allCountry:country,
      loading:true
    })
    
  }
  renderContactsItem = ({item, index}) => {
>>>>>>> c18df8a084cc3ec8aa722466a54e947f202c10fb
    const { navigate , push, goBack} = this.props.navigation
    const ulke= item.Country
    const kodu= item.CountryCode
    const olu= item.TotalDeaths
    const yeniVaka=item.NewConfirmed
    const topVaka=item.TotalConfirmed
    const yeniOlu=item.NewDeaths
    const yeniIyi=item.NewRecovered
    const topIyi=item.TotalRecovered
<<<<<<< HEAD
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
            style={{width:120,height:70, borderRadius:10,borderColor:'grey'}}
            source={{uri:`https://flag.muratoner.net/?country=${item.CountryCode}`}}/>
        <View style={styles.textContainer}>
          <Text style={styles.name}>
             {item.Country}
          </Text>
          <Text style={styles.oluOrani}>
          Death Rate: %{(oluOrani*100).toFixed(2)}
=======
    return (
      <TouchableOpacity
        onPress={() => push('Detail' , {
            ulke,kodu,olu,yeniVaka,topVaka,yeniOlu,yeniIyi,topIyi
        }) }
        style={[
          styles.itemContainer,
          /*{backgroundColor: index % 2 === 1 ? '#fafafa' : ''}*/,
        ]}>
        <Image 
            style={{width:100,height:64,borderRadius:32}}
            source={{uri:`http://flag.muratoner.net/?country=${item.CountryCode}`}}/>
        <View style={styles.textContainer}>
          <Text style={styles.name}>
            {item.Country} {item.CountryCode}
>>>>>>> c18df8a084cc3ec8aa722466a54e947f202c10fb
          </Text>
          
        </View>
      </TouchableOpacity>
<<<<<<< HEAD
     
=======
>>>>>>> c18df8a084cc3ec8aa722466a54e947f202c10fb
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
<<<<<<< HEAD
  
=======
  renderHeader = () => {
    const {text} = this.state;
    return (
    <View style={styles.container}>
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
          style={styles.searchInput}
        />
      </View>
    </View>
    );
  };
>>>>>>> c18df8a084cc3ec8aa722466a54e947f202c10fb

  renderFooter = () => {
		if (!this.state.loading){
            return null;
        } 
		return(
			<View>
				<ActivityIndicator size="large" />
			</View>
		)
	};
  
  render() {
<<<<<<< HEAD
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
          
=======
   
    return (
    <View style={styles.container}>
        <FlatList
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          renderItem={this.renderContactsItem}
          keyExtractor={item => item.Slug}
          data={this.state.country}
>>>>>>> c18df8a084cc3ec8aa722466a54e947f202c10fb
        />
    </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
<<<<<<< HEAD
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
  
=======
    backgroundColor:'#341d56',
    flex:1
  },

  itemContainer: {
    flex: 1,
    borderRadius:20,
    flexDirection: 'row',
    paddingVertical:10,
    marginHorizontal:10,
    borderWidth: 2,
    paddingHorizontal:10,
    borderColor:'grey',
    backgroundColor:'#d6d6d6',  
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
  },
>>>>>>> c18df8a084cc3ec8aa722466a54e947f202c10fb
  textContainer: {
    justifyContent: 'space-around',
    marginHorizontal:20
  },
  name: {
<<<<<<< HEAD
    textAlign:'center',
    fontSize: 16,
    color:'#1DA1F2',
    fontWeight:'500',
    fontFamily:'ArchitectsDaughter-Regular'
  },
  searchContainer: {
    marginTop:10,
    marginHorizontal:30,
    
    fontSize:16,
  },
  searchInput: { 
    
    fontSize: 16,
    backgroundColor: '#14171A',
    color:'white',
    borderWidth:2,
    borderRadius:10,
    borderColor:'grey',
    fontFamily:'ArchitectsDaughter-Regular'
  },
  oluOrani:{
    textAlign:'center',
    fontSize: 15,
    color:'#F4B400',
    fontWeight:'500',
    fontFamily:'SansitaSwashed-Light'
=======
    fontSize: 16,
    color:'black',
    fontWeight:'500'
  },
  searchContainer: {
    padding: 10,
    fontSize:16,
  },
  searchInput: { 
    fontSize: 16,
    backgroundColor: '#d6d6d6',
    padding: 10,
    borderWidth:2,
    borderRadius:10,
    borderColor:'grey'
>>>>>>> c18df8a084cc3ec8aa722466a54e947f202c10fb
  }

});

