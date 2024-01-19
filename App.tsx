import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CityScreen from "./screens/CityScreen";
import HomeScreen from "./screens/HomeScreen";
import { RootStackParamList } from "./types";
import SearchCityScreen from "./screens/SearchCityScreen";
import CityProvider from "./providers/city-provider";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <CityProvider>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "My Weather App",
            }}
          />
          <Stack.Screen name="City" component={CityScreen} />
          <Stack.Screen
            name="SearchCityScreen"
            component={SearchCityScreen}
            options={{
              title: "Add City",
            }}
          />
        </Stack.Navigator>
      </CityProvider>
    </NavigationContainer>
  );
}
