import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      width: "100%",
      aspectRatio: 5 / 3,
    },
    title: {
      fontSize: 35,
      fontWeight: "600",
      marginVertical: 10,
    },
    subtitle: {
      color: "#525252",
      fontSize: 15,
    },
    infoContainer: {
      margin: 10,
    },
    iconContainer: {
      position: "absolute",
      top: 40,
      left: 10,
    },
  });
  export default styles