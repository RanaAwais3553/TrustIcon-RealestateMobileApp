import { Avatar, Button, Card, Paragraph, Title } from 'react-native-paper';
import { FlatList, Image, Text, View } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'

import HeaderButton from '../../component/headerbutton/HeaderButton'
import HeaderLogo from '../headerlogo/HeaderLogo';
import { Ionicons } from '@expo/vector-icons';
import PropertyCards from '../../component/propertyCards/PropertyCards'
import React from 'react';
import newProjectsCardData from '../../data/newProjectsCardData';

const  SharjahProperties = (props) => {
  

     const renderProperties = (itemData) =>{ 
         
          return(
            <PropertyCards
          title= {itemData.item.name}
          images = {itemData.item.img}
          address = {itemData.item.address}
          onSelect={()=>{
            props.navigation.navigate({routeName: 'Contact_Us'})}}
  
  />
            );
          };  
 return (
  <View style={{width:'100%'}}>    
   
   <FlatList
         data={newProjectsCardData}
         keyExtractor={item => item.id}
         renderItem={renderProperties}
         numColumns={1}
       />
       </View>
      )
  }

  SharjahProperties.navigationOptions = navigationData => {
    return{
      headerTitle: () => <HeaderLogo/>,
      headerRight: () => (  <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title="compdetail"
        iconName="ios-add"
        onPress={
          () => {
            navigationData.navigation.navigate('Property_Form')
          }
         }
        
        />
      </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title='Menu'
            iconName='ios-menu'
            onPress={() => {
                navigationData.navigation.toggleDrawer()
            }}
          />
        </HeaderButtons>
      )
    };
  
  };
  
  export default SharjahProperties