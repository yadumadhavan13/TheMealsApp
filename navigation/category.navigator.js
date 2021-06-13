import React from "react";
import CategoryScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailScreen from "../screens/MealsDetailScreen";
import { createStackNavigator } from "@react-navigation/stack";
import colors from "../constants/colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { Navigation } from ".";
import { theme } from "../theme";

const CategoryStack = createStackNavigator();

export const CategoryNavigator = () => {
  return (
    <CategoryStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === "android" ? colors.primaryColor : "",
        },
        headerTintColor:
          Platform.OS === "android" ? "white" : colors.primaryColor,
        headerTitleStyle: {
          fontWeight: "bold",
          fontFamily: theme.fonts.heading,
        },
      }}
    >
      <CategoryStack.Screen
        name="Category"
        component={CategoryScreen}
        options={({ navigation }) => ({
          title: "Categories",
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
      ></CategoryStack.Screen>
      <CategoryStack.Screen
        name="CategoryMeals"
        component={CategoryMealsScreen}
        options={{
          title: "Meals",
        }}
      />
      <CategoryStack.Screen name="MealsDetails" component={MealDetailScreen} />
    </CategoryStack.Navigator>
  );
};
