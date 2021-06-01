// import React from 'react'
// import Color from '../../constants/Colors'
// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";
// import {Platform } from "react-native"
// import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
// import { createTopTabNavigator } from 'react-navigation-tabs';
// import {HeaderButtons, Item} from 'react-navigation-header-buttons'
// import HeaderButton from '../../component/headerbutton/HeaderButton'
// import RentProperty from '../../screen/rentProperty/RentProperty';
// import SaleProperty from '../../screen/saleProperty/SaleProperty';
// import PropertiesCategory from '../../screen/home/PropertiesCategory';
// import Login from '../../screen/loginSignup/Login'
// import SignUp from '../../screen/loginSignup/SignUp'

// const PropertiesTopTabScreenConfig = {
//     Rent_Property: {
//  screen: RentProperty ,
//   },
//   Sale_Property:{
//     screen: SaleProperty ,
//   },
// };

// const PropertiesTopTab = Platform.OS==='android'? createMaterialTopTabNavigator(PropertiesTopTabScreenConfig, {

//     tabBarPosition: 'top',
//     swipeEnabled: true,
//     animationEnabled: true,
    
//     tabBarOptions: {
//       activeTintColor: '#FFFFFF',
//       inactiveTintColor: '#C0C0C0',
      
//       style: {
//         backgroundColor: '#4c2666',
        
//       },
//       labelStyle: {
//         textAlign: 'center',
//         fontFamily:'open-sans-bold',
//         fontSize:11,
//       },
//       indicatorStyle: {
//         borderBottomColor: '#c11e8a',
//         borderBottomWidth: 2,
//       },
//     },
  
// }) 
// : createTopTabNavigator (
//   tabCosmopolitanScreenConfig,
//   {
//   tabBarOptions:{
//     activeTintColor: Color.primaryColour
//   },
// });

// const PropertiesTopTabStackNavigator = createStackNavigator({
    
//     Propert_ies:{
//         screen: PropertiesCategory,
//     },
//     Properties_Top_Tab:{
//         screen: PropertiesTopTab,
//     },
//     },
//     {
    
//       mode:'modal',
//       defaultNavigationOptions:{
//         headerTitleAlign:'center',
        
//         // headerBackground:(
//         //   <Image
//         //   style={StyleSheet.absoluteFill}
//         //   source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/3/36/Hopetoun_falls.jpg' }}
//         // />
//         // ),
//         headerStyle:{
//       backgroundColor: Platform.OS==='android' ? '#fff' : '#fff',
//       height: 100,
            
//     },
//         headerTitleStyle:{
//           fontFamily: "open-sans-bold",
//             fontWeight: "200"
//         },
//           headerTintColor: 'white'
//       }
// });

// const PropertiesTopTabStackNavigation = createAppContainer(PropertiesTopTabStackNavigator);
// export default PropertiesTopTabStackNavigation
