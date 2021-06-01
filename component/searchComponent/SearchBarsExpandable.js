import { Card, SearchBar } from 'react-native-elements';
import { Image, TouchableOpacity, View } from 'react-native';
import React,{Component} from 'react'

import { Ionicons } from '@expo/vector-icons';

export default class SearchBarsExpandable extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      showSearchBar: false, // control what ever to render the searchbar or just the icon
    search: '',

    };
  }
  onClick() {
    let { showSearchBar } = this.state;
    this.setState({
      showSearchBar: !showSearchBar,
    });
  }
  updateSearch = (search) => {
    this.setState({ search });
  };
  render() {
    const { showSearchBar } = this.state;
    const { search } = this.state;
    return (
      <View>
        {!showSearchBar ? (
          <TouchableOpacity activeOpacity={0.4} onPress={this.onClick} style={{flex:1.5, backgroundColor:'#fff'}}>
                 <Card

containerStyle={{marginTop:0,elevation:5,width:'100%',justifyContent:'center',alignItems:'center', marginLeft:0}}>     
<Ionicons name = 'search' size={29} color={'#c4c4c4'}/>
</Card>

           </TouchableOpacity>
        ) : (
            <Card

containerStyle={{marginTop:0,elevation:5,width:'100%',marginLeft:0}}>
            <SearchBar
            placeholder="Type Here..."
            containerStyle={{backgroundColor:'#fff', borderWidth:0 }}
            onChangeText={this.updateSearch}
            value={search}
            lightTheme={true}
            inputContainerStyle={{backgroundColor:'#fff'}}
          />
          </Card>
        )}
      </View>
    );
  }
}
