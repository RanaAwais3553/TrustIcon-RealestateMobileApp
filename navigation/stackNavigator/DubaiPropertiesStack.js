import Color from '../../constants/Colors'
import DubaiProperties from '../../screen/dubai/DubaiProperties';
import {Platform} from "react-native"
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const DubaiPropertiesStackNavigator = createStackNavigator({
  Dubai_Properties:{
    screen:DubaiProperties,
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
const DubaiPropertiesStackNavigation = createAppContainer(DubaiPropertiesStackNavigator);
export default DubaiPropertiesStackNavigation
