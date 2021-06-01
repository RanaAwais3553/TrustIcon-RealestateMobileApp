import {Button, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import {Dimensions, Platform} from "react-native"
import { DrawerItems, createDrawerNavigator } from 'react-navigation-drawer'
import React,{useState} from 'react';

import AboutStackNavigation from '../stackNavigator/AboutStackNavigation'
import AbuDahbiPropertiesStackNavigation from './../stackNavigator/AbuDahbiPropertiesStack';
import AgentsStackNavigation from './../stackNavigator/AgentsStackNavigation';
import Color from '../../constants/Colors'
import ContactUsStackNavigation from '../stackNavigator/ContactUsStackNavigation';
import DubaiPropertiesStackNavigation from '../stackNavigator/DubaiPropertiesStack';
import FAQStackNavigation from '../stackNavigator/FAQStackNavigation';
import { Ionicons } from '@expo/vector-icons';
import PackegesStackNavigation from './../stackNavigator/PackegesStackNavigation';
import PropertiesCategoryStackNavigation from '../stackNavigator/propertyStack/PropertiesCategoryStackNavigation';
import { ScrollView } from 'react-native-gesture-handler'
import SharjahPropertiesStackNavigation from '../stackNavigator/SharjahPropertiesStackNavigation';
import TermandConditionStackNavigation from '../stackNavigator/TermandConditionStackNavigation';
import { createAppContainer } from "react-navigation";

const MainDrawerNavigator = createDrawerNavigator({
   
  Properties_Category: {
      screen: PropertiesCategoryStackNavigation,
      navigationOptions:{
        drawerIcon: () => (
          <Ionicons name = 'home' size={25} color={Color.title}/>
        ),
        
        drawerLabel:'Home',
        
      }
    
    },
    AbuDahbi_Pro:{
      screen:AbuDahbiPropertiesStackNavigation,
      navigationOptions:{
        
        drawerIcon: () => (
          <Image resizeMode='contain' style={{width:40,height:40}} source={require('../../assets/abudahbi.gif')}/>

        ),
        drawerLabel:'Abu Dahbi Properties',
      }
    },
    Dubai_Pro:{
      screen:DubaiPropertiesStackNavigation,
      navigationOptions:{
        
        drawerIcon: () => (
          <Image resizeMode='contain' style={{width:40,height:40}} source={require('../../assets/dubai.gif')}/>
        ),
        drawerLabel:'Dubai Properties',
      }
    },
    Sharjah_Pro:{
      screen:SharjahPropertiesStackNavigation,
      navigationOptions:{
        
        drawerIcon: () => (
          <Image resizeMode='contain' style={{width:40,height:40}} source={require('../../assets/sharjah.gif')}/>

        ),
        drawerLabel:'Sharjah Properties',
      }
    },

    Packeg_es:{
      screen:PackegesStackNavigation,
      navigationOptions:{
        
        drawerIcon: () => (
          <Ionicons name = 'gift'size={29} color={Color.title}/>
        ),
        drawerLabel:'Packeges',
      }
    },


    Agent:{
      screen:AgentsStackNavigation,
      navigationOptions:{
        
        drawerIcon: () => (
          <Ionicons name = 'man'size={29} color={Color.title}/>
        ),
        drawerLabel:'Agents',
      }
    },

    About:{
      screen:AboutStackNavigation,
      navigationOptions:{
        
        drawerIcon: () => (
          <Ionicons name = 'information-circle-sharp'size={29} color={Color.title}/>
        ),
        drawerLabel:'AboutUs',
      }
    },
  
  
  
  ContactUs:{
    screen: ContactUsStackNavigation,
    navigationOptions:{
      drawerIcon: () => (
        <Ionicons name = 'call-sharp'size={25} color={Color.title}/>
      ),
      drawerLabel:'ContactUs',
    }
  },
  
  
  TermCondition:{
    screen: TermandConditionStackNavigation,
    navigationOptions:{
      drawerIcon: () => (
        <Ionicons name = 'reader-sharp'size={25} color={Color.title}/>
      ),
      drawerLabel:'Term&Condition',
    }
  },
  
  
  FandQ:{
    screen: FAQStackNavigation,
    navigationOptions:{
      drawerIcon: () => (
        <Ionicons name = 'hand-left-sharp'size={25} color={Color.title}/>
  
      ),
      drawerLabel:'FAQ',
    }
  },
  
  
  },
  
    
  {
    contentComponent: (props) => {
      return (
      <ScrollView>
      <SafeAreaView style={{flex:1}}
      forceInset={{ top: '', horizontal: 'never' }}>
        <View style={{flex:1,backgroundColor:Color.logoBack, borderBottomRightRadius:70,borderBottomLeftRadius:50}}>
          
          <View style={styles.drawerLogo}>
  
            <Image style={{flex:0.9,width:'80%',resizeMode:'contain'}} source={require('../../assets/realestatelogo.png')} />
          </View>
          
          </View>
          
          <DrawerItems  {...props}/>
          
      </SafeAreaView>
      </ScrollView>
      
    )
},
    
   // drawerWidth: Dimensions.get('window').width * 1,
    drawerBackgroundColor: Color.drawerBack,
    // width: Dimensions.get('window').width * 2,
    contentOptions:{
      activeTintColor:Color.title,
      
    //  activeBackgroundColor : Color.accentColour,
      inactiveTintColor: Color.inactiveTitle,
      itemsContainerStyle: {
        marginVertical: 55,
      },
      
      labelStyle:{
        fontFamily: 'open-sans',
        fontSize:18,
       
       
      },
      
      itemStyle:{
        marginVertical:10,
         
       
      },
      
    }
  
  });
  export default createAppContainer(MainDrawerNavigator);
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    drawerLogo:{
      flex:1,
      height: 100,
      alignItems: 'center',
      marginTop:120, 
      justifyContent: 'center',
   
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    cardContainer: {
      flexGrow: 1,
    },
    card: {
      flexGrow: 1,
      
      alignItems: 'center',
      justifyContent: 'center',
    },
    heading: {
      fontSize: 18,
      flex:1,
      textAlign:'center',
     
      fontWeight: '400',
      borderBottomColor:'#C0C0C0',
      backgroundColor:'#10d300',
      borderBottomWidth:2,
      textTransform: 'uppercase',
      letterSpacing: 2,
      padding:10,
    },
    body: {
      fontSize: 20,
      lineHeight: 20 * 1.9,
      textAlign: 'center',
      borderBottomWidth:2,
      borderBottomColor:'#C0C0C0',
       borderRadius:15,
    },
    subCategoriesList: {
      marginTop: 10,
      marginBottom:10,

    },
   
  
  });