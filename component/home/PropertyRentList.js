import React from 'react'
import { TouchableOpacity } from 'react-native';
import {View ,Image,Dimensions, Text,FlatList,TouchableHighlight} from 'react-native';
import AllStyle from '../../AllStyle'
let {width:screenWidth, height:screenHeight} = Dimensions.get('window')
import Houses from '../../data/Houses'

function PropertiesRentList({onSelect}) {
    return (
       <View>
        <View style={{height:screenHeight/8,flexDirection:'row', width:screenWidth/1.1,marginLeft:4,alignContent:'center'}}>
        
        <TouchableOpacity onPress={onSelect} style={{height:screenHeight/9,width:screenWidth/2.3,borderWidth:0.5,backgroundColor:'#ededed', borderColor:'#ededed',marginLeft:9,marginTop:10, padding:5}}>
         <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
         <Image style={{resizeMode:'contain',width:'100%',height:'100%'}} source={require('../../assets/Icons/AppartmentFlat.png')}/>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSelect} style={{height:screenHeight/9,width:screenWidth/2.3,borderWidth:0.5,backgroundColor:'#ededed', borderColor:'#ededed',marginLeft:9,marginTop:10, padding:5}}>
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
              <TouchableOpacity onPress={onSelect} style={{height:screenHeight/9,width:screenWidth/2.3,borderWidth:0.5,backgroundColor:'#ededed', borderColor:'#ededed',marginLeft:9,marginTop:10, padding:5}}>
         <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
         <Image style={{resizeMode:'contain',width:'100%',height:'100%'}} source={require('../../assets/Icons/Commercial.png')}/>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={onSelect} style={{height:screenHeight/9,width:screenWidth/2.3,borderWidth:0.5,backgroundColor:'#ededed', borderColor:'#ededed',marginLeft:9,marginTop:10, padding:5}}>
         <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
         <Image style={{resizeMode:'contain',width:'100%',height:'100%'}} source={require('../../assets/Icons/Room.png')}/>
                </View>
                </TouchableOpacity>
        
                  </View>

                  <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <Text style={[{textAlign:'center'},AllStyle.tabContent]}>Commercial</Text>
        <Text style={[{textAlign:'center'},AllStyle.tabContent]}>Rooms</Text>
      
        </View>

      <View style={{height:screenHeight/8,flexDirection:'row', width:screenWidth/1.1,marginLeft:4,alignContent:'center'}}>
      <TouchableOpacity onPress={onSelect} style={{height:screenHeight/9,width:screenWidth/2.3,borderWidth:0.5,backgroundColor:'#ededed', borderColor:'#ededed',marginLeft:9,marginTop:10, padding:5}}>
         <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
         <Image style={{resizeMode:'contain',width:'100%',height:'100%'}} source={require('../../assets/Icons/ShortTermProjects.png')}/>
        </View>
        
        </TouchableOpacity>
        <TouchableOpacity onPress={onSelect} style={{height:screenHeight/9,width:screenWidth/2.3,borderWidth:0.5,backgroundColor:'#ededed', borderColor:'#ededed',marginLeft:9,marginTop:10, padding:5}}>
         <View style={{flex:1.5,alignItems:'center',justifyContent:'center'}}>
         <Image style={{resizeMode:'contain',width:'100%',height:'100%'}} source={require('../../assets/Icons/LongTermProjects.png')}/>
        </View>
        </TouchableOpacity>

          </View>

          <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
        <Text style={[{textAlign:'center'},AllStyle.tabContent]}>Short Term Daily</Text>
        <Text style={[{textAlign:'center'},AllStyle.tabContent]}>Short Term Monthly</Text>
      
        </View>
                  </View>      
    )
}

export default PropertiesRentList
