import { StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Octicons } from "@expo/vector-icons";

import BarIcons from "./HomeBarTabs";
import HomeScreen from "../screens/Home";

const Tab = createBottomTabNavigator();

export default function HomeScreenStack() {
  return (
    <Tab.Navigator tabBar={(props) => <BarIcons {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Публикации",
          headerRight: () => (
            <TouchableOpacity
              onPress={() => console.log("pressed")}
              style={styles.signOutButton}
            >
              <Octicons name="sign-out" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  signOutButton: {
    width: 48,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
