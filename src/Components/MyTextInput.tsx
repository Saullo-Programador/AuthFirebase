import React from 'react';
import {StyleSheet, TextInput, TextInputProps} from 'react-native';

export function MyTextInput(props: TextInputProps) {
  return (
    <TextInput
      autoCapitalize="none"
      placeholderTextColor="#727272"
      style={styles.input}
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    borderColor: '#1D013F',
    paddingHorizontal: 14,
    color: '#000',
    borderWidth: 1,
    width: '100%',
    height: 58,
    marginBottom: 14,
    fontSize: 18,
  },
});