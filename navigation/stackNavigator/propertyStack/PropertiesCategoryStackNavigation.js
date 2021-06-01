import React from 'react'
import {Image,StyleSheet} from 'react-native'
import Color from '../../../constants/Colors'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"
import PropertiesCategory from '../../../screen/home/PropertiesCategory';
import Login from '../../../screen/loginSignup/Login'
import SignUp from '../../../screen/loginSignup/SignUp'
import PropertiesTopTabStackNavigation from '../../topnavigation/PropertiesTopTabNavigation'
import PropertyDetailRent from '../../../screen/propertyDetail/PropertyDetail';
import PropertyForm from '../../../screen/propertyDetail/PropertyForm';
import PropertyDetailSale from '../../../screen/propertyDetail/PropertyDetailSale';

const PropertiesStackNavigator = createStackNavigator({
  Propert_ies:{
    screen: PropertiesCategory,
},
  Login_Screen:{
    screen:Login,
  },
  Sign_Up:{
    screen:SignUp,
  },
  Property_Detail_Rent:{
    screen:PropertyDetailRent,
  },
  Property_Detail_Sale:{
    screen:PropertyDetailSale
  },
  Property_Form:{
    screen:PropertyForm
  }
  
},
{

  mode:'modal',
  defaultNavigationOptions:{
    headerTitleAlign:'center',
    
    // headerBackground:(
    //   <Image
    //   style={StyleSheet.absoluteFill}
    //   source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
    // />
    // ),
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? '#fff' : '#fff',
  height: 100,
        
},
    headerTitleStyle:{
      fontFamily: "open-sans-bold",
        fontWeight: "200"
    },
      headerTintColor: 'white'
  }
});
const PropertiesCategoryStackNavigation = createAppContainer(PropertiesStackNavigator);
export default PropertiesCategoryStackNavigation










