import { StackScreenProps } from "@react-navigation/stack";
import { FC } from "react";
import { Button, Text, View } from "react-native";
import { RootStackParamList } from "../types";

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

const HomeScreen: FC<HomeScreenProps> = ({ navigation }) => {
  return (
    <View>
      <Text>Home!</Text>
      <Button onPress={() => navigation.push("City", {
        cityId: '123'
      })} title="Open City" />
    </View>
  );
};

export default HomeScreen;
