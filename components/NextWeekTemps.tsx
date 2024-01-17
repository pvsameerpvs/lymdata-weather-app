import { StyleSheet, Text, View } from "react-native";

const NextWeekTemps = () => {
  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={styles.cell}>date</Text>
        <Text style={styles.cell}>weather</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>today</Text>
        <Text style={styles.cell}>12°</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>tommarow</Text>
        <Text style={styles.cell}>12°</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>saturday</Text>
        <Text style={styles.cell}>12°</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>sunday</Text>
        <Text style={styles.cell}>12°</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.cell}>monday</Text>
        <Text style={styles.cell}>12°</Text>
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
