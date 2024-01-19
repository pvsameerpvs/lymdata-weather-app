import React, { FC, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import useSearchCity from "../swr/use-search-city";
import { useCityStore } from "../providers/city-provider";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types";

type SearchCityScreenProps = StackScreenProps<
  RootStackParamList,
  "SearchCityScreen"
>;

const CitySearch: FC<SearchCityScreenProps> = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const { data } = useSearchCity(searchText);
  const { addCity } = useCityStore();

  const displayText =
    data && Array.isArray(data) ? (
      <FlatList
        style={{
          width: "100%",
        }}
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              addCity({
                cityName: item.name,
                lat: item.lat,
                lon: item.lon,
              });
              navigation.goBack();
            }}
          >
            <View style={styles.card}>
              <Text style={styles.CityTitle}>{item.name}</Text>
              <Text style={styles.item}>
                {item.state}, {item.country}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item, idx) => `${item.name}-${idx}`}
      />
    ) : (
      <Text>Search City</Text>
    );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Enter city name"
        onChangeText={(text) => setSearchText(text)}
        value={searchText}
      />
      {displayText}
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

  CityTitle: {
    fontSize: 20,
    fontWeight: "600",
  },
  card: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 3,
    fontSize: 13,
    height: 44,
  },
});

export default CitySearch;
