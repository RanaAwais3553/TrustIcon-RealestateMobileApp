import {Animated, Image, ScrollView, View} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import React, {useRef} from 'react';

import {BANNER_H} from './Constant';
import DummyText from './AboutText';
import HeaderButton from '../../component/headerbutton/HeaderButton'
import { SafeAreaProvider } from 'react-native-safe-area-context';

const About = () => {
  const scrollA = useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaProvider>
    <View>
      {/* <TopNavigation title="Home" scrollA={scrollA} /> */}
      <Animated.ScrollView
        // onScroll={e => console.log(e.nativeEvent.contentOffset.y)}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
      >
        <View style={styles.bannerContainer}>
          <Animated.Image
            style={[{resizeMode:'contain',width:'100%'},styles.banner(scrollA)]}
            source={require('../../assets/swiperaboutimages/property1.jpg')}
          />
        </View>
        <DummyText />
      </Animated.ScrollView>
    </View>
    </SafeAreaProvider>
  );
};

const styles = {
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner: scrollA => ({
    height: BANNER_H,
    width: '200%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),
};

About.navigationOptions = navData => {
  
  return{

  headerTitle:'About',
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

export default About;
