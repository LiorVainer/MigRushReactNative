/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBookOpen, faLayerGroup } from "@fortawesome/free-solid-svg-icons";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import ModalScreen from "../screens/ModalScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import TabDetailsScreen from "../screens/TabDetailsScreen";
import TabOptionsScreen from "../screens/TabOptionsScreen";
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { ThemeColors } from "../utils/styles/theme";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  const AppTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: ThemeColors.grayScale(100),
      card: ThemeColors.primary(),
      text: ThemeColors.accent({ lightness: 80 }),
    },
  };

  return (
    <NavigationContainer linking={LinkingConfiguration} theme={AppTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabDetails"
      screenOptions={{
        tabBarActiveTintColor: ThemeColors.accent(),
      }}
    >
      <BottomTab.Screen
        name="TabDetails"
        component={TabDetailsScreen}
        options={({ navigation }: RootTabScreenProps<"TabDetails">) => ({
          title: "Event Details",
          tabBarIcon: ({ color }) => <TabBarIcon icon={faBookOpen} color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("Modal")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}
            >
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabOptions"
        component={TabOptionsScreen}
        options={{
          title: "Options",
          tabBarIcon: ({ color }) => <TabBarIcon icon={faLayerGroup} color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  icon: React.ComponentProps<typeof FontAwesomeIcon>["icon"];
  color: string;
}) {
  return <FontAwesomeIcon size={30} style={{ marginBottom: -3 }} {...props} />;
}
