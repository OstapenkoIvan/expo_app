import { useCallback, useReducer } from "react";
import { Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";
import * as SplashScreen from "expo-splash-screen";

import dispatcher from "./helpers/dispacher";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
// import AddPublicationScreen from "./screens/AddPublication";
// import ProfileScreen from "./screens/Profile";
import HomeScreenStack from "./navigation/HomeScreenStack";
import ProfileScreenStack from "./navigation/ProfileScreenStack";
import AddPublicationScreen from "./navigation/AddPublicationScreemStack";

SplashScreen.preventAutoHideAsync();
const { Navigator, Screen, Group } = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto/Roboto-Bold.ttf"),
  });

  // TODO complete state here if necessary
  const [state, dispatch] = useReducer(dispatcher, {
    isLoading: true,
    isSignout: false,
    userToken: true,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      {state.userToken == null ? (
        <Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Screen
            name="Register"
            component={RegistrationScreen}
            options={{
              animationTypeForReplace: state.isSignout ? "pop" : "push",
            }}
          />
          <Screen
            name="Login"
            component={LoginScreen}
            options={{
              animationTypeForReplace: state.isSignout ? "pop" : "push",
            }}
          />
        </Navigator>
      ) : (
        <Navigator>
          <Screen
            name="HomeScrenStack"
            component={HomeScreenStack}
            options={{
              headerShown: false,
            }}
          />
          <Screen
            name="AddPublicationScreemStack"
            component={AddPublicationScreen}
            options={{
              headerShown: false,
            }}
          />
          <Screen
            name="ProfileScreenStack"
            component={ProfileScreenStack}
            options={{
              headerShown: false,
            }}
          />
        </Navigator>
      )}
    </NavigationContainer>
  );
}
