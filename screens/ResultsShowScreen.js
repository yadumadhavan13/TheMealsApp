import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultShowScreen = (props) => {
  const [result, setResult] = useState(null);
  const { id } = props.route.params;
  const mealId = id;

  const getResult = async (mealId) => {
    const response = await yelp.get(`/${mealId}`);
    setResult(response.data);
  };

  useEffect(() => {
    getResult(mealId);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <Image style={styles.imageStyle} source={{ uri: item }}></Image>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    height: 200,
    width: 300,
    margin: 10,
  },
});

export default ResultShowScreen;
