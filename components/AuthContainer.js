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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={styles.image}
        source={require("../assets/PhotoBG.jpg")}
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          // style={styles.inputContainer}
        >
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
  );
};

const styles = StyleSheet.create({
  mainContainer: {
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
  image: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
  },
});
