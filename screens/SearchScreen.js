import React, { useState } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultList from "../components/ResultLists";
import { SafeArea } from "../components/safe-area.component";

const SearchScreen = (props) => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();
  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price;
    });
  };
  return (
    <>
      <SafeArea>
        <SearchBar
          term={term}
          onTermChange={(newTerm) => setTerm(newTerm)}
          onTermSubmit={() => searchApi(term)}
        ></SearchBar>
        <Text style={{ paddingLeft: 10 }}>{errorMessage}</Text>
        <Text style={{ paddingLeft: 10 }}>
          We have found {results.length} results
        </Text>
        <ScrollView>
          <ResultList
            results={filterResultsByPrice("$")}
            title="Cost Effective"
            navigation={props.navigation}
          ></ResultList>
          <ResultList
            results={filterResultsByPrice("$$")}
            title="Bit Pricier"
            navigation={props.navigation}
          ></ResultList>
          <ResultList
            results={filterResultsByPrice("$$$")}
            title="Big Spender"
            navigation={props.navigation}
          ></ResultList>
        </ScrollView>
      </SafeArea>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
