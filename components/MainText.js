import { Text, StyleSheet } from "react-native";

export default ({ color, mt, children }) => {
  return (
    <Text style={[styles.font, styles[color], { marginTop: mt ? mt : null }]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  font: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
  },
  gray: {
    color: "#BDBDBD",
  },
  black: {
    color: "#212121",
  },
  blue: {
    color: "#1B4371",
  },
  white: {
    color: "#FFFFFF",
  },
});
