import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      {/* STATUS BAR (time + icons) */}
      <View style={styles.statusBar}>
        <Text style={styles.statusText}>5:26</Text>
        <Text style={styles.statusText}>📶 Wi-Fi 🔋</Text>
      </View>

      {/* HEADER (back + title + menu) */}
      <View style={styles.header}>
        <Text style={styles.headerIcon}>‹</Text>

        <View style={styles.headerCenter}>
          <Text style={styles.smallHeaderName}>XO_SQUARED</Text>
          <Text style={styles.headerText}>Posts</Text>
        </View>

        <Text style={styles.headerIcon}>⋯</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },

  /* STATUS BAR */
  statusBar: {
    height: 28,
    paddingHorizontal: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statusText: {
    fontSize: 12,
    color: "#111",
    fontWeight: "600",
  },

  /* HEADER */
  header: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerIcon: {
    width: 30,
    textAlign: "center",
    fontSize: 22,
    color: "#111",
  },
  headerCenter: {
    alignItems: "center",
  },
  smallHeaderName: {
    fontSize: 11,
    color: "gray",
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#111",
  },
});
