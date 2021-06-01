import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import HeaderButton from '../../component/headerbutton/HeaderButton'
import PackegesCom from '../../component/packeges/PackegesCom'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import {View} from 'react-native'

function Packeges(props) {
    return (
        <View style={{flex:1}}>
            <ScrollView>
         <PackegesCom
         type='Free'
         price='Free'
         expDate = 'Expiration Date  100Days'
         propListing = 'Property Listing  100'
         featurList = 'Featured Listings  50'
         payment= {false}
         onSelect={()=>{
            props.navigation.navigate({routeName: 'Payment_Invoice',
            params:{
                type:'Free',
                price:'Free',
                expDate:'Expiration Date 100 Days',
                propListing:'Property Listing  100',
                featurList:'Featured Listings  50',
                payment: false
              }
            });
    }}
         />
        <PackegesCom
         type='Standard'
         price='AED30'
         expDate = 'Expiration Date 3month'
         propListing = 'Property Listing  20'
         featurList = 'Featured Listings  10'
         payment= {true}
         onSelect={()=>{
            props.navigation.navigate({routeName: 'Payment_Invoice',
            params:{
                type:'Standard',
                price:'AED30',
                expDate:'Expiration Date 3month',
                propListing:'Property Listing  20',
                featurList:'Featured Listings  10',
                payment: true
              }
    });
    }}
         />
         <PackegesCom
         type='Premium'
         price='AED80'
         expDate = 'Expiration Date 1year'
         propListing = 'Property Listing  100'
         featurList = 'Featured Listings  50'
         payment= {true}
         onSelect={()=>{
            props.navigation.navigate({routeName: 'Payment_Invoice',
            params:{
                type:'Premium',
                price:'AED80',
                expDate:'Expiration Date 1year',
                propListing:'Property Listing  100',
                payment: true,
                featurList:'Featured Listings  50',
        }
            });
    }}
         />
        <PackegesCom
         type='Gold'
         price='AED200'
         expDate = 'Expiration Date Never Expire'
         propListing = 'Property Listing  Unlimited'
         featurList = 'Featured Listings  50'
         payment= {true}
         onSelect={()=>{
            props.navigation.navigate({routeName: 'Payment_Invoice',
            params:{
                type:'Gold',
                price:'AED200',
                expDate:'Expiration Date Never Expire',
                propListing:'Property Listing  Unlimited',
                featurList:'Featured Listings  50',
                payment: true

        }
            });
    }}
         />
         </ScrollView>
        </View>

    );
};
Packeges.navigationOptions = navData => {
  
    return{
  
    headerTitle:'Packeges',
    headerLeft: () => (
    <HeaderButtons HeaderButtonComponent = {HeaderButton}>
      <Item 
      title='Menu' 
      iconName='ios-menu' 
      onPress={() => {
        navData.navigation.toggleDrawer();
      }} /> 
  
    </HeaderButtons>
  )
    }
  }
  
export default Packeges
