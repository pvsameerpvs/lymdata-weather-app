import { StackScreenProps } from "@react-navigation/stack";
import React, { FC } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import CityTile from "../components/CityTile";
import { RootStackParamList } from "../types";

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  const locations = ["Kondotty", "New Delhi", "London"];
  const degrees = ["12°", " 19°", "2°"];

  return (
    <View style={style.container}>
      <Button
        title="Add City"
        onPress={() => navigation.push("SearchCityScreen")}
      ></Button>

      {locations.map((location, index) => (
        <CityTile
          key={index}
          city={location}
          degree={degrees[index]}
          onPress={() =>
            navigation.push("City", {
              cityName: location,
              cityTemperature: degrees[index],
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
