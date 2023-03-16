import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BarIcons from "./ProfileBarTabs";
import ProfileScreen from "../screens/Profile";

const Tab = createBottomTabNavigator();

export default function ProfileScreenStack() {
  return (
    <Tab.Navigator tabBar={(props) => <BarIcons {...props} />}>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}
