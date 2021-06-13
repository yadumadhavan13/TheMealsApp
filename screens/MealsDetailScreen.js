import React, { useEffect, useState } from "react";
import { ScrollView, Image, View, Text, StyleSheet } from "react-native";
import DefaultText from "../components/DefaultText";
import { theme } from "../theme";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavourite } from "../store/actions/meals";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  );
};

const MealsDetailScreen = (props) => {
  const availableMeals = useSelector((state) => state.meals.meals);
  const { mealId } = props.route.params;
  const mealIdValue = mealId;
  const selectedMeal = availableMeals.find((meal) => meal.id === mealIdValue);
  const favouriteMealOrNot = useSelector((state) =>
    state.meals.favouriteMeals.some((meal) => meal.id === mealId)
  );

  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Favourite"
            iconName={favouriteMealOrNot ? "ios-star" : "ios-star-outline"}
            onPress={() => {
              toggleFavouriteHandler();
            }}
          ></Item>
        </HeaderButtons>
      ),
    });
  }, []);

  const dispatch = useDispatch();
  const toggleFavouriteHandler = () => {
    dispatch(toggleFavourite(mealId));
  };
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Text style={styles.title}>{selectedMeal.title}</Text>
      </View>
      <Image
        source={{ uri: selectedMeal.imageURl }}
        style={styles.image}
      ></Image>
      <View style={styles.details}>
        <DefaultText>{selectedMeal.duration}m</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.title}>Ingredients</Text>
      {selectedMeal.ingradients.map((ingredient) => (
        <ListItem key={ingredient}>{ingredient}</ListItem>
      ))}
      <Text style={styles.title}>Steps</Text>
      {selectedMeal.steps.map((step) => (
        <ListItem key={step}>{step}</ListItem>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: theme.fonts.heading,
    fontSize: 22,
    textAlign: "center",
  },
  image: { width: "100%", height: 200 },
  details: {
    flexDirection: "row",
    padding: 15,
    justifyContent: "space-around",
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
  },
});

export default MealsDetailScreen;
