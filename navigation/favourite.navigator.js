import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../constants/colors";
import FavouritesScreen from "../screens/FavouritesScreen";
import MealsDetailScreen from "../screens/MealsDetailScreen";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FavouriteStack = createStackNavigator();

export const FavouriteNavigator = () => {
  return (
    <FavouriteStack.Navigator
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
      <FavouriteStack.Screen
        name="Favourite"
        component={FavouritesScreen}
        options={({ navigation }) => ({
          title: "Favourite",
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
              <Item
                title="Favourite"
                iconName="ios-menu"
                onPress={() => {
                  navigation.openDrawer();
                }}
              ></Item>
            </HeaderButtons>
          ),
        })}
      />
      <FavouriteStack.Screen
        name="MealsDetails"
        component={MealsDetailScreen}
        options={{
          title: "Meal Details",
        }}
      />
    </FavouriteStack.Navigator>
  );
};
