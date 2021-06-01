import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import { Image, ImageBackground, StyleSheet, View } from 'react-native';

import AgentsComponent from '../../component/agents/AgentsComponent';
import HeaderButton from '../../component/headerbutton/HeaderButton'
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const Agents = props =>{

  return(
<View style={{flex:1,backgroundColor:'#fff'}}>
<Image source = {require('../../assets/setAgentBack.jpg')} style={StyleSheet.absoluteFillObject}  />
<ScrollView 
style={{flex:1,marginTop:90}}>
<AgentsComponent
name='Alice Brian'
status = 'active'
contact = '+92 3124478987'
area = 'DHA phase-1'
imges = {require('../../assets/avatar2.jpg')}
/>
<AgentsComponent
name='Donald Douglas'
status = 'active'
contact = '+92 3404478987'
area = 'DHA phase-6'
imges = {require('../../assets/avatar3.jpg')}

/>
<AgentsComponent
name='Mr. Ali'
status = 'active'
contact = '+92 3324478987'
area = 'DHA phase-3'
imges = {require('../../assets/avatar4.jpg')}

/>
<AgentsComponent
name='Smith'
status = 'active'
contact = '+92 3334478987'
area = 'Dha phase-4'
imges = {require('../../assets/avatar5.jpg')}

/>
<AgentsComponent
name='Gold Burge'
status = 'active'
contact = '+92 3404478987'
area = 'DHA phase-2'
imges = {require('../../assets/avatar6.jpg')}

/>
<AgentsComponent
name='Arlin Erra'
status = 'active'
contact = '+92 3034478987'
area = 'DHA phase-7'
imges = {require('../../assets/avatar7.jpg')}

/>
<AgentsComponent
name='Berlin'
status = 'active'
contact = '+92 3084478987'
area = 'DHA phase-8'
imges = {require('../../assets/avatar8.jpg')}

/>
<AgentsComponent
name='Fanty'
status = 'active'
contact = '+92 3094478987'
area = 'DHA phase-9'
imges = {require('../../assets/avatar9.jpg')}

/>
<AgentsComponent
name='Wyana'
status = 'active'
contact = '+92 3444478987'
area = 'DHA phase-4'
imges = {require('../../assets/avatar10.jpg')}

/>
<AgentsComponent
name='Alice Brian'
status = 'active'
contact = '+92 3124478987'
area = 'DHA phase-1'
imges = {require('../../assets/avatar11.jpg')}

/>
<AgentsComponent
name='Mekorny'
status = 'active'
contact = '+92 3454478987'
area = 'DHA phase-6'
imges = {require('../../assets/avatar12.jpg')}

/>

 </ScrollView>
 </View>
);
};

Agents.navigationOptions = navData => {
  
  return{
    
  headerTitle:'Agents',
  headerLeft: () => (
  <HeaderButtons HeaderButtonComponent = {HeaderButton}>
    <Item 
    title='Menu' 
    iconName='ios-menu' 
    onPress={() => {
      navData.navigation.toggleDrawer();
    }} /> 

  </HeaderButtons>
)
  }
}

export default Agents;