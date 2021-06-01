import { Button, Dimensions, Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import React, { useState } from 'react';

import { Card } from 'react-native-paper';
import Color from '../../constants/Colors'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import HeaderLogo from '../headerlogo/HeaderLogo'

let {width:screenWidth, height:screenHeight} = Dimensions.get('window')

function Login(navData) {
  const [packege, setPackege] = useState('');
  const [cost, setCost] = useState('');

return (

<ScrollView style={styles.container}>
  <Card
  elevation={65}
  style={{
    //  flex:1,
  alignSelf:'stretch',
  marginTop:screenHeight/8.5,
  // justifyContent:'center',
  // alignItems:'center',
  }}>
<View 
style={{
  flex:1,
alignSelf:'stretch',
justifyContent:'center',
paddingTop:screenHeight/7,
alignItems:'center',

}}
>
 
<View style={{
flex:1,
alignSelf:'stretch',
justifyContent:'center',
alignItems:'center',
marginTop:10,

}}>
  <View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="email..."
    placeholderTextColor="#003f5c"
    onChangeText={(nam) => setPackege(nam)}
  />
</View>
 
<View style={styles.inputView}>
  <TextInput
    style={styles.TextInput}
    placeholder="Password..."
    placeholderTextColor="#003f5c"
    secureTextEntry={true}
    onChangeText={(cos) => setCost(cos)}
  />
</View>


<TouchableOpacity  style={styles.loginBtn}>
<Text style={styles.loginText}>Login</Text>
</TouchableOpacity>
  <Text>
<Text 
    onPress={
        () => {
          navData.navigation.goBack()

        }}
    style=
    {{fontFamily:'open-sans-bold',  
    color:Color.accentColor, 
    textDecorationLine:'underline',
    letterSpacing:1 }}>
        Cancel</Text>
        <Text >  Or  </Text>
    <Text 
    onPress={
        () => {
          navData.navigation.navigate('Sign_Up')
        }}
    style=
    {{fontFamily:'open-sans-bold',  
    color:'#0275d8', 
    textDecorationLine:'underline',
    letterSpacing:1 }}>
        Register</Text>
        </Text>
</View>
</View>
</Card>
</ScrollView>
);
}

Login.navigationOptions = navigationData => {
  return{
      headerTitle: () => <HeaderLogo/>, 

    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent = {HeaderButton}>
        <Item 
        title='Back Button' 
        iconName='arrow-back' 
        onPress={() => {
          navigationData.navigation.goBack();
        }} /> 
    
      </HeaderButtons>
    )
  };

};


export default Login
const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: Color.accentColour,

  },
  
    inputView: {
      backgroundColor: "#fff",
      width: "90%",
      height: 45,

      marginBottom: 20,
      alignItems: "flex-start",
      borderWidth:1,
    },
    
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
loginBtn:{
 width:"60%",
 height:50,
 borderRadius: 30,
 alignItems:"center",
 justifyContent:"center",
 marginTop:10,
 borderWidth:1,
 borderColor:Color.primaryColour,
 backgroundColor:Color.accentColour,
},
loginText:{
color:'#121212',
fontFamily:'open-sans-bold',
},
});