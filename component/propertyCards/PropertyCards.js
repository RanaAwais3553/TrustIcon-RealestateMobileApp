import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { Icon } from 'react-native-elements'
//import Ratting from '../../components/rating/Rating'
import { Ionicons } from '@expo/vector-icons';
import Color from '../../constants/Colors'


const PropertyCards = ({price,status,address,bed,bath,area,giraaj,images,onSelect,title}) => {
return (
  <TouchableOpacity activeOpacity={0.3} onPress={onSelect}>
  <Card
  elevation={15}
  style={{marginBottom:20}}
//   onPress= {()=>{
//     props.navigation.navigate({routeName: 'Contact_Us'})}}
  >
    <Card.Cover style={{resizeMode:'stretch'}} source={images} />
     <Card.Content >
         <View style={{  flexDirection:'row' ,alignItems:'flex-start',justifyContent:'space-between'}}>
      <Title>{title}</Title>
  
      </View>
    </Card.Content>
    <Card.Content >
     
    <View style={{flexDirection:'row',justifyContent:'flex-start', alignItems:'flex-start'}}>
    { address && (
    <Ionicons name = 'location' size={18} color={Color.primaryColour} style={{}}/>
    )   }      
     <Paragraph numberOfLines={1} ellipsizeMode='tail' style={{}}>{address}</Paragraph>
      </View>
         <View style={{ flexDirection:'row' ,alignItems:'center',justifyContent:'space-between'}}>
      {/* <Ratting/> */}
    
      <View style={{flexDirection:'row'}}>
      { price && (
    <Ionicons name = 'flash' size={24} color={Color.primaryColour} style={{}}/>
      )}
    <Paragraph style={{}}>{price}</Paragraph>
          </View>
          <View style={{flexDirection:'row'}}>
          { bed && (
    <Ionicons name = 'bed' size={24} color={Color.primaryColour} style={{}}/>
          )}
     <Paragraph style={{}}>{bed} </Paragraph>
     { bath && (
    
     <Icon
  
  name='bathtub'
  type='font-awesome'
  size={24}
  color='#121212'
  style={{marginLeft:5}}
   />
     )}
  <Paragraph numberOfLines={1} style={{}}> {bath} </Paragraph>
  { giraaj && (

  <Icon
  
  name='car'
  type='font-awesome'
  color='#121212'
  size={24}
  style={{marginLeft:5}}
   />
  )}
   <Paragraph style={{}}> {giraaj}</Paragraph>
   
   { area && (
  <Icon
  name='square-foot'
  type='material'
  color='#121212'
  size={28}
  style={{}}
   />
   )}
   <Paragraph ellipsizeMode='tail' style={{}}>{area}</Paragraph>
          </View>
      </View>
    </Card.Content>
    <Card.Actions style={{alignItems:'flex-end',justifyContent:'space-between'}}>
  <Paragraph style={{color:'#e00000'}}> {status}</Paragraph>
    
    <Button  mode="contained" style={{backgroundColor:'#e00000'}} onPress={onSelect}>Inquiry Now</Button>
      
    </Card.Actions>
  </Card>
  </TouchableOpacity>
);
}


  export default PropertyCards