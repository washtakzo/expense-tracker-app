import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import { themeColors } from "./utils/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import AddButton from "./components/AddButton";
import { Provider } from "react-redux";
import { store } from "./store";

const Tab = createBottomTabNavigator();

//TODO:Redux or Context for :
//TODO:Add Expense
//TODO:Delete Expense
//TODO:Update Expense

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="light" />
        <Tab.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: themeColors.secondaryDark },
            headerTintColor: themeColors.textOnPrimary,
            tabBarActiveBackgroundColor: themeColors.secondaryDark,
            tabBarActiveTintColor: themeColors.thirdDark,
            tabBarInactiveBackgroundColor: themeColors.secondaryDark,
            tabBarInactiveTintColor: themeColors.textInactive,
            headerRight: () => <AddButton />,
          }}
        >
          <Tab.Screen
            name="RecentExpenses"
            component={RecentExpenses}
            options={{
              title: "Recent Expenses",
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="hourglass-outline" size={size} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="AllExpenses"
            component={AllExpenses}
            options={{
              title: "All Expenses",
              tabBarIcon: ({ size, color }) => (
                <Ionicons name="calendar-outline" size={size} color={color} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
