import React from 'react'
import {View ,Image,Dimensions, Text,FlatList,TouchableHighlight} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AllStyle from '../../AllStyle'
let {width:screenWidth, height:screenHeight} = Dimensions.get('window')
import Houses from '../../data/Houses'

function PropertiesBuyList({onSelect}) {
    return (
       <View>
          <View
            
            style={{height:screenHeight/8,flexDirection:'row', width:screenWidth/1.1,marginLeft:4,alignContent:'center'}}
         >
<TouchableOpacity onPress={onSelect} style={{height:screenHeight/9,width:screenWidth/2.3,borderWidth:0.5,backgroundColor:'#ededed', borderColor:'#ededed',marginLeft:9,marginTop:10, padding:5}}>
<View style={{flex:1.7,alignItems:'center',justifyContent:'flex-start'}}>
   <Image style={{resizeMode:'contain',width:'100%',height:'100%'}} source={require('../../assets/Icons/AppartmentFlat.png')}/>
        
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={onSelect} style={{height:screenHeight/9,width:screenWidth/2.3,backgroundColor:'#ededed', borderWidth:0.5,borderColor:'#ededed',marginLeft:9,marginTop:10, padding:5}}>
        <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
        <Image style={{resizeMode:'contain',width:'100%',height:'100%'}} source={require('../../assets/Icons/VillasHouses.png')}/>
      
        </View>
        </TouchableOpacity>
         </View>

         <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <Text style={[{textAlign:'center'},AllStyle.tabContent]}>Appartment/Flat</Text>
        <Text style={[{textAlign:'center'},AllStyle.tabContent]}>Villa/House</Text>
      
        </View>
         
         <View style={{height:screenHeight/8,flexDirection:'row', width:screenWidth/1.1,marginLeft:4,alignContent:'center'}}>
         
         <TouchableOpacity onPress={onSelect} style={{height:screenHeight/9,width:screenWidth/2.3,backgroundColor:'#ededed', borderWidth:0.5,borderColor:'#ededed',marginLeft:9,marginTop:10, padding:5}}>
        <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
        <Image style={{resizeMode:'contain',width:'100%',height:'100%'}} source={require('../../assets/Icons/Commercial.png')}/>
    </View>
         </TouchableOpacity>

         <TouchableOpacity onPress={onSelect} style={{height:screenHeight/9,width:screenWidth/2.3,backgroundColor:'#ededed', borderWidth:0.5,borderColor:'#ededed',marginLeft:9,marginTop:10, padding:5}}>
         <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
         <Image style={{resizeMode:'contain',width:'100%',height:'100%'}} source={require('../../assets/Icons/Land.png')}/>
                
                </View>
                </TouchableOpacity>
        
                  </View>

                  <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <Text style={[{textAlign:'center'},AllStyle.tabContent]}>Commercial</Text>
        <Text style={[{textAlign:'center'},AllStyle.tabContent]}>Land</Text>
      
        </View>
                  </View>      
    )
}

export default PropertiesBuyList
