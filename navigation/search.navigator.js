import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../constants/colors";
import SearchScreen from "../screens/SearchScreen";
import ResultShowScreen from "../screens/ResultsShowScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const SearchStack = createStackNavigator();

export const SearchNavigator = () => {
  return (
    <SearchStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? colors.primaryColor : "",
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : colors.primaryColor,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={({ navigation }) => ({
          title: "Search",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Search"
                iconName="ios-menu"
                onPress={() => {
                  navigation.openDrawer();
                }}
              ></Item>
            </HeaderButtons>
          ),
        })}
      />
      <SearchStack.Screen
        name="ResultShow"
        component={ResultShowScreen}
        options={{
          title: "Details",
        }}
      />
    </SearchStack.Navigator>
  );
};
