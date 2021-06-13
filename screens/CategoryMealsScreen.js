import React from "react";
import MealList from "../components/MealList";
import { useSelector } from "react-redux";
import { View, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";

const CategoryMealsScreen = (props) => {
  const { categoryId } = props.route.params;
  const catId = categoryId;
  const availableMeals = useSelector((state) => state.meals.filteredMeals);
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );
  if (displayedMeals.length === 0 && !displayedMeals) {
    return (
      <View style={styles.content}>
        <DefaultText>No Meals found. check your filter!!</DefaultText>
      </View>
    );
  }
  return (
    <MealList
      listData={displayedMeals}
      navigation={props.navigation}
    ></MealList>
  );
};

const styles = StyleSheet.create({
  content: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default CategoryMealsScreen;
