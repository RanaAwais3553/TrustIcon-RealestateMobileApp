import Color from '../../constants/Colors'
import FAQ from '../../screen/faq/FAQ'
import Packeges from '../../screen/packeges/Packeges';
import PaymentInvoice from '../../screen/packeges/PaymentInvoice';
import {Platform} from "react-native"
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

const PackegesStackNavigator = createStackNavigator({
    Packe_ges:{
    screen:Packeges,
    },
    Payment_Invoice:{
        screen:PaymentInvoice,
      },
    },
    {

        mode:'modal',
        defaultNavigationOptions:{
          headerTitleAlign:'center',
          
          headerStyle:{
        backgroundColor: Platform.OS==='android' ? '#fff' : '#fff',
        height: 100,
              
      },
          headerTitleStyle:{
            fontFamily: "open-sans-bold",
              fontWeight: "200"
          },
            headerTintColor: '#121212'
        }
      });
const PackegesStackNavigation = createAppContainer(PackegesStackNavigator);
export default PackegesStackNavigation
