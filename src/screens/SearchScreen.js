import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price) => {
    //price === $ || $$ || $$$
    return results.filter((result) => {
      return result.price === price;
    });
  };

  //ScrollView allows vertical scrolling in this case for example where horizontal scrolls
  //are taking up the screen and preventing regular vertical scrolling

  return (
    //prevent view from filling more than our screen (especially problem for Android)
    //with flex:1, it will only fill up what is actually viewable. Good fix for issues
    //where content is being cut off the screen. Can also use empty tags
    //<View style={{ flex: 1 }}>
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title="A Bit Pricier"
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
