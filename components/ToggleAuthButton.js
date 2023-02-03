import { Pressable, StyleSheet } from "react-native";
import MainText from "./MainText";

export default ({ name, onToggle, isFocused }) => {
  return (
    <Pressable
      style={[styles.toggleContainer, styles[isFocused]]}
      onPress={onToggle}
    >
      <MainText color="blue">{name}</MainText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  toggleContainer: {
    marginTop: 16,
  },
  notFocused: {
    marginBottom: 144,
  },
  focused: {
    marginBottom: 0,
  },
});
