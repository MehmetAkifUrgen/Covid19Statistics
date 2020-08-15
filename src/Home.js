import React, { Component } from 'react'
import { Text,TextInput, View ,StyleSheet,FlatList,Image,TouchableOpacity,ActivityIndicator} from 'react-native'
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
    const { navigate , push, goBack} = this.props.navigation
    const ulke= item.Country
    const kodu= item.CountryCode
    const olu= item.TotalDeaths
    const yeniVaka=item.NewConfirmed
    const topVaka=item.TotalConfirmed
    const yeniOlu=item.NewDeaths
    const yeniIyi=item.NewRecovered
    const topIyi=item.TotalRecovered
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
   
    return (
    <View style={styles.container}>
        <FlatList
          ListHeaderComponent={this.renderHeader}
          ListFooterComponent={this.renderFooter}
          renderItem={this.renderContactsItem}
          keyExtractor={item => item.Slug}
          data={this.state.country}
        />
    </View>
    )
  }
}
const styles=StyleSheet.create({
  container:{
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
  textContainer: {
    justifyContent: 'space-around',
    marginHorizontal:20
  },
  name: {
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
  }

});

