import React from "react";
import { Text, StyleSheet } from "react-native";
import { theme } from "../theme";

const DefaultText = (props) => {
  return <Text styles={styles.text}>{props.children}</Text>;
};

const styles = StyleSheet.create({
  text: { fontFamily: theme.fonts.body },
});

export default DefaultText;
