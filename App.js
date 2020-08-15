import React, { Component } from 'react'
import { Text, View ,StyleSheet,FlatList,Image,TouchableOpacity,ActivityIndicator} from 'react-native'
import axios from 'axios';

export default class App extends Component {

  state={
    country:[],
    loading:true
  };
  componentDidMount(){
    this.getCountry();
  }
  
  getCountry =async () =>{
    const {data : {Countries:country}} = await axios.get('https://api.covid19api.com/summary');
    this.setState({
      country,
      loading:false
    })
    
  }
  renderContactsItem = ({item, index}) => {
    
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          /*{backgroundColor: index % 2 === 1 ? '#fafafa' : ''}*/,
        ]}>
        <Image 
            style={{width:64,height:64,borderRadius:32}}
            source={{uri:`http://flag.muratoner.net/?country=${item.CountryCode}`}}/>
        <View style={styles.textContainer}>
          <Text style={styles.name}>
            {item.Country} {item.CountryCode}
          </Text>
          <Text style={{fontSize:16}}>Toplam Vaka : {item.TotalConfirmed}</Text>
          <Text style={{fontSize:14}}>Toplam Ölüm : {item.TotalDeaths}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  renderFooter = () => {
		if (!this.state.loading) return null;
		return(
			<View>
				<ActivityIndicator size="large" />
			</View>
		)
	};
  
  render() {
   
    return (
        <FlatList
          ListFooterComponent={this.renderFooter}
          renderItem={this.renderContactsItem}
          keyExtractor={item => item.Slug}
          data={this.state.country}
        />
    )
  }
}
const styles=StyleSheet.create({

  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
    marginHorizontal:10,
    borderBottomWidth: 2,
    borderBottomColor: 'grey',
    backgroundColor:'white'
    
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
  },
  searchContainer: {
    padding: 10,
  },
  searchInput: {
    fontSize: 16,
    backgroundColor: '#f9f9f9',
    padding: 10,
  }

});

/*<Image 
      style={{width:64,height:64,borderRadius:32}}
      source={{uri:`http://flag.muratoner.net/?country=${kod}`}}/>*/
    