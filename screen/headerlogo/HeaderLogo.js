import {
    FlatList,
    Image,
    StatusBar,
    Text,
    TouchableHighlight,
    View,
} from 'react-native'

import React from 'react'

function HeaderLogo() {
    return (
    //    <View style={{flex:1}}>

        <Image style={{width:100 ,resizeMode:'contain'}}  source={require('../../assets/realestatelogo.png')} />
    
    )
}

export default HeaderLogo
