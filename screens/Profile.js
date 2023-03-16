import { StyleSheet, View, Text, ImageBackground } from "react-native";

export default () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/PhotoBG.jpg")}
        style={styles.image}
        resizeMode="cover"
      >
        <Text>Profile</Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    width: "100%",
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
});
