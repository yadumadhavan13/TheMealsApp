import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";
import { SafeArea } from "./safe-area.component";

const MealList = (props) => {
  const RenderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageURl}
        onSelectMeal={() => {
          props.navigation.navigate("MealsDetails", {
            mealId: itemData.item.id,
          });
        }}
      ></MealItem>
    );
  };

  return (
    <SafeArea>
      <View style={styles.list}>
        <FlatList
          data={props.listData}
          keyExtractor={(item, index) => {
            item.id;
          }}
          renderItem={RenderMealItem}
          style={styles.listStyle}
        ></FlatList>
      </View>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  listStyle: {
    width: "100%",
  },
});

export default MealList;
