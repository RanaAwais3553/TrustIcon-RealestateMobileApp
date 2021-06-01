import Colors from './constants/Colors'
import {Dimensions} from 'react-native'
import {StyleSheet} from 'react-native'

let {width:screenWidth, height:screenHeight} = Dimensions.get('window')

export default StyleSheet.create({


        //************************************Contact Us Page Start  ******************************/

mainContactForm:{
    flex:0.7,
  //  padding:10,
  paddingHorizontal:30,
  
  },
  contactUsImagesView:{
    flex:0.3,
    width:screenWidth,
    //height:screenHeight/4,
  },
  contactUsImages:{
    flex:1,
    width:screenWidth, 
    resizeMode:'cover',
    backgroundColor:'#121212',
  },
  contactUsformMainHeading:{
    flex:0.2,
    justifyContent:'center',
    alignItems:'center',
  },
  contactUsformMainHeadingOuter:{
    fontSize:26,
    fontFamily:'open-sans-bold',
    color:Colors.primaryColor,
    letterSpacing:2,
    textTransform: 'uppercase',
  
  },
  contactUsformMainHeadingInner:{
    fontSize:26,
    fontFamily:'open-sans-bold',
    color:'#0f385a',
    letterSpacing:2,
    textTransform: 'uppercase',
  
  },
  TextinputfieldcontactUs:{
    paddingTop:15,
    borderBottomColor: '#0f385a',
    borderBottomWidth:2,
    color:'#0f385a',
    borderRadius:40,
    fontSize:16,
    fontFamily:'open-sans',
    letterSpacing:2,
    
  },
  


  //*********************************About Page Start****************************/

  aboutMainClass:{
    
    flex:1,
    
  },
  aboutimage:{
    flex:1,
    width:screenWidth,
     height:screenHeight/3,
    resizeMode:'stretch',
    },
abouttextStyle:{
  flex:1,
  padding:5,
},
aboutinnerTextStyle:{
  color:'#c11e8a',
  fontSize:20,
 fontWeight:'bold',
 
},
aboutouterTextStyle:{
fontSize:16,
  padding:5,
  color:'black',
  letterSpacing:2,
 fontFamily:'open-sans',
},
aboutListcontent:{
  flex:1,
  
  
},
sectionHeader: {
  paddingTop: 6,
  paddingLeft: 10,
  paddingRight: 10,
  paddingBottom: 2,
  fontSize: 22,
  fontWeight: 'bold',
  color:'#c11e8a',
  backgroundColor: 'rgba(247,247,247,1.0)',
},
item: {
  padding: 10,
  fontSize: 14,
  height: 44,
},

// **************************** About page Start *******************************
aboutSwiper:{
  resizeMode:'stretch',
  height:screenHeight/3,
  width:screenWidth,
},
Aboutdetail:{
  
  marginLeft:5,
    color: '#808080',
    fontWeight: '600',
    textAlign: 'justify',
    width: screenWidth * 0.93,
    
    
    fontSize: 16,
    lineHeight: 16 * 1.5,
    //paddingBottom:30,
  
},
Aboutheading: {
  marginTop:15,
  color: '#444',
  textTransform: 'uppercase',
  fontSize: 20,
  marginLeft:15,
  fontWeight: '800',
  //textAlign:'center',
  letterSpacing: 1,
  fontFamily:'open-sans-bold',

},


container: {
  flex:1,
  // justifyContent: 'flex-start',
  // alignItems: 'flex-start',
  backgroundColor: 'white',
  padding: 10,
 // marginTop:0,
  elevation:5,
  
},
headerText: {
  padding: 8,
  fontSize: 14,
  color: '#444444',
  textAlign: 'center',
  fontFamily:'open-sans-bold'
},
tabContent: {
  color: '#444444',
  fontSize: 14,
  
  // margin: 24,
  // marginTop:40,
},
seperator: {
  marginHorizontal: 10,
  alignSelf: 'stretch',
  borderTopWidth: 1,
  borderTopColor: '#888888',
  marginTop: 24,
},
tabStyle: {
  borderColor: '#800c10',
  
},
activeTabStyle: {
  backgroundColor: '#800c10',
},

tabStyleinner: {
  borderColor: '#121212',
  
},
activeTabStyleinner: {
  backgroundColor: '#121212',
},

})