import { StyleSheet, Text, View } from "react-native";
import useFiveDaysForecast from "../swr/use-five-days-forecast";
import { FC } from "react";

type Props = {
  lat: number;
  lon: number;
};

const NextWeekTemps: FC<Props> = ({ lat, lon }) => {
  const { data } = useFiveDaysForecast(lat, lon);

  // Get today's date
  const todayDate: string = new Date().toISOString().split("T")[0];

  // Initialize an empty array to store temperatures for the next five days at 12:00:00
  const temperaturesAt12: number[] = [];

  // Iterate over the 'list' in the data
  for (const entry of data.list) {
    // Extract the date and time from the 'dt_txt' field
    const entryDate: string = entry.dt_txt.split(" ")[0];

    // Check if the entry date is greater than or equal to today's date
    if (entryDate >= todayDate) {
      // Check if the entry time is 12:00:00
      if (entry.dt_txt.split(" ")[1] === "12:00:00") {
        // Extract the temperature and add it to the array
        const temperatureAt12: number = entry.main.temp;
        temperaturesAt12.push(temperatureAt12);

        // Break the loop when you have temperatures for the next five days
        if (temperaturesAt12.length === 5) {
          break;
        }
      }
    }
  }

  return (
    // <View>
    //   <Text>
    //     {/* {JSON.stringify(data.list)} */}
    //     {JSON.stringify(temperaturesAt12)}
    //     {/* {temperature} */}
    //   </Text>
    // </View>

    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.cell}>date</Text>
        <Text style={styles.cell}>weather</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>today</Text>
        <Text style={styles.cell}>{temperaturesAt12[0]}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>tommarow</Text>
        <Text style={styles.cell}>{temperaturesAt12[1]}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>saturday</Text>
        <Text style={styles.cell}>3{temperaturesAt12[2]}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>sunday</Text>
        <Text style={styles.cell}>{temperaturesAt12[3]}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>monday</Text>
        <Text style={styles.cell}>{temperaturesAt12[4]}</Text>
      </View>
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
