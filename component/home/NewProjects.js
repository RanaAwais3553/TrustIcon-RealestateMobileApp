import { Dimensions, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import {Card} from 'react-native-elements'
import NewProjectsData from '../../data/NewProjectsData'
import React from 'react'

let {width:screenWidth, height:screenHeight} = Dimensions.get('window')

function NewProjects({onSelectDubai,onSelectTurkey,onSelectPak}) {
    return (
        
        <View style={{flex:1,elevation:50}}>
            <Card containerStyle={{}}>
                <View style={{flex:1,marginBottom:20}}>
            <Text style={{fontWeight:'900', fontSize:20,color:'#121212'}}>Arab Properties</Text>
            </View>
            <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled={true}
            >
            {/* key={element.id} {NewProjectsData.map((element) => {
                return( */}
                <TouchableOpacity
                activeOpacity={0.3}
                 style={{flex:1, marginLeft:10}}
                 onPress={onSelectPak}>
                    <View  style={{flex:1}}>
                    <Image style={{resizeMode:'stretch',height:screenHeight/6,width:screenWidth/1.5}} source= {require('../../assets/projectImages/pakistan.jpg')}/>
                    <Text>Abu Dahbi</Text>
                    <Text>Invest For Future</Text>
                    <Text style={{color:'#e00000'}}>Developed</Text>
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                    activeOpacity={0.3}
                    style={{flex:1, marginLeft:10}}
                    onPress={onSelectTurkey}>
                    <View  style={{flex:1}}>

                    <Image style={{resizeMode:'stretch',height:screenHeight/6,width:screenWidth/1.5}} source= {require('../../assets/projectImages/turkey.jpg')}/>
                    <Text>Dubai</Text>
                    <Text>Invest For Future</Text>
                    <Text style={{color:'#e00000'}}>Developed</Text>
                    </View>           
                    </TouchableOpacity>
                    <TouchableOpacity 
                    activeOpacity={0.3}
                    style={{flex:1, marginLeft:10}}
                    onPress={onSelectDubai}>         
                    <View  style={{flex:1}}>

                    <Image style={{resizeMode:'stretch',height:screenHeight/6,width:screenWidth/1.5}} source= {require('../../assets/projectImages/dubai.jpg')}/>
                    <Text>Sharjah</Text>
                    <Text>Invest For Future</Text>
                    <Text style={{color:'#e00000'}}>Developed</Text>
                    

                    </View>
                    </TouchableOpacity>
                {/* )
            })} */}
</ScrollView>
            </Card>
        </View>
    )
}

export default NewProjects
