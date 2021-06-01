import Agents from '../../screen/agents/Agents';
import Color from '../../constants/Colors'
import {Platform} from "react-native"
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const AgentsStackNavigator = createStackNavigator({
    Agent_s:{
    screen:Agents,
    navigationOptions:{
    headerTransparent:true,
    headerTitleAlign:'center',
    headerStyle:{
        
  backgroundColor: Platform.OS==='android' ? Color.accentColor  : Color.primaryColor,
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
        fontWeight: "200"
      },
      headerTintColor: 'white',
    },
  
  },

  
});
const AgentsStackNavigation = createAppContainer(AgentsStackNavigator);
export default AgentsStackNavigation
