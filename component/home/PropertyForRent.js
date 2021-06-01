import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Image,Dimensions,ScrollView, View,Text } from 'react-native'
import {Card} from 'react-native-elements'
import PropertyForRent from '../../data/PropertyForRent'
let {width:screenWidth, height:screenHeight} = Dimensions.get('window')

function PropertyForRents({onSelect}) {
    return (
        
        <View style={{flex:1,elevation:50}}>
            <Card >
                <View style={{flex:1,marginBottom:20}}>
            <Text style={{fontWeight:'900', fontSize:20,color:'#121212'}}>Property For Rent</Text>
            </View>
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            >
            {PropertyForRent.map((element) => {
                return(
                    <TouchableOpacity key={element.id}  onPress={onSelect}>
                    <View  style={{flex:1,marginLeft:10}}>
                    <Image style={{resizeMode:'stretch',height:screenHeight/6,width:screenWidth/1.5}} source= {element.img}/>
                    <Text>{element.name}</Text>
                    <Text>{element.price}</Text>
                    <Text style={{color:'#e00000'}}>{element.status}</Text>
                    <Text>{element.area}</Text>
                    </View>
                    </TouchableOpacity>
                )
            })}
</ScrollView>
            </Card>
        </View>
    )
}

export default PropertyForRents

