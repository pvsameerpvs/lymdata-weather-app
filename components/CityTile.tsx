import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import useCurrentWeather from "../swr/use-current-weather";

interface CityTileProps {
  city: string;
  lat: number;
  lon: number;
  onPress?: () => void;
}

const CityTile: React.FC<CityTileProps> = ({ city, lat, lon, onPress }) => {
  const { data } = useCurrentWeather(lat, lon);

  const temperature = data?.main?.temp || "N/A";

  return (
    <TouchableOpacity style={style.card} onPress={onPress}>
      <Text style={style.currentLocation}>{city}</Text>
      <Text style={style.degrees}>{temperature}°C</Text>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  currentLocation: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  degrees: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
  },
  card: {
    width: "100%",
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    marginTop: 30,
  },
});

export default CityTile;
