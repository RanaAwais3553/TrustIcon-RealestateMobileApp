import React from 'react';
import {View , Text} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../component/headerbutton/HeaderButton'


const SaleProperty = props =>{
  return(
  <View style={{flex:0.4,justifyContent:'center',alignItems:'center'}}>
    <Text>Term and Condition</Text>
  </View>
);
};

// SaleProperty.navigationOptions = navData => {
  
//   return{

//   headerTitle:'TermandCondition',
//   headerLeft: () => (
//   <HeaderButtons HeaderButtonComponent = {HeaderButton}>
//     <Item 
//     title='Menu' 
//     iconName='ios-menu' 
//     onPress={() => {
//       navData.navigation.toggleDrawer();
//     }} /> 

//   </HeaderButtons>
// )
//   }
// }

export default SaleProperty;