import { Text, StyleSheet } from "react-native";
import MainText from "./MainText";

export default ({ size, mt, children }) => {
  return (
    <MainText color="black" mt={mt}>
      <Text style={[styles.font, styles[size]]}>{children}</Text>
    </MainText>
  );
};

const styles = StyleSheet.create({
  font: {
    fontFamily: "Roboto-Medium",
  },
  lg: {
    fontSize: 30,
    lineHeight: 35,
    letterSpacing: 0.16,
  },
  md: {
    fontSize: 17,
    lineHeight: 22,
    letterSpacing: -0.408,
  },
  sm: {
    fontSize: 16,
    lineHeight: 19,
  },
});
