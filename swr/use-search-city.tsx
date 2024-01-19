import useSWR from "swr";

const useSearchCity = (citySearchQuery: string) => {
  const key = citySearchQuery ? ["search-city", citySearchQuery] : null;
  const apiKey = process.env.EXPO_PUBLIC_OPENWEATHERMAP_APIKEY as string;

  return useSWR(key, () =>
    fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${citySearchQuery}&limit=10&appid=${apiKey}`
    ).then((r) => r.json())
  );
};

export default useSearchCity;
