import TermandCondition from '../../screen/termandCondition/TermandCondition'
import Color from '../../constants/Colors'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"



const TermandConditionStackNavigator = createStackNavigator({
    Termand_Condition:{
    screen:TermandCondition,
    navigationOptions:{
      headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? Color.accentColor  : Color.primaryColor
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
        fontWeight: "200"
      },
      headerTintColor: 'white',
    },
  
  },

  
});
const TermandConditionStackNavigation = createAppContainer(TermandConditionStackNavigator);
export default TermandConditionStackNavigation
