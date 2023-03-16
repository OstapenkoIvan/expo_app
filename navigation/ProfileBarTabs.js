import { View, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const ProfileTabs = {
  HomeScrenStack: { icon: "appstore-o", screen: "Home" },
  ProfileScreenStack: { icon: "user", screen: "Profile" },
  AddPublicationScreemStack: { icon: "plus" },
};

export default function ProfileBarTabs({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {Object.keys(ProfileTabs).map((name, index) => {
        const onPress = () => {
          navigation.navigate(
            name,
            ProfileTabs[name].screen ?? {
              screen: ProfileTabs[name].screen,
            }
          );
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={index === 0 ? { selected: true } : {}}
            onPress={onPress}
            style={[styles.button, index === 1 ? styles.buttonCenter : null]}
            key={ProfileTabs[name].icon}
          >
            <AntDesign
              name={ProfileTabs[name].icon}
              size={24}
              color={index === 1 ? "white" : "black"}
              style={styles.icon}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    // height: IS_IPHONE ? RFValue(47) : RFValue(42),
    borderTopWidth: 1,
    borderTopColor: "#BDBDBD",
  },
  button: {
    marginTop: 9,
    marginBottom: 34,
    marginHorizontal: 16,
  },
  buttonCenter: {
    width: 70,
    backgroundColor: "#FF6C00",
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    padding: 8,
  },
});
