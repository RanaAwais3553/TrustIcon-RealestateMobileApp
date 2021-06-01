import {
  FlatList,
  Image,
  StatusBar,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React,{useState} from 'react'

import AllStyle from '../../AllStyle'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import HeaderLogo from '../headerlogo/HeaderLogo'
import NewProjects from '../../component/home/NewProjects'
import PropertiesBuyList from '../../component/home/PropertiesFlatlist'
import PropertiesRentList from '../../component/home/PropertyRentList'
import PropertyForRents from '../../component/home/PropertyForRent'
import PropertyForSale from '../../component/home/PropertyForSale'
import { ScrollView } from 'react-native-gesture-handler'
import SearchBarsExpandable from '../../component/searchComponent/SearchBarsExpandable'
import SegmentedControlTab from 'react-native-segmented-control-tab'

const PropertiesCategory = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedindex, setTabselect] = useState(0);

  const handleSingleIndexSelect = (index) => {
    setSelectedIndex(index)
 
  };
  const handleTabInner = (indexe) => {
    setTabselect(indexe)
  };
   return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View style={{ flex: 2, alignSelf: 'stretch' }}>
          <SearchBarsExpandable />
        </View>
        <View style={AllStyle.container}>
          {/* Simple Segmented Control*/}
          <Text style={AllStyle.headerText}>Properties For</Text>
        
          <SegmentedControlTab
            values={['Sale', 'Rent']}
            selectedIndex={selectedIndex}
            tabStyle={AllStyle.tabStyleinner}
            activeTabStyle={AllStyle.activeTabStyleinner}
            // onTabPress={index => setSelectedIndex({ selectedIndex: index })}
           onTabPress={handleSingleIndexSelect}
            tabsContainerStyle={{
              height: 40,
              marginTop: 0,
              marginBottom: 10,
            }}
          />
           
          {/* <View style={AllStyle.seperator} /> */}

         {selectedIndex === 0 &&
        <PropertiesBuyList 
        onSelect={()=>{
          props.navigation.navigate({routeName: 'Property_Detail_Sale'})}}
          />
       
         }

        {selectedIndex === 1 &&
        <PropertiesRentList  
        onSelect={()=>{
          props.navigation.navigate({routeName: 'Property_Detail_Rent'})}}
          />
          }

          <View style={AllStyle.seperator} />
        </View>

          <View style={{flex:1.3}}>
          <PropertyForSale
                      onSelect={()=>{
                        props.navigation.navigate({routeName: 'Property_Detail_Sale'})}}
           />
          </View>
   <View style={{flex:1.3}}>
          <PropertyForRents
            onSelect={() => {
              props.navigation.navigate({ routeName: 'Property_Detail_Rent' })
            }}
          />
        </View>

        <View style={{ flex: 1.3 }}>
          <NewProjects 
                      onSelectDubai={() => {
                        props.navigation.navigate({ routeName: 'AbuDahbi_Properties' })
                      }}
                      onSelectTurkey={() => {
                        props.navigation.navigate({ routeName: 'Dubai_Properties' })
                      }}
                      onSelectPak={() => {
                        props.navigation.navigate({ routeName: 'Sharjah_Properties' })
                      }}/>
        </View>
      </View>
    </ScrollView>
  )
}

PropertiesCategory.navigationOptions = (navData) => {
  return {
    headerTitle: () => <HeaderLogo/>,

headerRight: () => (
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item
      iconName='person'
      onPress={() => {
        navData.navigation.navigate('Login_Screen')
        // Share.share({
        //   title: 'Paradisegoc App',
        //   message:  'https://reactnative.dev/docs/share'  + '\nHy! Happy to see you!'
        // }).then((res) => console.log(res))
        //   .catch((error) => console.log(error))
      }}
    />
  </HeaderButtons>
),

      headerLeft:() => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
          />
        </HeaderButtons>
      ),

  }
}

export default PropertiesCategory
