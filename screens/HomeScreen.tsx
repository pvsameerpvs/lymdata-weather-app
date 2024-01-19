import { StackScreenProps } from "@react-navigation/stack";
import React, { FC } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import CityTile from "../components/CityTile";
import { RootStackParamList } from "../types";
import { useCityStore } from "../providers/city-provider";

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const { cities } = useCityStore();

  return (
    <View style={style.container}>
      <Button
        title="Add City"
        onPress={() => navigation.push("SearchCityScreen")}
      ></Button>

      {cities.map((city, index) => (
        <CityTile
          key={index}
          city={city.cityName}
          lat={city.lat}
          lon={city.lon}
          onPress={() =>
            navigation.push("City", {
              cityName: city.cityName,
              lat: city.lat,
              lon: city.lon,
            })
          }
        />
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  locationTitle: {
    fontSize: 25,
    fontWeight: "100",
  },
});

export default HomeScreen;
