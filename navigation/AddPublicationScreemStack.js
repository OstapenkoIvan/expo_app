import { View, StyleSheet, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { AntDesign } from "@expo/vector-icons";

import AddPublication from "../screens/AddPublication";

const Tab = createBottomTabNavigator();

export default function AddPublicationScreenStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="AddPublication"
        component={AddPublication}
        options={({ navigation: { goBack, reset, setOptions }, route }) => ({
          title: "Создать публикацию",
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => goBack()}
              style={styles.backButton}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          ),
          tabBarButton: () => (
            <View style={styles.container}>
              <TouchableOpacity
                onPress={() => {
                  reset({
                    index: 1,
                    routes: [{ name: "AddPublication" }],
                  });
                }}
                style={styles.button}
              >
                <AntDesign
                  name="delete"
                  size={24}
                  color="#BDBDBD"
                  style={styles.icon}
                />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    height: 84,
    // height: IS_IPHONE ? RFValue(47) : RFValue(42),
    borderTopWidth: 1,
  },
  button: {
    marginTop: 9,
    marginBottom: 34,
    marginHorizontal: 16,
    width: 70,
    backgroundColor: "#F6F6F6",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    padding: 8,
  },
  backButton: {
    width: 48,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
