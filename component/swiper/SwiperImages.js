import React, { Component } from 'react'
import { StyleSheet,Image, Text, View } from 'react-native'
 
import Swiper from 'react-native-swiper'
import AllStyle from '../../AllStyle'
  
export default class SwiperComponent extends Component {
  render() {
    return (
      <Swiper autoplay = {true}  horizontal={false}  
      
      showsPagination={false}
      showsButtons={true}>
        {/* <View style={AllStyle.slide1}>
          <Image style={AllStyle.imagess} source={this.props.serImage}/>
        </View> */}
        <View style={{flex:1}}>
        <Image style={AllStyle.aboutSwiper} source={require('../../assets/swiperaboutimages/property1.jpg')}/>

          
        </View>
        <View style={{flex:1}}>
        <Image style={AllStyle.aboutSwiper} source={require('../../assets/swiperaboutimages/property4.jpg')}/>

        </View>
        <View style={{flex:1}}>
        <Image style={AllStyle.aboutSwiper} source={require('../../assets/swiperaboutimages/property5.jpg')}/>

        </View>
      </Swiper>
    )
  }
}
 