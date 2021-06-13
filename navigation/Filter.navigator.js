import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../constants/colors";
import FilterScreen from "../screens/FilterScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FilterStack = createStackNavigator();

export const FilterNavigator = () => {
  return (
    <FilterStack.Navigator
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
      <FilterStack.Screen
        name="Filter"
        component={FilterScreen}
        options={({ navigation }) => ({
          title: "Filter",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Filter"
                iconName="ios-menu"
                onPress={() => {
                  navigation.openDrawer();
                }}
              ></Item>
            </HeaderButtons>
          ),
        })}
      />
    </FilterStack.Navigator>
  );
};
