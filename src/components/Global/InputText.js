import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export const InputText = ({
  placeholderText = 'Masukkan',
  placeholderTextColor = 'grey',
  showPassword = false,
  multiline = false,
  numberOfLines = 1,
  onChangeText,
  value,
  style,
  keyboardType = 'default',
  edittable = true,
  selectTextOnFocus = true,
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor={placeholderTextColor}
        style={{
          width: '90%',
          paddingHorizontal: 10,
        }}
        multiline={multiline}
        numberOfLines={numberOfLines}
        secureTextEntry={showPassword}
        value={value}
        onChangeText={text => onChangeText(text)}
        keyboardType={keyboardType}
        editable={edittable}
        selectTextOnFocus={selectTextOnFocus}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
  },
});
