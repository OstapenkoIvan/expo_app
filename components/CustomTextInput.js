import { useState } from "react";
import { TextInput, StyleSheet } from "react-native";

export default ({
  name,
  keyboardType,
  placeholder,
  onChangeText,
  value,
  textContentType,
  secureTextEntry = false,
  isFocused,
}) => {
  const [focusStyle, setFocusStyle] = useState("notFocused");

  const toggleFocusStyle = () => {
    if (focusStyle === "notFocused") {
      setFocusStyle("focused");
      isFocused("focused");
    } else {
      setFocusStyle("notFocused");
      isFocused("notFocused");
    }
  };

  return (
    <TextInput
      style={[styles.inputElement, styles[focusStyle]]}
      name={name}
      autoCapitalize="none"
      autoCorrect={false}
      keyboardType={keyboardType}
      placeholder={placeholder}
      placeholderTextColor="#BDBDBD"
      value={value}
      enablesReturnKeyAutomatically
      onFocus={toggleFocusStyle}
      onBlur={toggleFocusStyle}
      onChangeText={onChangeText}
      textContentType={textContentType}
      secureTextEntry={secureTextEntry}
    />
  );
};

const styles = StyleSheet.create({
  inputElement: {
    padding: 16,
    paddingBottom: 15,
    fontSize: 16,
    lineHeight: 19,
    borderRadius: 8,
    borderWidth: 1,
  },
  notFocused: {
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
  },
  focused: {
    borderColor: "#FF6C00",
    backgroundColor: "#ffffff",
  },
});
