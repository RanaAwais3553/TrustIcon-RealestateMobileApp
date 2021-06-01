import {Button, Card, CheckBox, Icon} from 'react-native-elements'
import { Text, View } from 'react-native'

import Colors from '../../constants/Colors';
import React from 'react'

function PaymentOption() {
    const [checked , setState] = React.useState(false);
    const [checked1 , setState1] = React.useState(false);
    const [checked2 , setState2] = React.useState(false);

    return (
       <View>
           <Card>
           <CheckBox
  center
  title='Pay With Paypal'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checked={checked}
  onPress={() => setState(!checked)}
/>
<CheckBox
  center
  title='Pay with Credit Card'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checked={checked1}
  onPress={() => setState1(!checked1)}
/>
<CheckBox
  center
  title='Wire Transfer'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checked={checked2}
  onPress={() => setState2(!checked2)}
/>
<Text style={{color:Colors.primaryColor,margin:19}}>Read First Term and Condition</Text>
<Button
  title="PAY NOW"
  type="solid"
  onPress={()=>{props.navigation.goBack()}}
/>

           </Card>
       </View>
    )
}

export default PaymentOption
