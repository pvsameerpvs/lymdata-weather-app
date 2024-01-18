import React, { useState } from "react";
import { Button, Text, View, StyleSheet, TextInput } from "react-native";

const CitySearch = () => {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    console.log("Search Text:", searchText);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Enter city name"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingLeft: 10,
    marginBottom: 10,
    width: "100%",
  },
});

export default CitySearch;
