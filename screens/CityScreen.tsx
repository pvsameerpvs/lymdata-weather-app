import { StackScreenProps } from "@react-navigation/stack";
import { StyleSheet, Text, View, Button } from "react-native";
import { RootStackParamList } from "../types";

import { useEffect } from "react";
import NextWeekTemps from "../components/NextWeekTemps";

type CityScreenProps = StackScreenProps<RootStackParamList, "City">;

const CityScreen: React.FC<CityScreenProps> = ({
  navigation,
  route: {
    params: { cityName, lat, lon },
  },
}) => {
  useEffect(
    () => navigation.setOptions({ title: cityName }),
    [navigation, cityName]
  );

  return (
    <View style={style.container}>
      <Text style={style.city}>{cityName}</Text>
      <Text style={style.city}>
        {lat} {lon}
      </Text>
      <NextWeekTemps lat={lat} lon={lon} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 100,
  },
  city: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default CityScreen;
