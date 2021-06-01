import { Button, Card, Icon } from 'react-native-elements'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import { Text, View } from 'react-native'

import Colors from '../../constants/Colors'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import PaymentOption from '../../component/packeges/PaymentOption'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'

function PaymentInvoice(props) {
  const ptype = props.navigation.getParam('type');
  const price = props.navigation.getParam('price');
  const expDate = props.navigation.getParam('expDate');
  const propListing = props.navigation.getParam('propListing');
  const featurList = props.navigation.getParam('featurList');
  const pyment =  props.navigation.getParam('payment');
  return (
      <ScrollView>
        <View style={{flex:1}}>
            <Card>
  <Card.Title>Selected Packege</Card.Title>
  <Card.Divider/>
   <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
  <Card.Title>
      Packege
  </Card.Title>
  <Card.Title>
      {ptype}
  </Card.Title>
</View>
<Card.Divider/>

   <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
  <Card.Title>
      Packege Time 
  </Card.Title>
  <Card.Title>
      {expDate}
  </Card.Title>
</View>

<Card.Divider/>
  <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
  <Card.Title>
      Listining Include
  </Card.Title>
  <Card.Title>
      {propListing}
  </Card.Title>
</View>

<Card.Divider/>
  <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
  <Card.Title>
      Include
  </Card.Title>
  <Card.Title>
      {featurList}
  </Card.Title>
</View>

<Card.Divider/>
  <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between'}}>
  <Card.Title>
      Total Price 
  </Card.Title>
  <Card.Title>
      {price}
  </Card.Title>
</View>

<Card.Divider/>
<Button
  title="Change Packege"
  type="solid"
  onPress={()=>{props.navigation.goBack()}}
/>
  </Card>

   { pyment && <PaymentOption/>}    
    </View>
        </ScrollView>
    )
}

PaymentInvoice.navigationOptions = navData => {
  
    return{
  
    headerTitle:'Payment Invoice',
    headerLeft: () => (
        <HeaderButtons HeaderButtonComponent = {HeaderButton}>
          <Item 
          title='Back Button' 
          iconName='arrow-back' 
          onPress={() => {
            navData.navigation.goBack();
          }} /> 
      
        </HeaderButtons>
  )
    }
  }
  
export default PaymentInvoice
