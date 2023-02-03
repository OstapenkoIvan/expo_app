import { Pressable, StyleSheet } from "react-native";
import MainText from "./MainText";

export default ({ name, onSubmit }) => {
  return (
    <Pressable style={styles.submitContainer} onPress={onSubmit}>
      <MainText color="white">{name}</MainText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  submitContainer: {
    alignItems: "center",
    paddingVertical: 16,
    backgroundColor: "#FF6C00",
    width: "100%",
    marginTop: 32,
    borderRadius: 100,
    // overflow: "hidden",
  },
});
