import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
  },
  title: {
    fontSize: 30,
    fontWeight: "600",
    marginVertical: 10,
  },
  subtitle: {
    color: "#525252",
    fontSize: 15,
    fontWeight:'400',
  },
  infoContainer: {
    margin: 10,
    borderBottomColor:'gray',
  },
  iconContainer: {
    position: "absolute",
    top: 40,
    left: 10,
  },
  menuTitle:{
    fontSize:30,
    fontWeight:'600',
    paddingTop:12,
    color:'black',
  },
});
export default styles;
