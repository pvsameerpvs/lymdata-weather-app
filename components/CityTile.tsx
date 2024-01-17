import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

interface CityTileProps {
  city: string;
  degree: string;
  onPress?: () => void;
}

const CityTile: React.FC<CityTileProps> = ({ city, degree, onPress }) => {
  return (
    <TouchableOpacity style={style.card} onPress={onPress}>
      <View>
        <Text style={style.currentLocation}>{city}</Text>
        <Text style={style.degrees}>{degree}</Text>
      </View>
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
