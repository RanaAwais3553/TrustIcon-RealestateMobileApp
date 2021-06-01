import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Color from '../../constants/Colors';

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={28}
      color={Platform.OS === 'android' ? Color.primaryColour : Color.primaryColour}
    />
  );
};

export default CustomHeaderButton;
