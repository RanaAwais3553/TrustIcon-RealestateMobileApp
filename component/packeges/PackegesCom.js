import { PricingCard } from 'react-native-elements';
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
import {View} from 'react-native'

function PackegesCom({type,price,expDate,propListing,featurList,onSelect}) {
    return (
        <View style={{flex:1}}>
<PricingCard
  color="#4f9deb"
  title={type}
  price={price}
  info={[expDate, propListing, featurList]}
  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
  onButtonPress={onSelect}
/>

        </View>
    );
};
export default PackegesCom
