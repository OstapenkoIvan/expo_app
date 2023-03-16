import { useState } from "react";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path, Circle } from "react-native-svg";

import CustomTextInput from "../components/CustomTextInput";
import HeaderText from "../components/HeaderText";
import SubmitButton from "../components/SubmitButton";
import ToggleAuthButton from "../components/ToggleAuthButton";

import AddAvatar from "../assets/add.svg";

import { useTogglePasswordVisibility } from "../hooks/useTogglePasswordVisibility";

export default ({ authType }) => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAvatar, setIsAvatar] = useState(false);
  const [isFocused, setIsFocused] = useState("notFocused");
  const navigation = useNavigation();

  const { passwordVisibility, toggleText, handlePasswordVisibility } =
    useTogglePasswordVisibility();

  const onSubmit = (e) => {
    if (authType === "register") {
      console.log("submitted", login, email, password);
    }
    if (authType === "login") {
      console.log("loggined", email, password);
    }
  };

  const onToggle = (e) => {
    if (authType === "register") {
      navigation.navigate("Login");
    }
    if (authType === "login") {
      navigation.navigate("Register");
    }
  };

  // TODO solve problem with svg import

  return (
    <>
      {authType === "register" && (
        <View style={styles.avatarBox}>
          {/* <AddAvatar style={styles.avatarIcon} /> */}
        </View>
      )}
      <HeaderText size="lg" mt={30}>
        {authType === "register"
          ? "Регистрация"
          : authType === "login"
          ? "Войти"
          : "Incorrect data provided to render, please check"}
      </HeaderText>

      <View style={styles.inputContainer}>
        <View>
          {authType === "register" && (
            <CustomTextInput
              name="login"
              keyboardType="default"
              value={login}
              placeholder="Логин"
              onChangeText={setLogin}
              textContentType="username"
              isFocused={setIsFocused}
            />
          )}
        </View>
        <View style={styles.inputMargin}>
          <CustomTextInput
            name="email"
            keyboardType="email-address"
            value={email}
            placeholder="Адрес электронной почты"
            onChangeText={setEmail}
            textContentType="emailAddress"
            isFocused={setIsFocused}
          />
        </View>
        <View style={[styles.passwordContainer, styles.inputMargin]}>
          <CustomTextInput
            name="password"
            keyboardType="default"
            value={password}
            placeholder="Enter password"
            onChangeText={setPassword}
            textContentType="newPassword"
            secureTextEntry={passwordVisibility}
            isFocused={setIsFocused}
          />
          <Pressable
            onPress={handlePasswordVisibility}
            style={styles.showPasToggle}
          >
            <Text>{toggleText}</Text>
          </Pressable>
        </View>
      </View>

      <SubmitButton
        name={
          authType === "register"
            ? "Зарегистрироваться"
            : authType === "login"
            ? "Войти"
            : "Incorrect data provided to render, please check"
        }
        {...{ onSubmit }}
      />
      <ToggleAuthButton
        name={
          authType === "register"
            ? "Уже есть аккаунт? Войти"
            : authType === "login"
            ? "Нет аккаунта? Зарегистрироваться"
            : "Incorrect data provided to render, please check"
        }
        {...{ isFocused }}
        {...{ onToggle }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  avatarBox: {
    position: "relative",
    width: 120,
    height: 120,
    marginTop: -60,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  avatarIcon: {
    position: "absolute",
    top: 81,
    right: -12,
    width: 25,
    height: 25,
  },
  header: {
    backgroundColor: "red",
  },
  inputContainer: {
    marginTop: 33,
    width: "100%",
    // gap: 16 // Почему не работает Гэп?
  },
  inputMargin: {
    marginTop: 16,
  },
  iconAdd: {
    width: 25,
  },
  inputElement: {
    padding: 16,
    paddingBottom: 15,
    fontSize: 16,
    backgroundColor: "#F6F6F6",
    lineHeight: 19,
    borderRadius: 8,
    borderColor: "#E8E8E8",
    borderWidth: 1,
  },
  passwordContainer: {
    position: "relative",
  },
  showPasToggle: {
    position: "absolute",
    right: 16,
    top: 16,
  },
});
