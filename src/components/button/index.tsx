import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React from 'react';
import colors from '../../styles/color';

interface Props extends TouchableOpacityProps {
  title: string;
  primary?: boolean;
}

export default function Button({title, primary = true, ...rest}: Props) {
  return (
    <TouchableOpacity style={styles.touchableOpacity} {...rest}>
      <View style={{...styles.primary, 
        backgroundColor: primary ? colors.button_green : "transparent"
    }}>
        <Text style={{...styles.text, color: primary ? colors.white : colors.black}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  touchableOpacity: {
    width: '100%',
  },
  primary: {
    width: '100%',
    paddingVertical: 15,
    borderRadius: 8,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 18,
  },
});
