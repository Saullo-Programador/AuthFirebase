import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';
import {colors} from '../colors';

interface MyButtonProps extends TouchableOpacityProps {
  title: string;
}
export function MyButton({title, style, ...rest}: MyButtonProps) {
  return (
    <TouchableOpacity {...rest} style={[styles.button, style]}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 19,
    minWidth: 380,

  },
});