import React from 'react';
import {View , Text} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../component/headerbutton/HeaderButton'


const TermandCondition = props =>{
  return(
  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>Term and Condition</Text>
  </View>
);
};

TermandCondition.navigationOptions = navData => {
  
  return{

  headerTitle:'TermandCondition',
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

export default TermandCondition;