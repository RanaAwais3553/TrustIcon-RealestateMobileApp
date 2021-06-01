import Color from '../../constants/Colors'
import {Platform} from "react-native"
import SharjahProperties from '../../screen/sharjah/SharjahProperties';
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const SharjahPropertiesStackNavigator = createStackNavigator({
  Sharjah_Properties:{
    screen:SharjahProperties,
    navigationOptions:{
      headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? '#fff'  : '#fff'
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
        fontWeight: "200"
      },
      headerTintColor: 'white',
    },
  
  },

  
});
const SharjahPropertiesStackNavigation = createAppContainer(SharjahPropertiesStackNavigator);
export default SharjahPropertiesStackNavigation
