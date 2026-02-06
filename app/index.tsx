import { Image, StyleSheet, Text, View } from "react-native";
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
          <Text style={styles.smallHeaderName}>MOBILEUI</Text>
          <Text style={styles.headerText}>Posts</Text>
        </View>

        <Text style={styles.headerIcon}>⋯</Text>
      </View>

      {/* USER INFO */}
      <View style={styles.userRow}>
        <Image
          style={styles.avatar}
          source={{ uri: "https://picsum.photos/id/82/1500/997" }}
        />
        <View style={{ flex: 1 }}>
          <Text style={styles.username}>mobileui</Text>
          <Text style={styles.subtext}>via cresciayuhhh</Text>
        </View>
        <Text style={styles.userMenu}>⋯</Text>
      </View>

      {/* MAIN IMAGE */}
      <Image
        style={styles.postImage}
        source={{ uri: "https://picsum.photos/400/400" }}
      />

      {/* ACTIONS (left icons + bookmark on right) */}
      <View style={styles.actionsRow}>
        <View style={styles.actionsLeft}>
          <Text style={styles.actionIcon}>♡</Text>
          <Text style={styles.actionIcon}>💬</Text>
          <Text style={styles.actionIcon}>↗</Text>
        </View>
        <Text style={styles.actionIcon}>📌</Text>
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

  /* USER ROW */
  userRow: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: "bold",
    color: "#111",
  },
  subtext: {
    color: "gray",
    fontSize: 12,
    marginTop: 2,
  },
  userMenu: {
    fontSize: 18,
    color: "#111",
    paddingHorizontal: 8,
  },

  /* IMAGE */
  postImage: {
    width: "100%",
    height: 300,
    backgroundColor: "#ccc",
  },

  /* ACTIONS */
  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  actionsLeft: {
    flexDirection: "row",
    gap: 15,
  },
  actionIcon: {
    fontSize: 18,
    color: "#111",
  },
});
