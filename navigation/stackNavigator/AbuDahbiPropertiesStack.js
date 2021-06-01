import AbuDahbiProperties from '../../screen/abuDahbi/AbuDahbiProperties';
import Color from '../../constants/Colors'
import {Platform} from "react-native"
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const AbuDahbiPropertiesStackNavigator = createStackNavigator({
  AbuDahbi_Properties:{
    screen:AbuDahbiProperties,
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
const AbuDahbiPropertiesStackNavigation = createAppContainer(AbuDahbiPropertiesStackNavigator);
export default AbuDahbiPropertiesStackNavigation
