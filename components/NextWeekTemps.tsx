import { StyleSheet, Text, View } from "react-native";
import useFiveDaysForecast from "../swr/use-five-days-forecast";
import { FC, useMemo } from "react";
import { format, eachDayOfInterval } from "date-fns";
import { enUS } from "date-fns/locale";

type Props = {
  lat: number;
  lon: number;
};

const NextWeekTemps: FC<Props> = ({ lat, lon }) => {
  const { data } = useFiveDaysForecast(lat, lon);

  const temperatures = useMemo(() => {
    const todayDate: string = new Date().toISOString().split("T")[0];

    const temperaturesAt12: number[] = [];

    for (const entry of data?.list ?? []) {
      const entryDate: string = entry.dt_txt.split(" ")[0];

      if (entryDate >= todayDate) {
        if (entry.dt_txt.split(" ")[1] === "12:00:00") {
          const temperatureAt12: number = entry.main.temp;
          temperaturesAt12.push(temperatureAt12);

          if (temperaturesAt12.length === 5) {
            break;
          }
        }
      }
    }
    return temperaturesAt12;
  }, [data]);

  const daysOfWeek = eachDayOfInterval({
    start: new Date(),
    end: new Date(new Date().setDate(new Date().getDate() + 4)),
  });
  const weekdays = daysOfWeek.map((day) =>
    format(day, "EEE", { locale: enUS })
  );

  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.cell}>Day</Text>
        <Text style={styles.cell}>Weather</Text>
      </View>
      {temperatures.length > 0 &&
        weekdays.map((weekday, index) => (
          <View style={styles.row} key={index}>
            <Text style={styles.cell}>{weekday}</Text>
            <Text style={styles.cell}>{temperatures[index]}</Text>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  cell: {
    borderWidth: 1,
    width: 200,
    textAlign: "center",
    fontSize: 18,
    color: "black",
    borderColor: "black",
  },
});

export default NextWeekTemps;
