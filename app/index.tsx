import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      {/* STATUS BAR (time + icons) */}
      <View style={styles.statusBar}>
        <Text style={styles.statusText}>5:26</Text>

        <View style={styles.statusIcons}>
          <FontAwesome5 name="signal" size={13} color="#111" />
          <Ionicons name="wifi" size={16} color="#111" />
          <FontAwesome5 name="battery-three-quarters" size={16} color="#111" />
        </View>
      </View>

      {/* HEADER (back + title + menu) */}
      <View style={styles.header}>
        <Text style={styles.headerIcon}>‹</Text>

        <View style={styles.headerCenter}>
          <Text style={styles.smallHeaderName}>MOBILEUI</Text>
          <Text style={styles.headerText}>Posts</Text>
        </View>

        <View style={{ width: 30 }} />
      </View>

      {/* USER INFO */}
      <View style={styles.userRow}>
        <Image style={styles.avatar} source={require("./assets/bonita.jpg")} />
        <View style={{ flex: 1 }}>
          <Text style={styles.username}>mobileui</Text>
          <Text style={styles.subtext}>via cresciahelanie</Text>
        </View>
        <Text style={styles.userMenu}>⋯</Text>
      </View>

      {/* MAIN IMAGE */}
      <Image
        style={styles.postImage}
        source={require("./assets/myPhoto.jpg")}
      />

      {/* ACTIONS (left icons + bookmark on right) */}
      <View style={styles.actionsRow}>
        <View style={styles.actionsLeft}>
          <Ionicons name="heart-outline" size={22} color="#111" />
          <Ionicons name="chatbubble-outline" size={21} color="#111" />
          <Ionicons name="paper-plane-outline" size={21} color="#111" />
        </View>
        <Ionicons name="bookmark-outline" size={22} color="#111" />
      </View>

      {/* TEXT AREA */}
      <View style={styles.textArea}>
        <View style={styles.likesRow}>
          <Image
            style={styles.likeAvatar}
            source={require("./assets/random.jpg")}
          />
          <Image
            style={styles.likeAvatar}
            source={require("./assets/pompom.jpg")}
          />

          <Text style={styles.likesText}>
            Liked by <Text style={styles.bold}>wellybels</Text> and{" "}
            <Text style={styles.bold}>456 others</Text>
          </Text>
        </View>

        <Text style={styles.comment}>
          <Text style={styles.bold}>nickystarkyy </Text>
          thats the cutest thing ive ever seen :3
        </Text>

        <Text style={styles.comment}>
          <Text style={styles.subtext}>View all 67 comments</Text>
        </Text>

        <Text style={styles.comment}>
          <Text style={styles.bold}>lil_drazeyboi </Text>
          cutie patootie!
        </Text>

        <Text style={styles.comment}>
          <Text style={styles.bold}>sadlysha </Text>
          awwwww!
        </Text>

        <Text style={styles.comment}>
          <Text style={styles.subtext}>1 day ago</Text>
        </Text>
      </View>

      {/* ALERT BUTTON */}
      <View style={styles.alertButton}>
        <Button
          title="Alert"
          onPress={() => Alert.alert("Alert Button pressed")}
        />
      </View>

      {/* BOTTOM NAV (icons) */}
      <View style={styles.bottomNav}>
        <FontAwesome5 name="home" size={22} color="black" />
        <FontAwesome5 name="search" size={22} color="black" />
        <FontAwesome5 name="photo-video" size={22} color="black" />
        <FontAwesome5 name="shopping-bag" size={22} color="black" />
        <FontAwesome5 name="user-alt" size={22} color="black" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingBottom: 64,
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

  statusIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
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
  bold: {
    fontWeight: "bold",
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

  /* BOTTOM NAV */
  bottomNav: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 64,
    borderTopWidth: 1,
    borderTopColor: "#ddd",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
  },

  navIcon: {
    fontSize: 18,
    color: "#111",
  },
  profileDot: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#111",
  },

  /* TEXT AREA */
  textArea: {
    paddingHorizontal: 16,
    paddingTop: 10,
    paddingBottom: 8,
  },

  comment: {
    marginTop: 4,
  },

  likes: {
    color: "#111",
    marginBottom: 6,
  },

  likesRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
  },

  likeAvatar: {
    width: 18,
    height: 18,
    borderRadius: 9,
    marginRight: -4,
    borderWidth: 1,
    borderColor: "#fff",
  },

  likesText: {
    fontSize: 13,
    color: "#111",
    marginLeft: 8,
    lineHeight: 18,
  },

  /* ALERT BUTTON */
  alertButton: {
    paddingHorizontal: 20,
    paddingBottom: 12,
    paddingTop: 6,
  },
});
