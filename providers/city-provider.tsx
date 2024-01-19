import { ReactNode, createContext, useContext, useState } from "react";

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

const CityContext = createContext<CityContextValue | null>(null);

const CityProvider = (props: { children: ReactNode }) => {
  const [cities, setCities] = useState<City[]>([]);

  const addCity = (city: City) => setCities((prev) => [...prev, city]);
  const removeCity = (city: City) =>
    setCities((prev) => prev.filter((x) => x.cityName !== city.cityName));

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
