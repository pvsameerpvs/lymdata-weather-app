import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type City = {
  cityName: string;
  lat: number;
  lon: number;
};

type CityContextValue = {
  cities: City[];
  addCity: (city: City) => void;
  removeCity: (city: City) => void;
};

const CITY_STORAGE_KEY = "@cities";
const CityContext = createContext<CityContextValue | null>(null);

const CityProvider = (props: { children: ReactNode }) => {
  const [cities, setCities] = useState<City[]>([]);

  const addCity = (city: City) => updateCities([...cities, city]);
  const removeCity = (city: City) =>
    updateCities(cities.filter((x) => x.cityName !== city.cityName));

  const updateCities = (cities: City[]) => {
    setCities(cities);
    saveCities(cities);
  };

  const loadCities = async () => {
    try {
      const _cities = await AsyncStorage.getItem(CITY_STORAGE_KEY);
      setCities(JSON.parse(_cities ?? "[]"));
    } catch {}
  };

  const saveCities = async (cities: City[]) => {
    try {
      await AsyncStorage.setItem(CITY_STORAGE_KEY, JSON.stringify(cities));
    } catch {}
  };

  useEffect(() => {
    loadCities();
  }, []);

  return (
    <CityContext.Provider
      value={{
        cities,
        addCity,
        removeCity,
      }}
    >
      {props.children}
    </CityContext.Provider>
  );
};

export const useCityStore = () => {
  const values = useContext(CityContext);
  if (!values) {
    throw new Error("Cannot use this hook outside CityProvider");
  }

  return values;
};

export default CityProvider;
