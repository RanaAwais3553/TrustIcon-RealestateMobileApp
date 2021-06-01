import { Avatar, Card, Paragraph, Title } from 'react-native-paper';
import { Button, Dimensions, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import React, { useState } from 'react';

import Color from '../../constants/Colors'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import HeaderLogo from './../headerlogo/HeaderLogo';

let {width:screenWidth, height:screenHeight} = Dimensions.get('window')

 function PropertyForm(navData) {
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
      placeholder="Property Title..."
      placeholderTextColor="#003f5c"
      onChangeText={(nam) => setPackege(nam)}
    />
  </View>
   
  <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="Rate..."
      placeholderTextColor="#003f5c"
      secureTextEntry={true}
      onChangeText={(cos) => setCost(cos)}
    />
  </View>


  <TouchableOpacity  style={[{marginBottom:screenHeight/7},styles.loginBtn]}>
  <Text style={styles.loginText}>Add Property</Text>
</TouchableOpacity>

</View>
  </View>
  </Card>
  </ScrollView>
 );
}

PropertyForm.navigationOptions = navigationData => {
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


export default PropertyForm
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