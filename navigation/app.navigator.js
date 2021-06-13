import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CategoryNavigator } from "./category.navigator";
import { Ionicons } from "@expo/vector-icons";
import { SearchNavigator } from "./search.navigator";
import colors from "../constants/colors";
import { FavouriteNavigator } from "./favourite.navigator";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Platform } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { FilterNavigator } from "./Filter.navigator";
import { theme } from "../theme";

const TAB_ICON = {
  Category: "md-restaurant",
  Search: "md-search",
  Map: "md-map",
  Settings: "md-settings",
  Favourites: "ios-star",
};

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
  };
};

const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator()
    : createBottomTabNavigator();

export const TabNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={createScreenOptions}
      tabBarOptions={{
        activeTintColor: colors.accentColor,
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Category" component={CategoryNavigator} />
      <Tab.Screen name="Favourites" component={FavouriteNavigator} />
      <Tab.Screen name="Search" component={SearchNavigator} />
    </Tab.Navigator>
  </NavigationContainer>
);

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Category"
      drawerContentOptions={{
        activeTintColor: colors.primaryColor,
        itemStyle: { marginVertical: 5 },
        labelStyle: { fontFamily: theme.fonts.heading },
      }}
    >
      <Drawer.Screen name="Category" component={CategoryNavigator} />
      <Drawer.Screen name="Favourites" component={FavouriteNavigator} />
      <Drawer.Screen name="Filter" component={FilterNavigator} />
      <Drawer.Screen name="Search" component={SearchNavigator} />
    </Drawer.Navigator>
  </NavigationContainer>
);
