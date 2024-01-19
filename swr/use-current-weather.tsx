import useSWR from "swr";

const useCurrentWeather = (lat: number, lon: number) => {
  const key = lat && lon ? ["current-weather", lat, lon] : null;
  const apiKey = process.env.EXPO_PUBLIC_OPENWEATHERMAP_APIKEY as string;

  return useSWR(key, () =>
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    ).then((r) => r.json())
  );
};

export default useCurrentWeather;
