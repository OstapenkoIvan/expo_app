import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  ImageBackground,
} from "react-native";

export default ({ authType, children }) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ImageBackground
          source={require("../assets/PhotoBG.jpg")}
          style={styles.image}
          resizeMode="cover"
        >
          <KeyboardAvoidingView behavior={Platform.OS === "ios" && "padding"}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View
                style={[
                  styles.mainContainer,
                  authType === "register"
                    ? styles.registerContainer
                    : authType === "login"
                    ? styles.loginContainer
                    : null,
                ]}
              >
                {children}
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </ImageBackground>
      </TouchableWithoutFeedback>
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
    // нижнюю часть можно убрать и ничего не изменится

    // position: "absolute",
    // top: 0,
    // height: "100%",
  },
  mainContainer: {
    flex: 0,
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingHorizontal: 16,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  registerContainer: {
    // paddingBottom: 78,
  },
  loginContainer: {
    // paddingBottom: 144,
  },
});
