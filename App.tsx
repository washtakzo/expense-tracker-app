import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllExpenses from "./screens/AllExpenses";
import RecentExpenses from "./screens/RecentExpenses";
import { themeColors } from "./utils/colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import AddButton from "./components/AddButton";
import { Provider } from "react-redux";
import { store } from "./store";
import ManageExpenseScreen from "./screens/ManageExpenseScreen";

const NativeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
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
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="light" />
        <NativeStack.Navigator
          screenOptions={{
            headerShown: false,
            headerStyle: { backgroundColor: themeColors.secondaryDark },
            headerTintColor: themeColors.textOnPrimary,
          }}
        >
          <NativeStack.Screen name="TabNavigator" component={TabNavigator} />
          <NativeStack.Screen
            name="ManageExpenseScreen"
            component={ManageExpenseScreen}
            options={{ headerShown: true }}
          />
        </NativeStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
