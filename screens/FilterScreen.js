import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { View, Text, StyleSheet, Switch, Platform } from "react-native";
import { theme } from "../theme";
import colors from "../constants/colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals";

const FilterSwitch = (props) => {
  return (
    <View style={styles.filterContainer}>
      <Text>{props.label}</Text>
      <Switch
        trackColor={{ true: colors.primaryColor, false: colors.accentColor }}
        thumbColor={Platform.OS === "android" ? colors.primaryColor : ""}
        value={props.state}
        onValueChange={props.onChange}
      ></Switch>
    </View>
  );
};

const FilterScreen = (props) => {
  dispatch = useDispatch();
  const { navigation } = props;
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title="Save"
            iconName="ios-save"
            onPress={() => {
              saveFilters();
            }}
          ></Item>
        </HeaderButtons>
      ),
    });
  }, []);

  console.log("components rebuild occured");

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLsctoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLsctoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    dispatch(setFilters(appliedFilters));
  }, [isGlutenFree, isLsctoseFree, isVegan, isVegetarian, dispatch]);

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available filter / Restrictions</Text>
      <FilterSwitch
        label="Gluten-Free"
        state={isGlutenFree}
        onChange={(newValue) => setIsGlutenFree(newValue)}
      ></FilterSwitch>
      <FilterSwitch
        label="Lactose-Free"
        state={isLsctoseFree}
        onChange={(newValue) => setIsLactoseFree(newValue)}
      ></FilterSwitch>
      <FilterSwitch
        label="Vegan"
        state={isVegan}
        onChange={(newValue) => setIsVegan(newValue)}
      ></FilterSwitch>
      <FilterSwitch
        label="Vegetarian"
        state={isVegetarian}
        onChange={(newValue) => setIsVegetarian(newValue)}
      ></FilterSwitch>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontFamily: theme.fonts.heading,
    fontSize: 22,
    margin: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginVertical: 10,
  },
});

export default FilterScreen;
