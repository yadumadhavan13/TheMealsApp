import React from "react";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";
import { SafeArea } from "../components/safe-area.component";
import { CATEGORIES } from "../data/dummy-data";

const CategoryScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <SafeArea>
        <CategoryGridTile
          title={itemData.item.title}
          color={itemData.item.color}
          onSelect={() => {
            props.navigation.navigate("CategoryMeals", {
              categoryId: itemData.item.id,
            });
          }}
        ></CategoryGridTile>
      </SafeArea>
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    ></FlatList>
  );
};

export default CategoryScreen;
