import {
  Button,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  View,
} from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import React, { useState } from 'react'

import AllStyle from '../../AllStyle'
import Colors from '../../constants/Colors'
import HeaderButton from '../../component/headerbutton/HeaderButton'
import HeaderLogo from '../headerlogo/HeaderLogo'
import SocialMediaIcon from '../../component/socialmediaIcon/SocialMediaIcon'

const ContactUs = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  const [errors, setErrors] = useState({})

  const submitHandler = async () => {
    try {
      const response = await fetch(
        'http://chiltern.herokuapp.com/api/contact/almanzal',
        {
          method: 'POST',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, subject, email, message }),
        }
      )
      const resData = await response.json()
      if (resData) {
        console.log('submit succefully!')
        alert('submit succefully!')
      }
    } catch (err) {
      setErrors(err)
      console.log(err)
    }
  }

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{flex:1}}
  >
    <View style={{ flex: 1 }}>
      <View style={AllStyle.contactUsImagesView}>
        <Image
          source={require('../../assets/contactimgs.gif')}
          style={AllStyle.contactUsImages}
        />
      </View>
      <View style={AllStyle.mainContactForm}>
        <View style={AllStyle.contactUsformMainHeading}>
          <Text style={AllStyle.contactUsformMainHeadingOuter}>
            {' '}
            Contact{' '}
            <Text style={AllStyle.contactUsformMainHeadingInner}> Us</Text>{' '}
          </Text>
        </View>
       
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1 }}>
                <TextInput
                  style={AllStyle.TextinputfieldcontactUs}
                  placeholder='Name'
                  onChangeText={(name) => setName(name)}
                  value={name}
                  placeholderTextColor='#0f385a'
                />

                {errors.name}

                <TextInput
                  style={AllStyle.TextinputfieldcontactUs}
                  placeholder='Email'
                  placeholderTextColor='#0f385a'
                  onChangeText={(useremail) => setEmail(useremail)}
                  value={email}
                  textContentType='emailAddress'
                />
                {errors.email}
                <TextInput
                  style={AllStyle.TextinputfieldcontactUs}
                  placeholder='Subject'
                  placeholderTextColor='#0f385a'
                  onChangeText={(subject) => setSubject(subject)}
                  value={subject}
                />
                {errors.subject}

                <TextInput
                  style={AllStyle.TextinputfieldcontactUs}
                  placeholder='Leave your Message Here !'
                  placeholderTextColor='#0f385a'
                  multiline={true}
                  numberOfLines={2}
                  onChangeText={(usermessage) => setMessage(usermessage)}
                  value={message}
                />
              </View>
            </View>
              <Button style={{paddingTop:StatusBar.currentHeight}} title='Submit' color={Colors.primaryColor} onPress={submitHandler} />

            <View
              style={{
                paddingTop: StatusBar.currentHeight * 2.5,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <SocialMediaIcon
                facebookSocial='https://www.facebook.com/trusticonae'
                twitterSocial='https://twitter.com/Trusticon1'
                linkedInSocial='https://www.linkedin.com/in/trust-icon-a5949020a/'
                instagramSocial='https://www.instagram.com/trusticon1/'
                websiteSocial='https://trusticon.ae/'
              />
            </View>

      </View>
    </View>
    </KeyboardAvoidingView>
  )
}

ContactUs.navigationOptions = (navData) => {
  return {
    headerTitle: () => <HeaderLogo/>,
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title='Menu'
          iconName='ios-menu'
          onPress={() => {
            navData.navigation.toggleDrawer()
          }}
        />
      </HeaderButtons>
    ),
  }
}

export default ContactUs
